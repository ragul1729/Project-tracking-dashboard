package com.PTD.repository;

import com.PTD.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository
        extends JpaRepository<Review, Long> {

    List<Review> findByProjectProjectId(Long projectId);
}