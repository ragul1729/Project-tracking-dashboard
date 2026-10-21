
package com.PTD.entity;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.*;
@Entity
@Table(name="users")
@Inheritance(strategy = InheritanceType.JOINED)
public class User {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
 private Long userId;
 @Column(nullable = false, unique = true)
 private String email;
 private String passwordHash;
 private String name;
 private String regNum;
 private String department;
 private String phoneNum;
 @JsonFormat(pattern = "yyyy-MM-dd")
 private LocalDate dob;
 @OneToMany(mappedBy = "createdBy")
 private Set<Announcement> announcements =
         new HashSet<>();

 @ElementCollection(fetch=FetchType.EAGER)
 @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
 @Column(name = "user_roles")
 @Enumerated(EnumType.STRING)
 private List<Role> roles=new ArrayList<Role>();




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

 public String getPasswordHash() {
  return passwordHash;
 }

 public void setPasswordHash(String passwordHash) {
  this.passwordHash = passwordHash;
 }

 public String getName() {
  return name;
 }

 public void setName(String name) {
  this.name = name;
 }

 public String getRegNum() { return regNum; }

 public void setRegNum(String regNum) { this.regNum = regNum; }

 public List<Role> getRoles() { return roles; }

 public void setRoles(List<Role> roles) {
  this.roles = roles;
 }

 public String getPhoneNum() {
  return phoneNum;
 }

 public void setPhoneNum(String phoneNum) {
  this.phoneNum = phoneNum;
 }

 public LocalDate getDob() {
  return dob;
 }

 public void setDob(LocalDate dob) {
  this.dob = dob;
 }


 public String getDepartment() {
  return department;
 }

 public void setDepartment(String department) {
  this.department = department;
 }

 public Set<Announcement> getAnnouncements() {
  return announcements;
 }

 public void setAnnouncements(
         Set<Announcement> announcements) {
  this.announcements = announcements;
 }
}
