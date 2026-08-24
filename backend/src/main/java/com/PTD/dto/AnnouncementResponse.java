package com.PTD.dto;

import java.time.LocalDateTime;
import java.util.Set;

public class AnnouncementResponse {

    private Long announcementId;

    private String title;

    private String message;

    private String createdBy;

    private LocalDateTime createdAt;

    private Boolean globalAnnouncement;

    private Set<Long> projectIds;

    public Long getAnnouncementId() {
        return announcementId;
    }

    public void setAnnouncementId(Long announcementId) {
        this.announcementId = announcementId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Boolean getGlobalAnnouncement() {
        return globalAnnouncement;
    }

    public void setGlobalAnnouncement(Boolean globalAnnouncement) {
        this.globalAnnouncement = globalAnnouncement;
    }

    public Set<Long> getProjectIds() {
        return projectIds;
    }

    public void setProjectIds(Set<Long> projectIds) {
        this.projectIds = projectIds;
    }
}