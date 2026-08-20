package com.PTD.repository;

import com.PTD.entity.Marks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MarksRepository
        extends JpaRepository<Marks, Long> {

    List<Marks> findByStudentStudentId(Long studentId);

    List<Marks> findByReviewReviewId(Long reviewId);
}