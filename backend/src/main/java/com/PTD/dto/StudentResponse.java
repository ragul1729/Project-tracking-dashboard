package com.PTD.dto;

import com.PTD.entity.Project;

public class StudentResponse extends UserResponse {

    private Long projectID;
    private Integer academicYear;

    public Long getProjectID() {
        return projectID;
    }

    public void setProjectID(Long projectID) {
        this.projectID = projectID;
    }

    public Integer getAcademicYear() {
        return academicYear;
    }

    public void setAcademicYear(Integer academicYear) {
        this.academicYear = academicYear;
    }
}
