package com.PTD.controller;

import com.PTD.dto.AnnouncementRequest;
import com.PTD.dto.AnnouncementResponse;
import com.PTD.service.AnnouncementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {

    private final AnnouncementService announcementService;

    public AnnouncementController(
            AnnouncementService announcementService) {

        this.announcementService =
                announcementService;
    }

    @PostMapping
    public ResponseEntity<AnnouncementResponse>
    createAnnouncement(
            @RequestBody AnnouncementRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        announcementService
                                .createAnnouncement(request));
    }

    @GetMapping
    public List<AnnouncementResponse>
    getAllAnnouncements() {

        return announcementService
                .getAllAnnouncements();
    }

    @GetMapping("/{id}")
    public AnnouncementResponse getAnnouncement(
            @PathVariable Long id) {

        return announcementService
                .getAnnouncement(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void>
    deleteAnnouncement(
            @PathVariable Long id) {

        announcementService
                .deleteAnnouncement(id);

        return ResponseEntity
                .noContent()
                .build();
    }
}