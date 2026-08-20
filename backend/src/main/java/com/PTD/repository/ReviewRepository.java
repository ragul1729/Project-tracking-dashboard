package com.PTD.repository;

import com.PTD.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository
        extends JpaRepository<Review, Long> {
}