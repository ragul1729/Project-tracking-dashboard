package com.PTD.service;

import com.PTD.dto.ReviewPanelRequest;
import com.PTD.dto.ReviewPanelResponse;
import com.PTD.entity.ReviewPanel;
import com.PTD.entity.Teacher;
import com.PTD.repository.ReviewPanelRepository;
import com.PTD.repository.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ReviewPanelService {

    private final ReviewPanelRepository reviewPanelRepository;
    private final TeacherRepository teacherRepository;

    public ReviewPanelService(
            ReviewPanelRepository reviewPanelRepository,
            TeacherRepository teacherRepository) {

        this.reviewPanelRepository = reviewPanelRepository;
        this.teacherRepository = teacherRepository;
    }

    public ReviewPanelResponse createPanel(
            ReviewPanelRequest request) {

        ReviewPanel panel = new ReviewPanel();

        panel.setPanelName(request.getPanelName());

        List<Teacher> teachers = teacherRepository.findAllById(
                                request.getTeacherIds());

        if (teachers.size() != request.getTeacherIds().size()) {
            throw new RuntimeException(
                    "One or more teachers not found"
            );
        }

        panel.setPanelMembers(teachers);

        ReviewPanel saved =
                reviewPanelRepository.save(panel);

        return convertToResponse(saved);
    }

    public List<ReviewPanelResponse> getAllPanels() {

        return reviewPanelRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public ReviewPanelResponse getPanel(Long panelId) {

        ReviewPanel panel =
                reviewPanelRepository.findById(panelId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Review panel not found"
                                )
                        );

        return convertToResponse(panel);
    }

    public ReviewPanelResponse updatePanel(
            Long panelId,
            ReviewPanelRequest request) {

        ReviewPanel panel =
                reviewPanelRepository.findById(panelId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Review panel not found"
                                )
                        );

        panel.setPanelName(request.getPanelName());

        List<Teacher> teachers =
                        teacherRepository.findAllById(
                                request.getTeacherIds()
                        );

        if (teachers.size() != request.getTeacherIds().size()) {
            throw new RuntimeException(
                    "One or more teachers not found"
            );
        }

        panel.setPanelMembers(teachers);

        ReviewPanel updated =
                reviewPanelRepository.save(panel);

        return convertToResponse(updated);
    }

    public void deletePanel(Long panelId) {

        if (!reviewPanelRepository.existsById(panelId)) {
            throw new RuntimeException(
                    "Review panel not found"
            );
        }

        reviewPanelRepository.deleteById(panelId);
    }

    private ReviewPanelResponse convertToResponse(
            ReviewPanel panel) {

        ReviewPanelResponse response =
                new ReviewPanelResponse();

        response.setPanelId(panel.getPanelId());

        response.setPanelName(panel.getPanelName());

        List<Long> teacherIds = new ArrayList<Long>();

        List<String> teacherNames = new ArrayList<String>();

        for (Teacher teacher :
                panel.getPanelMembers()) {

            teacherIds.add(
                    teacher.getTeacherId()
            );

            teacherNames.add(
                    teacher.getUser().getName()
            );
        }

        response.setTeacherIds(teacherIds);
        response.setTeacherNames(teacherNames);

        return response;
    }
}