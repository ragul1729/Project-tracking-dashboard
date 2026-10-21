package com.PTD.service;

import com.PTD.dto.StudentRequest;
import com.PTD.dto.StudentResponse;
import com.PTD.entity.Role;
import com.PTD.entity.Student;
import com.PTD.entity.User;
import com.PTD.repository.StudentRepository;
import com.PTD.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final UserRepository userRepository;

    public StudentService(
            StudentRepository studentRepository,
            UserRepository userRepository) {

        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
    }

    public StudentResponse createStudent(
            User user, StudentRequest request) {

//        User user = userRepository
//                .findById(request.getUserId())
//                .orElseThrow(() ->
//                        new RuntimeException("User not found"));

        System.out.println("Inside createStudent in Student service");
        System.out.println("DOB: " + request.getDob());
        System.out.println("Phone: " + request.getPhone());
        Student student = new Student();

        student.setEmail(request.getEmail());
        student.setName(request.getName());
        student.setPhoneNum(request.getPhone());
        student.setDob(request.getDob());
        student.setRegNum(request.getRegNum());
        student.setRoles(request.getRoles());
        student.setDepartment(request.getDepartment());

//        User savedUser =
//                userRepository.save(user);
//
//        student.setUser(user);
        //student.setRegisterNo(request.getRegisterNo());
        student.setAcademicYear(
                request.getAcademicYear()
        );

        Student saved =
                studentRepository.save(student);

        return convertToResponse(saved);
    }

    public List<String> getAllStudentsNames() {

//        return studentRepository.findAll()
//                .stream()
//                .map(this::convertToResponse)
//                .toList();
        List<String> studentsRollnumAndNames = new ArrayList<String>();
        Optional<List<Student>> students = studentRepository.findByRoles(Role.STUDENT);
        if(students.isPresent()){
            for(Student s: students.get()){
                studentsRollnumAndNames.add(s.getRegNum() + " - " + s.getName());
            }
        }
        return studentsRollnumAndNames;
    }

    private List<StudentResponse> convertToResponse(Optional<List<Student>> students) {
        List<StudentResponse> studentResponses = new ArrayList<StudentResponse>();
        if (students.isPresent()) {
            for (Student s : students.get()) {
                studentResponses.add(convertToResponse(s));
            }
        }
        return studentResponses;
    }

    public StudentResponse getStudent(Long id) {

        Student student =
                studentRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Student not found"));

        return convertToResponse(student);
    }

    public StudentResponse updateStudent(StudentRequest request){

        Student student =
                studentRepository.findByEmail(request.getEmail())
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Student not found"));

        student.setEmail(request.getEmail());
        student.setName(request.getName());
        student.setPhoneNum(request.getPhone());
        student.setDob(request.getDob());
        student.setRegNum(request.getRegNum());
        student.setRoles(request.getRoles());
        student.setDepartment(request.getDepartment());
        student.setAcademicYear(request.getAcademicYear());

        Student saved =
                studentRepository.save(student);

        return convertToResponse(saved);
    }

    StudentResponse convertToResponse(
            Student student) {


        StudentResponse response =
                new StudentResponse();

//        response.setStudentId(
//                student.getStudentId());

//        response.setUserId(
//                student.getUserId());

        response.setEmail(
                student.getEmail());

        response.setName(
                student.getName());

        response.setRegNum(student.getRegNum());

        response.setDob(student.getDob());

        response.setPhone(student.getPhoneNum());

        response.setRoles(student.getRoles());

        response.setProjectID(student.getProject()!=null ? student.getProject().getProjectId() : null);
//        response.setRegisterNo(
//                student.getRegisterNo());

        response.setAcademicYear(
                student.getAcademicYear());

        //response.setProjectID(student.getProject().getProjectId());

        return response;
    }
}
