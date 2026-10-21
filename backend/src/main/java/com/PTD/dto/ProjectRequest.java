package com.PTD.dto;

import java.util.List;

public class ProjectRequest {

    private String projectTitle;

    private String projectDescription;

    private String degree;

    private String department;

    private String teamNumber;

    private String status;

    private String mentorId;

    private List<String> studentIds;

    public String getProjectTitle() {
        return projectTitle;
    }

    public void setProjectTitle(
            String projectTitle) {
        this.projectTitle = projectTitle;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(
            String projectDescription) {
        this.projectDescription =
                projectDescription;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getTeamNumber() {
        return teamNumber;
    }

    public void setTeamNumber(
            String teamNumber) {
        this.teamNumber = teamNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMentorId() {
        return mentorId;
    }

    public void setMentorId(String mentorId) {
        this.mentorId = mentorId;
    }

    public List<String> getStudentIds() {
        return studentIds;
    }

    public void setStudentIds(
            List<String> studentIds) {
        this.studentIds = studentIds;
    }
}