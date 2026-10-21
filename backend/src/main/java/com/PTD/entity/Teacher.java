package com.PTD.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "teacher")
public class Teacher extends User{

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long teacherId;

    @OneToOne
    @JoinColumn(
            name = "user_id",
            unique = true,
            nullable = false
    )
    private User user;
    private LocalDate dateOfJoining;
    @ManyToMany(mappedBy = "panelMembers")
    private List<ReviewPanel> reviewPanels;

    @OneToMany(mappedBy = "teacher")
    private List<Meeting> meetings;

    public Teacher() {
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(LocalDate dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public List<ReviewPanel> getReviewPanels() {
        return reviewPanels;
    }

    public void setReviewPanels(List<ReviewPanel> reviewPanels) {
        this.reviewPanels = reviewPanels;
    }

    public List<Meeting> getMeetings() {
        return meetings;
    }

    public void setMeetings(
            List<Meeting> meetings) {
        this.meetings = meetings;
    }
}