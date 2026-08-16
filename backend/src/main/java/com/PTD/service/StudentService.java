package com.PTD.service;

import com.PTD.dto.StudentRequest;
import com.PTD.dto.StudentResponse;
import com.PTD.entity.Student;
import com.PTD.entity.User;
import com.PTD.repository.StudentRepository;
import com.PTD.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final UserRepository userRepository;

    public StudentService(
            StudentRepository studentRepository,
            UserRepository userRepository) {

        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
    }

    public StudentResponse createStudent(
            StudentRequest request) {

        User user = userRepository
                .findById(request.getUserId())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        Student student = new Student();

        student.setUser(user);
        student.setRegisterNo(request.getRegisterNo());
        student.setAcademicYear(
                request.getAcademicYear()
        );

        Student saved =
                studentRepository.save(student);

        return convertToResponse(saved);
    }

    public List<StudentResponse> getAllStudents() {

        return studentRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public StudentResponse getStudent(Long id) {

        Student student =
                studentRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Student not found"));

        return convertToResponse(student);
    }

    private StudentResponse convertToResponse(
            Student student) {

        User user = student.getUser();

        StudentResponse response =
                new StudentResponse();

        response.setStudentId(
                student.getStudentId());

        response.setUserId(
                user.getUserId());

        response.setEmail(
                user.getEmail());

        response.setName(
                user.getName());

        response.setRegisterNo(
                student.getRegisterNo());

        response.setAcademicYear(
                student.getAcademicYear());

        return response;
    }
}
