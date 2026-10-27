package com.PTD.dto;

import com.PTD.entity.Project;
import com.PTD.entity.Role;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class TeacherResponse extends UserResponse {

    List<ProjectResponse> projects = new ArrayList<ProjectResponse>();

    public List<ProjectResponse> getProjects() {
        return projects;
    }

    public void setProjects(List<ProjectResponse> projects) {
        this.projects = projects;
    }
}
