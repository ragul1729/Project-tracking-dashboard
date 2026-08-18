package com.PTD.service;

import com.PTD.dto.ProjectRequest;
import com.PTD.dto.ProjectResponse;
import com.PTD.entity.Project;
import com.PTD.entity.Student;
import com.PTD.entity.Teacher;
import com.PTD.repository.ProjectRepository;
import com.PTD.repository.StudentRepository;
import com.PTD.repository.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;

    public ProjectService(
            ProjectRepository projectRepository,
            TeacherRepository teacherRepository,
            StudentRepository studentRepository) {

        this.projectRepository = projectRepository;
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
    }

    public ProjectResponse createProject(
            ProjectRequest request) {

        Teacher mentor = teacherRepository
                .findById(request.getMentorId())
                .orElseThrow(() ->
                        new RuntimeException("Mentor not found"));

        Project project = new Project();

        project.setProjectTitle(
                request.getProjectTitle());

        project.setProjectDescription(
                request.getProjectDescription());

        project.setDegree(
                request.getDegree());

        project.setBranch(
                request.getBranch());

        project.setBatchNumber(
                request.getBatchNumber());

        project.setStatus(
                request.getStatus());

        project.setMentor(
                mentor);

        Project savedProject =
                projectRepository.save(project);

        if (request.getStudentIds() != null) {

            for (Long studentId :
                    request.getStudentIds()) {

                Student student =
                        studentRepository
                                .findById(studentId)
                                .orElseThrow(() ->
                                        new RuntimeException(
                                                "Student not found"));

                student.setProject(savedProject);

                studentRepository.save(student);
            }
        }

        return convertToResponse(savedProject);
    }

    public List<ProjectResponse> getAllProjects() {

        return projectRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public ProjectResponse getProject(
            Long projectId) {

        Project project =
                projectRepository.findById(projectId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Project not found"));

        return convertToResponse(project);
    }

    private ProjectResponse convertToResponse(
            Project project) {

        ProjectResponse response =
                new ProjectResponse();

        response.setProjectId(
                project.getProjectId());

        response.setProjectTitle(
                project.getProjectTitle());

        response.setProjectDescription(
                project.getProjectDescription());

        response.setDegree(
                project.getDegree());

        response.setBranch(
                project.getBranch());

        response.setBatchNumber(
                project.getBatchNumber());

        response.setStatus(
                project.getStatus());

        if (project.getMentor() != null) {

            response.setMentorId(
                    project.getMentor()
                            .getTeacherId());

            response.setMentorName(
                    project.getMentor()
                            .getUser()
                            .getName());
                          /*  + " "
                            + project.getMentor()
                            .getUser()
                            .getName()); */
        }

        List<Long> studentIds =
                new ArrayList<>();

        if (project.getStudents() != null) {

            for (Student student :
                    project.getStudents()) {

                studentIds.add(
                        student.getStudentId());
            }
        }

        response.setStudentIds(
                studentIds);

        return response;
    }
}