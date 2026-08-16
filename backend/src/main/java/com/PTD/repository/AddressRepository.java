package com.PTD.repository;

import com.PTD.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AddressRepository
        extends JpaRepository<Address, Long> {

    Optional<Address> findByUserUserId(Long userId);
}