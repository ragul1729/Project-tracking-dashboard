package com.PTD.controller;

import com.PTD.entity.Review;
import com.PTD.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(
            ReviewService reviewService) {

        this.reviewService = reviewService;
    }

    @PostMapping
    public ResponseEntity<Review> createReview(
            @RequestParam Long projectId,
            @RequestParam Long panelId,
            @RequestParam Integer reviewNumber,
            @RequestParam(required = false) String remarks) {

        Review review =
                reviewService.createReview(
                        projectId,
                        panelId,
                        reviewNumber,
                        remarks);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(review);
    }

    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews() {

        return ResponseEntity.ok(
                reviewService.getAllReviews());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Review> getReview(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                reviewService.getReview(id));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Review>>
    getReviewsByProject(
            @PathVariable Long projectId) {

        return ResponseEntity.ok(
                reviewService
                        .getReviewsByProject(projectId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Review> updateReview(
            @PathVariable Long id,
            @RequestParam Long projectId,
            @RequestParam Long panelId,
            @RequestParam Integer reviewNumber,
            @RequestParam(required = false) String remarks) {

        return ResponseEntity.ok(
                reviewService.updateReview(
                        id,
                        projectId,
                        panelId,
                        reviewNumber,
                        remarks));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(
            @PathVariable Long id) {

        reviewService.deleteReview(id);

        return ResponseEntity.noContent().build();
    }
}