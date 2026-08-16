package com.PTD.controller;

import com.PTD.dto.StudentRequest;
import com.PTD.dto.StudentResponse;
import com.PTD.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(
            StudentService studentService) {

        this.studentService = studentService;
    }

    @GetMapping
    public List<StudentResponse> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public StudentResponse getStudent(
            @PathVariable Long id) {

        return studentService.getStudent(id);
    }

    @PostMapping
    public StudentResponse createStudent(
            @RequestBody StudentRequest request) {

        return studentService.createStudent(request);
    }
}
