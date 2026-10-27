package com.PTD.service;

import com.PTD.dto.*;
import com.PTD.entity.Role;
import com.PTD.entity.Teacher;
import com.PTD.entity.User;
import com.PTD.service.ProjectService;
import com.PTD.repository.TeacherRepository;
import com.PTD.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;
    private final UserRepository userRepository;
    private final ProjectService projectService;

    public TeacherService(
            TeacherRepository teacherRepository,
            UserRepository userRepository, ProjectService projectService) {

        this.teacherRepository = teacherRepository;
        this.userRepository = userRepository;
        this.projectService = projectService;
    }

    public TeacherResponse createTeacher(
            User user, TeacherRequest request) {

//        User user = userRepository
//                .findById(request.getUserId())
//                .orElseThrow(() ->
//                        new RuntimeException("User not found"));

        Teacher teacher = new Teacher();

        teacher.setEmail(request.getEmail());
        teacher.setName(request.getName());
        teacher.setPhoneNum(request.getPhone());
        teacher.setDob(request.getDob());
        teacher.setRegNum(request.getRegNum());
        teacher.setRoles(request.getRoles());
        teacher.setDepartment(request.getDepartment());
//        teacher.setUser(user);
//        teacher.setEmployeeNo(
//                request.getEmployeeNo());
        teacher.setDateOfJoining(request.getDoj());
        teacher.setDepartment(
                request.getDepartment());

        Teacher saved =
                teacherRepository.save(teacher);

        return convertToResponse(saved);
    }

    public List<TeacherResponse> getAllTeachers() {

        return teacherRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public List<String> getAllMentors() {

        List<String> mentors = new ArrayList<String>();
        Optional<List<Teacher>> teachers = teacherRepository.findByRoles(Role.MENTOR);
        if(teachers.isPresent()){
            for(Teacher t: teachers.get()){
                mentors.add(t.getRegNum() + " - " + t.getName());
            }
        }
        return mentors;
    }

    public TeacherResponse getTeacher(Long id) {

        Teacher teacher =
                teacherRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Teacher not found"));

        return convertToResponse(teacher);
    }

    public TeacherResponse getMentor(Long id) {

        Teacher teacher =
                teacherRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Teacher not found"));

        return convertToResponse(teacher);
    }

    public TeacherResponse updateTeacher(TeacherRequest request){

        Teacher teacher =
                teacherRepository.findByEmail(request.getEmail())
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Teacher not found"));

        teacher.setEmail(request.getEmail());
        teacher.setName(request.getName());
        teacher.setPhoneNum(request.getPhone());
        teacher.setDob(request.getDob());
        teacher.setRegNum(request.getRegNum());
        teacher.setRoles(request.getRoles());
        teacher.setDepartment(request.getDepartment());
        teacher.setDateOfJoining(request.getDoj());

        Teacher saved =
                teacherRepository.save(teacher);

        return convertToResponse(saved);
    }

    TeacherResponse convertToResponse(
            Teacher teacher) {


        TeacherResponse response =
                new TeacherResponse();


        response.setEmail(
                teacher.getEmail());

        response.setName(
                teacher.getName());

        response.setRegNum(teacher.getRegNum());

        response.setRoles(
                teacher.getRoles());
        System.out.println("Inside TeacherService: " + teacher.getProjects().size());
        List<ProjectResponse> prs = projectService.convertToResponse(teacher.getProjects());
        response.setProjects(prs);
        System.out.println(response.getProjects().size());
        return response;
    }
}
