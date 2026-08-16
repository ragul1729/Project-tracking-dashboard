package com.PTD.service;

import com.PTD.dto.*;
import com.PTD.entity.User;
import com.PTD.repository.UserRepository;
import com.PTD.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder encoder,
            JwtService jwtService) {

        this.userRepository = userRepository;
        this.encoder = encoder;
        this.jwtService = jwtService;
    }

    public void register(RegisterRequest request) {

        User user = new User();

        user.setEmail(request.email());

        user.setPasswordHash(
                encoder.encode(request.password())
        );

        user.setName(
                request.name()
        );


        userRepository.save(user);
    }

    public LoginResponse login(User user) {

        String token =
                jwtService.generateToken(
                        user.getEmail()
                );

        return new LoginResponse(token);
    }
}