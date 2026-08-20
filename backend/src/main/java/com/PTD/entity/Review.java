package com.PTD.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "panel_id")
    private ReviewPanel panel;

    private Integer reviewNumber;

    private LocalDate reviewDate;

    private String remarks;

    public Long getReviewId() {
        return reviewId;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public ReviewPanel getPanel() {
        return panel;
    }

    public void setPanel(ReviewPanel panel) {
        this.panel = panel;
    }

    public Integer getReviewNumber() {
        return reviewNumber;
    }

    public void setReviewNumber(
            Integer reviewNumber) {

        this.reviewNumber = reviewNumber;
    }

    public LocalDate getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(
            LocalDate reviewDate) {

        this.reviewDate = reviewDate;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(
            String remarks) {

        this.remarks = remarks;
    }
}