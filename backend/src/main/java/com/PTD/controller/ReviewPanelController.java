package com.PTD.controller;

import com.PTD.dto.ReviewPanelRequest;
import com.PTD.dto.ReviewPanelResponse;
import com.PTD.service.ReviewPanelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/review-panels")
public class ReviewPanelController {

    private final ReviewPanelService reviewPanelService;

    public ReviewPanelController(
            ReviewPanelService reviewPanelService) {

        this.reviewPanelService =
                reviewPanelService;
    }

    @PostMapping
    public ResponseEntity<ReviewPanelResponse>
    createPanel(
            @RequestBody ReviewPanelRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        reviewPanelService
                                .createPanel(request)
                );
    }

    @GetMapping
    public ResponseEntity<List<ReviewPanelResponse>>
    getAllPanels() {

        return ResponseEntity.ok(
                reviewPanelService.getAllPanels()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewPanelResponse>
    getPanel(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                reviewPanelService.getPanel(id)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReviewPanelResponse>
    updatePanel(
            @PathVariable Long id,
            @RequestBody ReviewPanelRequest request) {

        return ResponseEntity.ok(
                reviewPanelService.updatePanel(
                        id,
                        request
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePanel(
            @PathVariable Long id) {

        reviewPanelService.deletePanel(id);

        return ResponseEntity.noContent().build();
    }
}