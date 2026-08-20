package com.PTD.service;

import com.PTD.entity.Project;
import com.PTD.entity.Review;
import com.PTD.entity.ReviewPanel;
import com.PTD.repository.ProjectRepository;
import com.PTD.repository.ReviewPanelRepository;
import com.PTD.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ProjectRepository projectRepository;
    private final ReviewPanelRepository reviewPanelRepository;

    public ReviewService(
            ReviewRepository reviewRepository,
            ProjectRepository projectRepository,
            ReviewPanelRepository reviewPanelRepository) {

        this.reviewRepository = reviewRepository;
        this.projectRepository = projectRepository;
        this.reviewPanelRepository = reviewPanelRepository;
    }

    public Review createReview(
            Long projectId,
            Long panelId,
            Integer reviewNumber,
            String remarks) {

        Project project = projectRepository
                .findById(projectId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Project not found"));

        ReviewPanel panel = reviewPanelRepository
                .findById(panelId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review panel not found"));

        Review review = new Review();

        review.setProject(project);
        review.setPanel(panel);
        review.setReviewNumber(reviewNumber);
        review.setRemarks(remarks);

        return reviewRepository.save(review);
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review getReview(Long reviewId) {

        return reviewRepository
                .findById(reviewId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review not found"));
    }

    public List<Review> getReviewsByProject(
            Long projectId) {

        return reviewRepository
                .findByProjectProjectId(projectId);
    }

    public Review updateReview(
            Long reviewId,
            Long projectId,
            Long panelId,
            Integer reviewNumber,
            String remarks) {

        Review review = getReview(reviewId);

        Project project = projectRepository
                .findById(projectId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Project not found"));

        ReviewPanel panel = reviewPanelRepository
                .findById(panelId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review panel not found"));

        review.setProject(project);
        review.setPanel(panel);
        review.setReviewNumber(reviewNumber);
        review.setRemarks(remarks);

        return reviewRepository.save(review);
    }

    public void deleteReview(Long reviewId) {

        if (!reviewRepository.existsById(reviewId)) {
            throw new RuntimeException(
                    "Review not found");
        }

        reviewRepository.deleteById(reviewId);
    }
}