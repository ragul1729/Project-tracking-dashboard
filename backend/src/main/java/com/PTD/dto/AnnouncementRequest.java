package com.PTD.dto;

import java.util.Set;

public class AnnouncementRequest {

    private String title;

    private String message;

    private Long createdByUserId;

    private Boolean globalAnnouncement;

    private Set<Long> projectIds;

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

    public Long getCreatedByUserId() {
        return createdByUserId;
    }

    public void setCreatedByUserId(Long createdByUserId) {
        this.createdByUserId = createdByUserId;
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