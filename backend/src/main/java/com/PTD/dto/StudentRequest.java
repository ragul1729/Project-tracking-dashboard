package com.PTD.dto;

public class StudentRequest extends UserRequest{

    //private String registerNo;
    private Integer academicYear;


//    public String getRegisterNo() {
//        return registerNo;
//    }
//
//    public void setRegisterNo(String registerNo) {
//        this.registerNo = registerNo;
//    }

    public Integer getAcademicYear() {
        return academicYear;
    }

    public void setAcademicYear(Integer academicYear) {
        this.academicYear = academicYear;
    }
}