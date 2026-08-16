package com.PTD.security;

import com.PTD.repository.UserRepository;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService
        implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(
            UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(
            String email)
            throws UsernameNotFoundException {

        return userRepository
                .findByEmail(email)
                .map(user ->
                        User.builder()
                                .username(user.getEmail())
                                .password(user.getPasswordHash())
                                .authorities("USER")
                                .build())
                .orElseThrow();
    }
}
