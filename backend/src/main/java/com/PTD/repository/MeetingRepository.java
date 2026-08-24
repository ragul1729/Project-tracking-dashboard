package com.PTD.repository;

import com.PTD.entity.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MeetingRepository
        extends JpaRepository<Meeting, Long> {

    List<Meeting> findByProjectProjectId(
            Long projectId);

    List<Meeting> findByTeacherTeacherId(
            Long teacherId);
}