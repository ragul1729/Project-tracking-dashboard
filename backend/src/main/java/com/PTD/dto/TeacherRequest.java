package com.PTD.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class TeacherRequest extends UserRequest {

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate doj;

    public LocalDate getDoj() {
        return doj;
    }

    public void setDoj(LocalDate doj) {
        this.doj = doj;
    }


}
