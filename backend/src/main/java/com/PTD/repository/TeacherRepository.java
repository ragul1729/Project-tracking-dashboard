package com.PTD.repository;

import com.PTD.entity.Role;
import com.PTD.entity.Student;
import com.PTD.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TeacherRepository
        extends JpaRepository<Teacher, Long> {

    Optional<Teacher> findByUserUserId(Long userId);

    Optional<Teacher> findByEmail(String email);

    Optional<Teacher> findByRegNum(String regnum);

    Optional<List<Teacher>> findByRoles(Role role);
}
