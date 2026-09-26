package com.stephano.portfolio.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

@Service
public class GitHubService {

    private static final Logger logger = LoggerFactory.getLogger(GitHubService.class);

    private final RestClient restClient;
    private final ObjectMapper objectMapper;

    @Value("${github.token:}")
    private String githubToken;

    public GitHubService(
            @Value("${github.api.base-url:https://api.github.com}") String baseUrl,
            ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
        this.restClient = RestClient.builder()
                .baseUrl(baseUrl)
                .defaultHeader("User-Agent", "StephanoValdivia-Portfolio-App")
                .defaultHeader("Accept", "application/vnd.github.v3+json")
                .build();
    }

    public JsonNode fetchRepoInfo(String owner, String repo) {
        try {
            return restClient.get()
                    .uri("/repos/{owner}/{repo}", owner, repo)
                    .headers(this::applyAuthHeader)
                    .retrieve()
                    .body(JsonNode.class);
        } catch (Exception e) {
            logger.warn("GitHub API error fetching repo {}/{}: {}", owner, repo, e.getMessage());
            return null;
        }
    }

    public Map<String, Double> fetchRepoLanguages(String owner, String repo) {
        try {
            JsonNode node = restClient.get()
                    .uri("/repos/{owner}/{repo}/languages", owner, repo)
                    .headers(this::applyAuthHeader)
                    .retrieve()
                    .body(JsonNode.class);

            if (node == null || !node.isObject()) {
                return Map.of();
            }

            long totalBytes = 0;
            Iterator<Map.Entry<String, JsonNode>> fields = node.fields();
            while (fields.hasNext()) {
                totalBytes += fields.next().getValue().asLong(0);
            }

            Map<String, Double> result = new HashMap<>();
            if (totalBytes > 0) {
                fields = node.fields();
                while (fields.hasNext()) {
                    Map.Entry<String, JsonNode> entry = fields.next();
                    double pct = Math.round((entry.getValue().asDouble() / totalBytes) * 1000.0) / 10.0;
                    result.put(entry.getKey(), pct);
                }
            }
            return result;
        } catch (Exception e) {
            logger.warn("GitHub API error fetching languages for {}/{}: {}", owner, repo, e.getMessage());
            return Map.of();
        }
    }

    public String fetchRepoReadme(String owner, String repo) {
        try {
            return restClient.get()
                    .uri("/repos/{owner}/{repo}/readme", owner, repo)
                    .headers(headers -> {
                        applyAuthHeader(headers);
                        headers.set("Accept", "application/vnd.github.raw+json");
                    })
                    .retrieve()
                    .body(String.class);
        } catch (Exception e) {
            logger.warn("GitHub API error fetching README for {}/{}: {}", owner, repo, e.getMessage());
            return null;
        }
    }

    private void applyAuthHeader(HttpHeaders headers) {
        if (githubToken != null && !githubToken.isBlank() && !githubToken.startsWith("${")) {
            headers.setBearerAuth(githubToken.trim());
        }
    }
}
