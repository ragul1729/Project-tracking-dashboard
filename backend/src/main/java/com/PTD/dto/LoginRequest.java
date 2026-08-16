package com.PTD.dto;

public record LoginRequest(
        String email,
        String password
) {}