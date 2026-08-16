package com.PTD.repository;

import com.PTD.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository
        extends JpaRepository<Student, Long> {

    Optional<Student> findByUserUserId(Long userId);

    boolean existsByRegisterNo(String registerNo);
}