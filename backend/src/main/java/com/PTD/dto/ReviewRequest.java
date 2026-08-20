package com.PTD.dto;

public class ReviewRequest {

    private Long projectId;
    private Long panelId;
    private Integer reviewNumber;
    private String remarks;

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Long getPanelId() {
        return panelId;
    }

    public void setPanelId(Long panelId) {
        this.panelId = panelId;
    }

    public Integer getReviewNumber() {
        return reviewNumber;
    }

    public void setReviewNumber(
            Integer reviewNumber) {

        this.reviewNumber = reviewNumber;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(
            String remarks) {

        this.remarks = remarks;
    }
}