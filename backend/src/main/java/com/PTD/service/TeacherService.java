package com.PTD.service;

import com.PTD.dto.TeacherRequest;
import com.PTD.dto.TeacherResponse;
import com.PTD.entity.Teacher;
import com.PTD.entity.User;
import com.PTD.repository.TeacherRepository;
import com.PTD.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;
    private final UserRepository userRepository;

    public TeacherService(
            TeacherRepository teacherRepository,
            UserRepository userRepository) {

        this.teacherRepository = teacherRepository;
        this.userRepository = userRepository;
    }

    public TeacherResponse createTeacher(
            TeacherRequest request) {

        User user = userRepository
                .findById(request.getUserId())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        Teacher teacher = new Teacher();

        teacher.setUser(user);
        teacher.setEmployeeNo(
                request.getEmployeeNo());
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

    public TeacherResponse getTeacher(Long id) {

        Teacher teacher =
                teacherRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Teacher not found"));

        return convertToResponse(teacher);
    }

    private TeacherResponse convertToResponse(
            Teacher teacher) {

        User user = teacher.getUser();

        TeacherResponse response =
                new TeacherResponse();

        response.setTeacherId(
                teacher.getTeacherId());

        response.setUserId(
                user.getUserId());

        response.setEmail(
                user.getEmail());

        response.setName(
                user.getName());

        response.setEmployeeNo(
                teacher.getEmployeeNo());

        response.setDepartment(
                teacher.getDepartment());

        response.setRoles(
                user.getRoles());

        return response;
    }
}
