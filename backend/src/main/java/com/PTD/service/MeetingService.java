package com.PTD.service;

import com.PTD.dto.MeetingRequest;
import com.PTD.dto.MeetingResponse;
import com.PTD.entity.Meeting;
import com.PTD.entity.Project;
import com.PTD.entity.Teacher;
import com.PTD.repository.MeetingRepository;
import com.PTD.repository.ProjectRepository;
import com.PTD.repository.TeacherRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MeetingService {

    private final MeetingRepository meetingRepository;
    private final ProjectRepository projectRepository;
    private final TeacherRepository teacherRepository;

    public MeetingService(
            MeetingRepository meetingRepository,
            ProjectRepository projectRepository,
            TeacherRepository teacherRepository) {

        this.meetingRepository = meetingRepository;
        this.projectRepository = projectRepository;
        this.teacherRepository = teacherRepository;
    }

    public MeetingResponse createMeeting(
            MeetingRequest request) {

        Project project =
                projectRepository.findById(
                                request.getProjectId())
                        .orElseThrow();

        Teacher teacher =
                teacherRepository.findById(
                                request.getTeacherId())
                        .orElseThrow();

        Meeting meeting = new Meeting();

        meeting.setProject(project);
        meeting.setTeacher(teacher);

        meeting.setMeetingDate(
                LocalDate.parse(
                        request.getMeetingDate()));

        meeting.setAgenda(
                request.getAgenda());

        meeting.setDiscussion(
                request.getDiscussion());

        meeting.setActionItems(
                request.getActionItems());

        return convertToResponse(
                meetingRepository.save(meeting));
    }

    public List<MeetingResponse> getAllMeetings() {

        return meetingRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public MeetingResponse getMeeting(
            Long meetingId) {

        return convertToResponse(
                meetingRepository.findById(
                                meetingId)
                        .orElseThrow());
    }

    public List<MeetingResponse>
    getMeetingsByProject(Long projectId) {

        return meetingRepository
                .findByProjectProjectId(projectId)
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    private MeetingResponse convertToResponse(
            Meeting meeting) {

        MeetingResponse response =
                new MeetingResponse();

        response.setMeetingId(
                meeting.getMeetingId());

        response.setProjectId(
                meeting.getProject()
                        .getProjectId());

        response.setProjectTitle(
                meeting.getProject()
                        .getProjectTitle());

        response.setTeacherId(
                meeting.getTeacher()
                        .getTeacherId());

        response.setTeacherName(
                meeting.getTeacher()
                        .getUser()
                        .getName());

        response.setMeetingDate(
                meeting.getMeetingDate());

        response.setAgenda(
                meeting.getAgenda());

        response.setDiscussion(
                meeting.getDiscussion());

        response.setActionItems(
                meeting.getActionItems());

        return response;
    }
}