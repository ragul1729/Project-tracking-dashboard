package com.PTD.controller;

import com.PTD.dto.MeetingRequest;
import com.PTD.dto.MeetingResponse;
import com.PTD.service.MeetingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meetings")
public class MeetingController {

    private final MeetingService meetingService;

    public MeetingController(
            MeetingService meetingService) {

        this.meetingService = meetingService;
    }

    @PostMapping
    public ResponseEntity<MeetingResponse>
    createMeeting(
            @RequestBody MeetingRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        meetingService
                                .createMeeting(request));
    }

    @GetMapping
    public List<MeetingResponse> getAllMeetings() {

        return meetingService.getAllMeetings();
    }

    @GetMapping("/{id}")
    public MeetingResponse getMeeting(
            @PathVariable Long id) {

        return meetingService.getMeeting(id);
    }

    @GetMapping("/project/{projectId}")
    public List<MeetingResponse>
    getMeetingsByProject(
            @PathVariable Long projectId) {

        return meetingService
                .getMeetingsByProject(projectId);
    }
}