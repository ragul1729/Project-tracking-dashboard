package com.PTD.repository;

import com.PTD.entity.Marks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarksRepository
        extends JpaRepository<Marks, Long> {
}