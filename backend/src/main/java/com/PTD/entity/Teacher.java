package com.PTD.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "teacher")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teacherId;

    @OneToOne
    @JoinColumn(
            name = "user_id",
            unique = true,
            nullable = false
    )
    private User user;

    @Column(unique = true, nullable = false)
    private String employeeNo;

    private String department;

    @ManyToMany(mappedBy = "panelMembers")
    private List<ReviewPanel> reviewPanels;

    public Teacher() {
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getEmployeeNo() {
        return employeeNo;
    }

    public void setEmployeeNo(String employeeNo) {
        this.employeeNo = employeeNo;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public List<ReviewPanel> getReviewPanels() {
        return reviewPanels;
    }

    public void setReviewPanels(List<ReviewPanel> reviewPanels) {
        this.reviewPanels = reviewPanels;
    }
}