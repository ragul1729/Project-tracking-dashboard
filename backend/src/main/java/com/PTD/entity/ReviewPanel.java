package com.PTD.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "review_panel")
public class ReviewPanel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long panelId;

    private String panelName;

    @OneToMany(mappedBy = "panel")
    private List<Review> reviews;

    @ManyToMany
    @JoinTable(
            name = "panel_member_assignment",
            joinColumns = @JoinColumn(name = "panel_id"),
            inverseJoinColumns = @JoinColumn(name = "teacher_id")
    )
    private List<Teacher> panelMembers;

    public List<Teacher> getPanelMembers() {
        return panelMembers;
    }

    public void setPanelMembers(List<Teacher> panelMembers) {
        this.panelMembers = panelMembers;
    }

    public Long getPanelId() {
        return panelId;
    }

    public String getPanelName() {
        return panelName;
    }

    public void setPanelName(String panelName) {
        this.panelName = panelName;
    }
}
