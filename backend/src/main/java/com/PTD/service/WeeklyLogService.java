package com.PTD.service;

import com.PTD.dto.WeeklyLogRequest;
import com.PTD.dto.WeeklyLogResponse;
import com.PTD.entity.Project;
import com.PTD.entity.Teacher;
import com.PTD.entity.WeeklyLog;
import com.PTD.repository.ProjectRepository;
import com.PTD.repository.TeacherRepository;
import com.PTD.repository.WeeklyLogRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class WeeklyLogService {

    private final WeeklyLogRepository weeklyLogRepository;
    private final ProjectRepository projectRepository;
    private final TeacherRepository teacherRepository;

    public WeeklyLogService(
            WeeklyLogRepository weeklyLogRepository,
            ProjectRepository projectRepository,
            TeacherRepository teacherRepository) {

        this.weeklyLogRepository = weeklyLogRepository;
        this.projectRepository = projectRepository;
        this.teacherRepository = teacherRepository;
    }

    public WeeklyLogResponse createLog(
            WeeklyLogRequest request) {

        Project project = projectRepository
                .findById(request.getProjectId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Project not found"));

        Teacher teacher = teacherRepository
                .findById(request.getTeacherId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Teacher not found"));

        WeeklyLog log = new WeeklyLog();

        log.setProject(project);
        log.setCreatedBy(teacher);
        log.setWeekNo(request.getWeekNo());

        if (request.getLogDate() != null) {
            log.setLogDate(
                    LocalDate.parse(
                            request.getLogDate()));
        }

        log.setDescription(
                request.getDescription());

        WeeklyLog saved =
                weeklyLogRepository.save(log);

        return convertToResponse(saved);
    }

    public List<WeeklyLogResponse> getAllLogs() {

        return weeklyLogRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public WeeklyLogResponse getLog(Long logId) {

        WeeklyLog log =
                weeklyLogRepository.findById(logId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Weekly log not found"));

        return convertToResponse(log);
    }

    public List<WeeklyLogResponse>
    getLogsByProject(Long projectId) {

        return weeklyLogRepository
                .findByProjectProjectId(projectId)
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public List<WeeklyLogResponse>
    getLogsByTeacher(Long teacherId) {

        return weeklyLogRepository
                .findByCreatedByTeacherId(teacherId)
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public WeeklyLogResponse updateLog(
            Long logId,
            WeeklyLogRequest request) {

        WeeklyLog log =
                weeklyLogRepository.findById(logId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Weekly log not found"));

        Project project = projectRepository
                .findById(request.getProjectId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Project not found"));

        Teacher teacher = teacherRepository
                .findById(request.getTeacherId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Teacher not found"));

        log.setProject(project);
        log.setCreatedBy(teacher);
        log.setWeekNo(request.getWeekNo());

        if (request.getLogDate() != null) {
            log.setLogDate(
                    LocalDate.parse(
                            request.getLogDate()));
        }

        log.setDescription(
                request.getDescription());

        return convertToResponse(
                weeklyLogRepository.save(log));
    }

    public void deleteLog(Long logId) {

        if (!weeklyLogRepository.existsById(logId)) {
            throw new RuntimeException(
                    "Weekly log not found");
        }

        weeklyLogRepository.deleteById(logId);
    }

    private WeeklyLogResponse convertToResponse(
            WeeklyLog log) {

        WeeklyLogResponse response =
                new WeeklyLogResponse();

        response.setLogId(log.getLogId());

        response.setProjectId(
                log.getProject()
                        .getProjectId());

        response.setProjectTitle(
                log.getProject()
                        .getProjectTitle());

        response.setTeacherId(
                log.getCreatedBy()
                        .getTeacherId());

        response.setTeacherName(
                log.getCreatedBy()
                        .getUser()
                        .getName());

        response.setWeekNo(log.getWeekNo());
        response.setLogDate(log.getLogDate());
        response.setDescription(log.getDescription());

        return response;
    }
}