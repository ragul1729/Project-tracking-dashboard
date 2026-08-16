package com.PTD.controller;

import com.PTD.dto.RegisterRequest;
import com.PTD.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

 private final AuthService authService;

 public AuthController(
         AuthService authService) {

  this.authService = authService;
 }

 @PostMapping("/register")
 public String register(
         @RequestBody RegisterRequest request) {

  authService.register(request);

  return "User Registered";
 }
}