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

        String mentorRegNum = request.getMentorId().trim().split("\\s* \\s*")[0];
        Teacher mentor = teacherRepository
                .findByRegNum(mentorRegNum)
                .orElseThrow(() ->
                        new RuntimeException("Mentor not found"));

        Project project = new Project();

        project.setProjectTitle(
                request.getProjectTitle());

        project.setProjectDescription(
                request.getProjectDescription());

        project.setDegree(
                request.getDegree());

        project.setDepartment(
                request.getDepartment());

        project.setTeamNumber(
                request.getTeamNumber());

        project.setStatus(
                request.getStatus());

        project.setMentor(
                mentor);

        Project savedProject =
                projectRepository.save(project);

        if (request.getStudentIds() != null) {

            for (String studentId :
                    request.getStudentIds()) {

                String studentRegNum = studentId.trim().split("\\s*-\\s*")[0];
                Student student =
                        studentRepository
                                .findByRegNum(studentRegNum)
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

        response.setDepartment(
                project.getDepartment());

        response.setTeamNumber(
                project.getTeamNumber());

        response.setStatus(
                project.getStatus());

        response.setMentorId(project.getMentor().getRegNum() + " - " + project.getMentor().getName());
        List<String> studentIds =
                new ArrayList<String>();

        if (project.getStudents() != null) {

            for (Student student :
                    project.getStudents()) {

                studentIds.add(
                        student.getRegNum() + " - " + student.getName());
            }
        }

        response.setStudentIds(
                studentIds);

        return response;
    }
}