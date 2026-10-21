package com.PTD.service;

import com.PTD.dto.*;
import com.PTD.entity.Role;
import com.PTD.entity.Teacher;
import com.PTD.entity.User;
import com.PTD.entity.Student;
import com.PTD.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final StudentService studentService;
    private final TeacherService teacherService;

    public UserService(
            UserRepository userRepository, StudentService studentService, TeacherService teacherService) {

        this.userRepository = userRepository;
        this.studentService = studentService;
        this.teacherService = teacherService;
    }

    public UserResponse createUser(
            UserRequest request) {

        if (userRepository.existsByEmail(
                request.getEmail())) {

            throw new RuntimeException(
                    "Email already exists"
            );
        }

        User user = new User();

//        user.setEmail(request.getEmail());
//        user.setName(request.getName());
//     /*   user.setPhone(request.getPhone());
//        user.setDob(request.getDob());*/
//        user.setRegNum(request.getRegNum());
//        user.setRoles(request.getRoles());
//
//        User savedUser =
//                userRepository.save(user);

        if (request instanceof StudentRequest) {
            studentService.createStudent(
                    user,
                    (StudentRequest) request);
        }

        if (request instanceof TeacherRequest) {
            teacherService.createTeacher(
                    user,
                    (TeacherRequest) request);
        }


        return convertToResponse(user);
    }

    public List<UserResponse> getAllUsers() {

        return userRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public List<String> getAllStudentsNames() {

        return studentService.getAllStudentsNames();
    }

    public List<String> getAllMentors() {

        return teacherService.getAllMentors();
    }

    public UserResponse getUserById(
            Long userId) {

        User user =
                userRepository.findById(userId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                ));

        return convertToResponse(user);
    }

    //private void
//    private void isStudentOrTeacher(User user){
//        if(user == "student"){
//            fillStudentDetails(user);
//        }else{
//            fillTeacherDetails(user);
//        }
//
//    }

    public UserResponse getUserByEmail(
            String email) {

        User user =
                userRepository.findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                ));
        //isStudentOrTeacher(user);
        UserResponse userResponse = convertToResponse(user);

        if(user instanceof Student){
            StudentResponse studentResponse = studentService.convertToResponse((Student) user);
            return studentResponse;
        }
        else{
            TeacherResponse teacherResponse = teacherService.convertToResponse((Teacher) user);
            return teacherResponse;
        }

    }

    public UserResponse getUserByRegNum(
            String regnum) {

        User user =
                userRepository.findByRegNum(regnum)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                ));

        return convertToResponse(user);
    }

    public UserResponse updateUser(
            UserRequest request) {


        if (request.getRoles().contains(Role.STUDENT)) {
            return studentService.updateStudent((StudentRequest) request);
        }else{
            return teacherService.updateTeacher((TeacherRequest) request);
        }

    }

    public void deleteUser(Long userId) {

        if (!userRepository.existsById(userId)) {
            throw new RuntimeException(
                    "User not found"
            );
        }

        userRepository.deleteById(userId);
    }

    private UserResponse convertToResponse(
            User user) {

        UserResponse response =
                new UserResponse();

        response.setUserId(
                user.getUserId());

        response.setEmail(
                user.getEmail());

        response.setName(
                user.getName());

     /*   response.setPhone(
                user.getPhone());

        response.setDob(
                user.getDob());*/

        response.setRegNum(user.getRegNum());

        response.setRoles(
                user.getRoles());

        return response;
    }
}