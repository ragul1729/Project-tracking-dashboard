package com.PTD.repository;

import com.PTD.entity.WeeklyLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WeeklyLogRepository
        extends JpaRepository<WeeklyLog, Long> {

    List<WeeklyLog> findByProjectProjectId(Long projectId);

    List<WeeklyLog> findByCreatedByTeacherId(Long teacherId);
}