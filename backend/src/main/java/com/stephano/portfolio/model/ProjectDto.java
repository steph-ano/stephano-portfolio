package com.stephano.portfolio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProjectDto {
    private String id;
    private String name;
    private String displayName;
    private String tagline;
    private String description;
    private String customDescription;
    private String githubOwner;
    private String githubRepo;
    private String githubUrl;
    private String homepage;
    private String primaryLanguage;
    private Map<String, Double> languages;
    private List<String> topics;
    private int stars;
    private int forks;
    private int openIssues;
    private boolean featured;
    private int order;
    private String badgeColor;
    private String bpm;
    private String soundMood;
    private String accentColor;
    private String readmeMarkdown;
    private String lastUpdated;

    public ProjectDto() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDisplayName() { return displayName; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }

    public String getTagline() { return tagline; }
    public void setTagline(String tagline) { this.tagline = tagline; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCustomDescription() { return customDescription; }
    public void setCustomDescription(String customDescription) { this.customDescription = customDescription; }

    public String getGithubOwner() { return githubOwner; }
    public void setGithubOwner(String githubOwner) { this.githubOwner = githubOwner; }

    public String getGithubRepo() { return githubRepo; }
    public void setGithubRepo(String githubRepo) { this.githubRepo = githubRepo; }

    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }

    public String getHomepage() { return homepage; }
    public void setHomepage(String homepage) { this.homepage = homepage; }

    public String getPrimaryLanguage() { return primaryLanguage; }
    public void setPrimaryLanguage(String primaryLanguage) { this.primaryLanguage = primaryLanguage; }

    public Map<String, Double> getLanguages() { return languages; }
    public void setLanguages(Map<String, Double> languages) { this.languages = languages; }

    public List<String> getTopics() { return topics; }
    public void setTopics(List<String> topics) { this.topics = topics; }

    public int getStars() { return stars; }
    public void setStars(int stars) { this.stars = stars; }

    public int getForks() { return forks; }
    public void setForks(int forks) { this.forks = forks; }

    public int getOpenIssues() { return openIssues; }
    public void setOpenIssues(int openIssues) { this.openIssues = openIssues; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public int getOrder() { return order; }
    public void setOrder(int order) { this.order = order; }

    public String getBadgeColor() { return badgeColor; }
    public void setBadgeColor(String badgeColor) { this.badgeColor = badgeColor; }

    public String getBpm() { return bpm; }
    public void setBpm(String bpm) { this.bpm = bpm; }

    public String getSoundMood() { return soundMood; }
    public void setSoundMood(String soundMood) { this.soundMood = soundMood; }

    public String getAccentColor() { return accentColor; }
    public void setAccentColor(String accentColor) { this.accentColor = accentColor; }

    public String getReadmeMarkdown() { return readmeMarkdown; }
    public void setReadmeMarkdown(String readmeMarkdown) { this.readmeMarkdown = readmeMarkdown; }

    public String getLastUpdated() { return lastUpdated; }
    public void setLastUpdated(String lastUpdated) { this.lastUpdated = lastUpdated; }
}
