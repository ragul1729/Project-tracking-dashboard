package com.PTD.service;

import com.PTD.dto.AnnouncementRequest;
import com.PTD.dto.AnnouncementResponse;
import com.PTD.entity.Announcement;
import com.PTD.entity.Project;
import com.PTD.entity.User;
import com.PTD.repository.AnnouncementRepository;
import com.PTD.repository.ProjectRepository;
import com.PTD.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class AnnouncementService {

    private final AnnouncementRepository announcementRepository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    public AnnouncementService(
            AnnouncementRepository announcementRepository,
            UserRepository userRepository,
            ProjectRepository projectRepository) {

        this.announcementRepository = announcementRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    }

    public AnnouncementResponse createAnnouncement(
            AnnouncementRequest request) {

        User user =
                userRepository.findById(
                                request.getCreatedByUserId())
                        .orElseThrow();

        Announcement announcement =
                new Announcement();

        announcement.setTitle(
                request.getTitle());

        announcement.setMessage(
                request.getMessage());

        announcement.setCreatedBy(user);

        announcement.setCreatedAt(
                LocalDateTime.now());

        announcement.setGlobalAnnouncement(
                request.getGlobalAnnouncement());

        if (request.getProjectIds() != null) {

            Set<Project> projects =
                    new HashSet<>(
                            projectRepository.findAllById(
                                    request.getProjectIds()));

            announcement.setProjects(projects);
        }

        return convertToResponse(
                announcementRepository.save(
                        announcement));
    }

    public List<AnnouncementResponse>
    getAllAnnouncements() {

        return announcementRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public AnnouncementResponse getAnnouncement(
            Long id) {

        return convertToResponse(
                announcementRepository.findById(id)
                        .orElseThrow());
    }

    public void deleteAnnouncement(
            Long id) {

        announcementRepository.deleteById(id);
    }

    private AnnouncementResponse convertToResponse(
            Announcement announcement) {

        AnnouncementResponse response =
                new AnnouncementResponse();

        response.setAnnouncementId(
                announcement.getAnnouncementId());

        response.setTitle(
                announcement.getTitle());

        response.setMessage(
                announcement.getMessage());

        response.setCreatedAt(
                announcement.getCreatedAt());

        response.setGlobalAnnouncement(
                announcement.getGlobalAnnouncement());

        response.setCreatedBy(
                announcement.getCreatedBy()
                        .getName());

        Set<Long> projectIds =
                new HashSet<>();

        if (announcement.getProjects() != null) {

            for (Project project :
                    announcement.getProjects()) {

                projectIds.add(
                        project.getProjectId());
            }
        }

        response.setProjectIds(projectIds);

        return response;
    }
}