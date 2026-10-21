package com.PTD.dto;

import com.PTD.entity.Role;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@JsonTypeInfo(
        use =  JsonTypeInfo.Id.DEDUCTION,
        include = JsonTypeInfo.As.PROPERTY,
        //property = "firstRoleDiscriminator",
        defaultImpl = UserRequest.class
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = StudentRequest.class, name = "STUDENT"),
        @JsonSubTypes.Type(value = TeacherRequest.class, name = "MENTOR")
})
public class UserRequest {

    private String email;
    private String name;
    private String regNum;
    private String phone;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dob;
    private String phoneNum;
    //@JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
    private List<Role> roles;

    private String department;


//    public TeacherRequest getTeacher() {
//        return teacher;
//    }
//
//    public void setTeacher(TeacherRequest teacher) {
//        this.teacher = teacher;
//    }
//
//    public StudentRequest getStudent() {
//        return student;
//    }
//
//    public void setStudent(StudentRequest student) {
//        this.student = student;
//    }
//
//    private TeacherRequest teacher;
//    private StudentRequest student;

//    @JsonProperty("roles")
//    public void setRolesFromSpaceSeparatedString(String rolesString) {
//        if (this.roles == null) {
//            this.roles = new ArrayList<Role>();
//        }
//
//        if (rolesString != null && !rolesString.trim().isEmpty()) {
//            String[] parts = rolesString.split("\\s+"); // Split by spaces
//            for (String part : parts) {
//                try {
//                    this.roles.add(Role.valueOf(part.toUpperCase().trim()));
//                } catch (IllegalArgumentException e) {
//                    // Handle unrecognized role strings gracefully if necessary
//                }
//            }
//        }
//        System.out.println("rolesString: " + rolesString);
//        System.out.println("rolesArray: " + this.roles.get(0));
//    }
//
//    // 💡 Jackson automatically executes this to find the polymorphic subclass DTO target!
//    @JsonProperty("roles")
//    public String getFirstRoleDiscriminator() {
//        System.out.println("Inside getFirstRoleDiscriminator");
//        if (this.roles != null && !this.roles.isEmpty()) {
//            return this.roles.get(0).name(); // Returns "STUDENT", "MENTOR", etc.
//        }
//        return null;
//    }
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

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }
}