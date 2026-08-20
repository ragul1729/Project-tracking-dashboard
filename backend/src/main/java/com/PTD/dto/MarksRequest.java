package com.PTD.dto;

public class MarksRequest {

    private Long studentId;
    private Long reviewId;
    private Double mark1;
    private Double mark2;
    private Double mark3;

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
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

}