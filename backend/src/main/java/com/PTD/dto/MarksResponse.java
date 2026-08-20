package com.PTD.dto;

public class MarksResponse {

    private Long marksId;
    private Long studentId;
    private String studentName;

    private Double mark1;
    private Double mark2;
    private Double mark3;
    private Double total;

    private Boolean isPublished;

    public Long getMarksId() {
        return marksId;
    }

    public void setMarksId(Long marksId) {
        this.marksId = marksId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
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

    public Boolean getPublished() {
        return isPublished;
    }

    public void setPublished(Boolean published) {
        isPublished = published;
    }


}