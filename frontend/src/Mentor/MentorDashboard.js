import React, { useState } from "react";
//import { Timeline, TimelineEvent } from "react-event-timeline";
import Modal from 'react-modal';

import ViewMarks from './ViewMarks';
import { Chrono } from "react-chrono";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Timeline from './Timeline'; 

import './MentorDashboard.css';

var data = [
  {
    title: "Review 0",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "25/08/2021",
    time: "5:00 PM",
  },
  {
    title: "Review 1",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "26/08/2021",
    time: "5:00 PM",
  },
  {
    title: "Review 2",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "27/08/2021",
    time: "5:00 PM",
  },
];

function Dashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
        <h1 className="project-dashboard-title">B.Tech Project Tracking Dashboard</h1>
        <div className="timeline">
             <Timeline 
                   data={data} 
                   setModalIsOpen={setModalIsOpen}
             />
        </div>

        <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                        overlay: {
                        position: "fixed",
                        margin: 0,
                        backgroundColor: "rgba(255,255,255,0.75)",
                    },

                    content: {
                        top: "50%",
                        bottom: "auto",
                        left: "50%",
                        right: "50%",
                        minWidth: "25rem",
                        borderRadius: "20px",
                        border: "2px solid #44eabb", 
                        color: "white",
                        backgroundColor: "#080E2C",
                        transform: "translate(-50%, -50%)",
                        padding: "40px",
                    },
                }}>
                    <div className="modal-header">
                        <h1 className="modal-title">Marks</h1>
                        <h1 className="close-button" onClick={() => setModalIsOpen(false)}>x</h1>
                    </div>
                    <div className="modal-body">
                        <ViewMarks />
                    </div>

        </Modal>

                
            

    </div>
  );
}


export default Dashboard;
