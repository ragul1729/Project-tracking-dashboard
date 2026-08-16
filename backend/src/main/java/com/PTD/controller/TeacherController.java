package com.PTD.controller;

import com.PTD.dto.TeacherRequest;
import com.PTD.dto.TeacherResponse;
import com.PTD.service.TeacherService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

    private final TeacherService teacherService;

    public TeacherController(
            TeacherService teacherService) {

        this.teacherService = teacherService;
    }

    @GetMapping
    public List<TeacherResponse> getAllTeachers() {
        return teacherService.getAllTeachers();
    }

    @GetMapping("/{id}")
    public TeacherResponse getTeacher(
            @PathVariable Long id) {

        return teacherService.getTeacher(id);
    }

    @PostMapping
    public TeacherResponse createTeacher(
            @RequestBody TeacherRequest request) {

        return teacherService.createTeacher(request);
    }
}