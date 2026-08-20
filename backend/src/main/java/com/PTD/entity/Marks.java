package com.PTD.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "marks")
public class Marks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long marksId;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    private Double mark1;
    private Double mark2;
    private Double mark3;
    private Double total;

    private Boolean isPublished;

    public Long getMarksId() {
        return marksId;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(
            Student student) {

        this.student = student;
    }

    public Review getReview() {
        return review;
    }

    public void setReview(
            Review review) {

        this.review = review;
    }

    public Double getMark1() {
        return mark1;
    }

    public void setMark1(Double mark1) {
        this.mark1 = mark1;
    }

    public Double getMark2() {
        return mark2;
    }

    public void setMark2(Double mark2) {
        this.mark2 = mark2;
    }

    public Double getMark3() {
        return mark3;
    }

    public void setMark3(Double mark3) {
        this.mark3 = mark3;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Boolean getIsPublished() {
        return isPublished;
    }

    public void setIsPublished(
            Boolean isPublished) {

        this.isPublished = isPublished;
    }
}