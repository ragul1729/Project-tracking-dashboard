package com.PTD.repository;

import com.PTD.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository
        extends JpaRepository<Admin, Long> {
}
