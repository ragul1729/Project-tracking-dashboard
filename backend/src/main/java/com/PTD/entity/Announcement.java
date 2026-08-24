package com.PTD.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "announcement")
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long announcementId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private Boolean globalAnnouncement = false;

    @ManyToOne
    @JoinColumn(
            name = "created_by_user_id",
            nullable = false
    )
    private User createdBy;

    @ManyToMany
    @JoinTable(
            name = "announcement_project",
            joinColumns = @JoinColumn(
                    name = "announcement_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "project_id"
            )
    )
    private Set<Project> projects;

    public Long getAnnouncementId() {
        return announcementId;
    }

    public void setAnnouncementId(
            Long announcementId) {
        this.announcementId = announcementId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(
            String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(
            String message) {
        this.message = message;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(
            LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Boolean getGlobalAnnouncement() {
        return globalAnnouncement;
    }

    public void setGlobalAnnouncement(
            Boolean globalAnnouncement) {
        this.globalAnnouncement =
                globalAnnouncement;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(
            User createdBy) {
        this.createdBy = createdBy;
    }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(
            Set<Project> projects) {
        this.projects = projects;
    }
}