package com.PTD.service;

import com.PTD.entity.Marks;
import com.PTD.entity.Review;
import com.PTD.entity.Student;
import com.PTD.repository.MarksRepository;
import com.PTD.repository.ReviewRepository;
import com.PTD.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarksService {

    private final MarksRepository marksRepository;
    private final StudentRepository studentRepository;
    private final ReviewRepository reviewRepository;

    public MarksService(
            MarksRepository marksRepository,
            StudentRepository studentRepository,
            ReviewRepository reviewRepository) {

        this.marksRepository = marksRepository;
        this.studentRepository = studentRepository;
        this.reviewRepository = reviewRepository;
    }

    public Marks createMarks(
            Long studentId,
            Long reviewId,
            Double mark1,
            Double mark2,
            Double mark3) {

        Student student = studentRepository
                .findById(studentId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Student not found"));

        Review review = reviewRepository
                .findById(reviewId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review not found"));

        Marks marks = new Marks();

        marks.setStudent(student);
        marks.setReview(review);

        marks.setMark1(mark1);
        marks.setMark2(mark2);
        marks.setMark3(mark3);

        double total =
                (mark1 == null ? 0 : mark1)
                        +
                        (mark2 == null ? 0 : mark2)
                        +
                        (mark3 == null ? 0 : mark3);

        marks.setTotal(total);

        marks.setIsPublished(false);

        return marksRepository.save(marks);
    }

    public List<Marks> getAllMarks() {
        return marksRepository.findAll();
    }

    public Marks getMarks(Long marksId) {

        return marksRepository
                .findById(marksId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Marks not found"));
    }

    public List<Marks> getMarksByStudent(
            Long studentId) {

        return marksRepository
                .findByStudentStudentId(studentId);
    }

    public List<Marks> getMarksByReview(
            Long reviewId) {

        return marksRepository
                .findByReviewReviewId(reviewId);
    }

    public Marks updateMarks(
            Long marksId,
            Double mark1,
            Double mark2,
            Double mark3) {

        Marks marks = getMarks(marksId);

        marks.setMark1(mark1);
        marks.setMark2(mark2);
        marks.setMark3(mark3);

        double total =
                (mark1 == null ? 0 : mark1)
                        +
                        (mark2 == null ? 0 : mark2)
                        +
                        (mark3 == null ? 0 : mark3);

        marks.setTotal(total);

        return marksRepository.save(marks);
    }

    public Marks publishMarks(Long marksId) {

        Marks marks = getMarks(marksId);

        marks.setIsPublished(true);

        return marksRepository.save(marks);
    }

    public Marks unpublishMarks(Long marksId) {

        Marks marks = getMarks(marksId);

        marks.setIsPublished(false);

        return marksRepository.save(marks);
    }

    public void deleteMarks(Long marksId) {

        if (!marksRepository.existsById(marksId)) {
            throw new RuntimeException(
                    "Marks not found");
        }

        marksRepository.deleteById(marksId);
    }
}