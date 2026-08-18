package com.PTD.controller;

import com.PTD.dto.ProjectRequest;
import com.PTD.dto.ProjectResponse;
import com.PTD.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(
            ProjectService projectService) {

        this.projectService =
                projectService;
    }

    @PostMapping
    public ProjectResponse createProject(
            @RequestBody
            ProjectRequest request) {

        return projectService
                .createProject(request);
    }

    @GetMapping
    public List<ProjectResponse>
    getAllProjects() {

        return projectService
                .getAllProjects();
    }

    @GetMapping("/{id}")
    public ProjectResponse getProject(
            @PathVariable Long id) {

        return projectService
                .getProject(id);
    }
}