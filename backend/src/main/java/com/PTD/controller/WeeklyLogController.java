package com.PTD.controller;

import com.PTD.dto.WeeklyLogRequest;
import com.PTD.dto.WeeklyLogResponse;
import com.PTD.service.WeeklyLogService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weekly-logs")
public class WeeklyLogController {

    private final WeeklyLogService weeklyLogService;

    public WeeklyLogController(
            WeeklyLogService weeklyLogService) {

        this.weeklyLogService =
                weeklyLogService;
    }

    @PostMapping
    public ResponseEntity<WeeklyLogResponse>
    createLog(
            @RequestBody WeeklyLogRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        weeklyLogService
                                .createLog(request));
    }

    @GetMapping
    public ResponseEntity<List<WeeklyLogResponse>>
    getAllLogs() {

        return ResponseEntity.ok(
                weeklyLogService.getAllLogs());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WeeklyLogResponse>
    getLog(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                weeklyLogService.getLog(id));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<WeeklyLogResponse>>
    getLogsByProject(
            @PathVariable Long projectId) {

        return ResponseEntity.ok(
                weeklyLogService
                        .getLogsByProject(projectId));
    }

    @GetMapping("/teacher/{teacherId}")
    public ResponseEntity<List<WeeklyLogResponse>>
    getLogsByTeacher(
            @PathVariable Long teacherId) {

        return ResponseEntity.ok(
                weeklyLogService
                        .getLogsByTeacher(teacherId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<WeeklyLogResponse>
    updateLog(
            @PathVariable Long id,
            @RequestBody WeeklyLogRequest request) {

        return ResponseEntity.ok(
                weeklyLogService
                        .updateLog(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLog(
            @PathVariable Long id) {

        weeklyLogService.deleteLog(id);

        return ResponseEntity.noContent().build();
    }
}