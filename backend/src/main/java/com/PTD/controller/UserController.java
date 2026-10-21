package com.PTD.controller;

import com.PTD.dto.StudentResponse;
import com.PTD.dto.UserRequest;
import com.PTD.dto.UserResponse;
import com.PTD.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(
            UserService userService) {

        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserResponse>
    createUser(
            @RequestBody UserRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        userService
                                .createUser(request)
                );
    }

    @GetMapping
    public ResponseEntity<List<UserResponse>>
    getAllUsers() {

        return ResponseEntity.ok(
                userService.getAllUsers()
        );
    }

    @GetMapping("/students")
    public ResponseEntity<List<String>>
    getAllStudentsNames() {

        return ResponseEntity.ok(
                userService.getAllStudentsNames()
        );
    }

    @GetMapping("/teachers")
    public ResponseEntity<List<String>>
    getAllTeachersNames() {

        return ResponseEntity.ok(
                userService.getAllMentors()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse>
    getUserById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                userService.getUserById(id)
        );
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<UserResponse>
    getUserByEmail(
            @PathVariable String email) {

        return ResponseEntity.ok(
                userService.getUserByEmail(email)
        );
    }

    @GetMapping("/regnum/{regnum}")
    public ResponseEntity<UserResponse>
    getUserByRegNum(
            @PathVariable String regnum) {

        return ResponseEntity.ok(
                userService.getUserByRegNum(regnum)
        );
    }
    @PutMapping
    public ResponseEntity<UserResponse>
    updateUser(
            @RequestBody UserRequest request) {

        return ResponseEntity.ok(
                userService.updateUser(
                        request
                )
        );
    }

    @PutMapping("/regnum")
    public ResponseEntity<UserResponse>
    updateUserByRegnum(
            @RequestBody UserRequest request) {

        return ResponseEntity.ok(
                userService.updateUser(
                        request
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void>
    deleteUser(
            @PathVariable Long id) {

        userService.deleteUser(id);

        return ResponseEntity
                .noContent()
                .build();
    }
}