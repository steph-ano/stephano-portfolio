package com.stephano.portfolio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CvDataDto {

    private Personal personal;
    private Education education;
    private List<SkillCategory> skillCategories;
    private List<Certification> certifications;
    private List<MusicalInfluence> musicalInfluences;

    public CvDataDto() {}

    public Personal getPersonal() { return personal; }
    public void setPersonal(Personal personal) { this.personal = personal; }

    public Education getEducation() { return education; }
    public void setEducation(Education education) { this.education = education; }

    public List<SkillCategory> getSkillCategories() { return skillCategories; }
    public void setSkillCategories(List<SkillCategory> skillCategories) { this.skillCategories = skillCategories; }

    public List<Certification> getCertifications() { return certifications; }
    public void setCertifications(List<Certification> certifications) { this.certifications = certifications; }

    public List<MusicalInfluence> getMusicalInfluences() { return musicalInfluences; }
    public void setMusicalInfluences(List<MusicalInfluence> musicalInfluences) { this.musicalInfluences = musicalInfluences; }

    public static class Personal {
        private String name;
        private String shortName;
        private String role;
        private String tagline;
        private String location;
        private String email;
        private String phone;
        private String linkedin;
        private String github;
        private String statement;
        private String artisticPhilosophy;

        public Personal() {}

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getShortName() { return shortName; }
        public void setShortName(String shortName) { this.shortName = shortName; }

        public String getRole() { return role; }
        public void setRole(String role) { this.role = role; }

        public String getTagline() { return tagline; }
        public void setTagline(String tagline) { this.tagline = tagline; }

        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }

        public String getLinkedin() { return linkedin; }
        public void setLinkedin(String linkedin) { this.linkedin = linkedin; }

        public String getGithub() { return github; }
        public void setGithub(String github) { this.github = github; }

        public String getStatement() { return statement; }
        public void setStatement(String statement) { this.statement = statement; }

        public String getArtisticPhilosophy() { return artisticPhilosophy; }
        public void setArtisticPhilosophy(String artisticPhilosophy) { this.artisticPhilosophy = artisticPhilosophy; }
    }

    public static class Education {
        private String institution;
        private String campus;
        private String degree;
        private String cycle;
        private String period;
        private String location;

        public Education() {}

        public String getInstitution() { return institution; }
        public void setInstitution(String institution) { this.institution = institution; }

        public String getCampus() { return campus; }
        public void setCampus(String campus) { this.campus = campus; }

        public String getDegree() { return degree; }
        public void setDegree(String degree) { this.degree = degree; }

        public String getCycle() { return cycle; }
        public void setCycle(String cycle) { this.cycle = cycle; }

        public String getPeriod() { return period; }
        public void setPeriod(String period) { this.period = period; }

        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
    }

    public static class SkillCategory {
        private String category;
        private String icon;
        private String color;
        private List<String> skills;

        public SkillCategory() {}

        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }

        public String getIcon() { return icon; }
        public void setIcon(String icon) { this.icon = icon; }

        public String getColor() { return color; }
        public void setColor(String color) { this.color = color; }

        public List<String> getSkills() { return skills; }
        public void setSkills(List<String> skills) { this.skills = skills; }
    }

    public static class Certification {
        private String title;
        private String issuer;
        private String badge;

        public Certification() {}

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }

        public String getIssuer() { return issuer; }
        public void setIssuer(String issuer) { this.issuer = issuer; }

        public String getBadge() { return badge; }
        public void setBadge(String badge) { this.badge = badge; }
    }

    public static class MusicalInfluence {
        private String name;
        private String genre;
        private String vibe;

        public MusicalInfluence() {}

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getGenre() { return genre; }
        public void setGenre(String genre) { this.genre = genre; }

        public String getVibe() { return vibe; }
        public void setVibe(String vibe) { this.vibe = vibe; }
    }
}
