package com.PTD.dto;

import com.PTD.entity.Role;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public class UserResponse {

    private Long userId;
    private String email;
    private String name;
    private String regNum;
    private String phone;
    private LocalDate dob;
    private List<Role> roles;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegNum() { return regNum; }

    public void setRegNum(String regNum) { this.regNum = regNum; }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

}