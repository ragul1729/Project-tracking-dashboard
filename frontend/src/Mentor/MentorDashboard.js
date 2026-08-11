import React, { useState } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Modal from 'react-modal';

import ViewMarks from './ViewMarks';

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

            <Timeline lineColor="#44EABB">
            {data.map((info) => {
                return (
                <TimelineEvent
                    title={info.title}
                    icon={<i />}
                    iconColor="black"
                    buttons={<i />}
                    container="card"
                    style={{ border: "2px solid #080E2C"}}
                    cardHeaderStyle={{
                    backgroundColor: "#080E2C",
                    fontSize: "16px",
                    fontWeight: "bold",
                    }}
                    contentStyle={{
                    backgroundColor: "#D8E8E4",
                    fontWeight: "bold",
                    }}
                >
                    <div className="timeline-content">
                        <div>
                            {info.summary}
                        </div>
                        <div className="timeline-footer">
                                <div className="timeline-footer-left">
                                    <img src="https://img.icons8.com/material-sharp/24/000000/planner.png" />
                                    <p>{info.date}</p>
                                    <p> - </p>
                                    <p>{info.time}</p>
                                </div>
                                <div>
                                    <button onClick={() => setModalIsOpen(true)}>View Marks</button>
                                </div>
                        </div>
                    </div> 
                        
                </TimelineEvent>
                );
            })}
            </Timeline>
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
