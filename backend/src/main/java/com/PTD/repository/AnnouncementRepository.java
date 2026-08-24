package com.PTD.repository;

import com.PTD.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository
        extends JpaRepository<Announcement, Long> {
}