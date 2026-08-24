package com.PTD.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "meeting")
public class Meeting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long meetingId;

    @ManyToOne
    @JoinColumn(
            name = "project_id",
            nullable = false
    )
    private Project project;

    @ManyToOne
    @JoinColumn(
            name = "teacher_id",
            nullable = false
    )
    private Teacher teacher;

    @Column(nullable = false)
    private LocalDate meetingDate;

    @Column(nullable = false)
    private String agenda;

    @Column(columnDefinition = "TEXT")
    private String discussion;

    @Column(columnDefinition = "TEXT")
    private String actionItems;

    public Long getMeetingId() {
        return meetingId;
    }

    public void setMeetingId(Long meetingId) {
        this.meetingId = meetingId;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public LocalDate getMeetingDate() {
        return meetingDate;
    }

    public void setMeetingDate(
            LocalDate meetingDate) {
        this.meetingDate = meetingDate;
    }

    public String getAgenda() {
        return agenda;
    }

    public void setAgenda(
            String agenda) {
        this.agenda = agenda;
    }

    public String getDiscussion() {
        return discussion;
    }

    public void setDiscussion(
            String discussion) {
        this.discussion = discussion;
    }

    public String getActionItems() {
        return actionItems;
    }

    public void setActionItems(
            String actionItems) {
        this.actionItems = actionItems;
    }
}