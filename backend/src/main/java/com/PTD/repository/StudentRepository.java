package com.PTD.repository;

import com.PTD.entity.Role;
import com.PTD.entity.Student;
import com.PTD.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StudentRepository
        extends JpaRepository<Student, Long> {

    Optional<Student> findByUserUserId(Long userId);

    Optional<Student> findByEmail(String email);

    Optional<Student> findByRegNum(String regnum);

    Optional<List<Student>> findByRoles(Role role);

    //boolean existsByRegisterNo(String registerNo);
}