package com.PTD.controller;

import com.PTD.entity.Marks;
import com.PTD.service.MarksService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/marks")
public class MarksController {

    private final MarksService marksService;

    public MarksController(
            MarksService marksService) {

        this.marksService = marksService;
    }

    @PostMapping
    public ResponseEntity<Marks> createMarks(
            @RequestParam Long studentId,
            @RequestParam Long reviewId,
            @RequestParam Double mark1,
            @RequestParam Double mark2,
            @RequestParam Double mark3) {

        Marks marks =
                marksService.createMarks(
                        studentId,
                        reviewId,
                        mark1,
                        mark2,
                        mark3);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(marks);
    }

    @GetMapping
    public ResponseEntity<List<Marks>>
    getAllMarks() {

        return ResponseEntity.ok(
                marksService.getAllMarks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Marks> getMarks(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                marksService.getMarks(id));
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<Marks>>
    getMarksByStudent(
            @PathVariable Long studentId) {

        return ResponseEntity.ok(
                marksService
                        .getMarksByStudent(studentId));
    }

    @GetMapping("/review/{reviewId}")
    public ResponseEntity<List<Marks>>
    getMarksByReview(
            @PathVariable Long reviewId) {

        return ResponseEntity.ok(
                marksService
                        .getMarksByReview(reviewId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Marks> updateMarks(
            @PathVariable Long id,
            @RequestParam Double mark1,
            @RequestParam Double mark2,
            @RequestParam Double mark3) {

        return ResponseEntity.ok(
                marksService.updateMarks(
                        id,
                        mark1,
                        mark2,
                        mark3));
    }

    @PatchMapping("/{id}/publish")
    public ResponseEntity<Marks> publishMarks(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                marksService.publishMarks(id));
    }

    @PatchMapping("/{id}/unpublish")
    public ResponseEntity<Marks> unpublishMarks(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                marksService.unpublishMarks(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMarks(
            @PathVariable Long id) {

        marksService.deleteMarks(id);

        return ResponseEntity.noContent().build();
    }
}