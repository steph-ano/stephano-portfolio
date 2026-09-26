package com.stephano.portfolio.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stephano.portfolio.model.ProjectDto;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.*;

@Service
public class ProjectService {

    private static final Logger logger = LoggerFactory.getLogger(ProjectService.class);

    private final GitHubService gitHubService;
    private final ObjectMapper objectMapper;
    private List<ProjectDto> staticProjectsConfig = new ArrayList<>();

    public ProjectService(GitHubService gitHubService, ObjectMapper objectMapper) {
        this.gitHubService = gitHubService;
        this.objectMapper = objectMapper;
    }

    @PostConstruct
    public void init() {
        loadStaticConfig();
    }

    private synchronized void loadStaticConfig() {
        try {
            ClassPathResource resource = new ClassPathResource("projects-config.json");
            try (InputStream inputStream = resource.getInputStream()) {
                staticProjectsConfig = objectMapper.readValue(inputStream, new TypeReference<List<ProjectDto>>() {});
                logger.info("Loaded {} projects from projects-config.json", staticProjectsConfig.size());
            }
        } catch (Exception e) {
            logger.error("Failed to load projects-config.json: {}", e.getMessage(), e);
            staticProjectsConfig = new ArrayList<>();
        }
    }

    @Cacheable("projects")
    public List<ProjectDto> getProjects() {
        if (staticProjectsConfig.isEmpty()) {
            loadStaticConfig();
        }

        List<ProjectDto> enrichedList = new ArrayList<>();

        for (ProjectDto project : staticProjectsConfig) {
            ProjectDto enriched = copyProject(project);

            if (project.getGithubOwner() != null && project.getGithubRepo() != null) {
                try {
                    JsonNode repoData = gitHubService.fetchRepoInfo(project.getGithubOwner(), project.getGithubRepo());
                    if (repoData != null) {
                        enriched.setStars(repoData.path("stargazers_count").asInt(project.getStars()));
                        enriched.setForks(repoData.path("forks_count").asInt(project.getForks()));
                        enriched.setOpenIssues(repoData.path("open_issues_count").asInt(0));
                        enriched.setLastUpdated(repoData.path("pushed_at").asText(null));
                        if (repoData.hasNonNull("html_url")) {
                            enriched.setGithubUrl(repoData.path("html_url").asText());
                        }
                    }

                    Map<String, Double> dynamicLanguages = gitHubService.fetchRepoLanguages(project.getGithubOwner(), project.getGithubRepo());
                    if (dynamicLanguages != null && !dynamicLanguages.isEmpty()) {
                        enriched.setLanguages(dynamicLanguages);
                    }
                } catch (Exception e) {
                    logger.warn("Could not enrich project {}: {}", project.getId(), e.getMessage());
                }
            }

            enrichedList.add(enriched);
        }

        enrichedList.sort(Comparator.comparingInt(ProjectDto::getOrder));
        return enrichedList;
    }

    @Cacheable(value = "projectDetails", key = "#id")
    public Optional<ProjectDto> getProjectById(String id) {
        List<ProjectDto> all = getProjects();
        Optional<ProjectDto> match = all.stream()
                .filter(p -> p.getId().equalsIgnoreCase(id) || p.getName().equalsIgnoreCase(id))
                .findFirst();

        if (match.isPresent()) {
            ProjectDto detail = copyProject(match.get());
            if (detail.getGithubOwner() != null && detail.getGithubRepo() != null) {
                String readme = gitHubService.fetchRepoReadme(detail.getGithubOwner(), detail.getGithubRepo());
                if (readme != null && !readme.isBlank()) {
                    detail.setReadmeMarkdown(readme);
                } else {
                    detail.setReadmeMarkdown(generateFallbackReadme(detail));
                }
            } else {
                detail.setReadmeMarkdown(generateFallbackReadme(detail));
            }
            return Optional.of(detail);
        }

        return Optional.empty();
    }

    @CacheEvict(value = {"projects", "projectDetails"}, allEntries = true)
    public void clearCache() {
        logger.info("Evicting projects cache");
        loadStaticConfig();
    }

    private ProjectDto copyProject(ProjectDto src) {
        try {
            return objectMapper.readValue(objectMapper.writeValueAsString(src), ProjectDto.class);
        } catch (Exception e) {
            return src;
        }
    }

    private String generateFallbackReadme(ProjectDto p) {
        return "# " + p.getDisplayName() + "\n\n" +
                "> **" + p.getTagline() + "**\n\n" +
                "## Descripción de Arquitectura\n" +
                p.getDescription() + "\n\n" +
                p.getCustomDescription() + "\n\n" +
                "## Stack & Tecnologías\n" +
                "- **Lenguaje Principal**: " + p.getPrimaryLanguage() + "\n" +
                "- **Topics**: " + String.join(", ", p.getTopics() != null ? p.getTopics() : List.of()) + "\n\n" +
                "## Atributos Sonoros & Concepto\n" +
                "- **BPM / Pulso**: " + (p.getBpm() != null ? p.getBpm() : "Dynamic") + "\n" +
                "- **Atmósfera Sonora**: " + (p.getSoundMood() != null ? p.getSoundMood() : "Experimental") + "\n\n" +
                "[Ver en GitHub](" + p.getGithubUrl() + ")";
    }
}
