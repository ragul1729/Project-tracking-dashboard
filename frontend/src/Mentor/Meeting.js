import { useState } from 'react';
import Modal from 'react-modal';

import ScheduleMeeting from './ScheduleMeeting';

import '../Components/components.css';
import './Meeting.css';

function MentorMeeting () {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="nm-block">
            <div className="nm-header">
                <h3>MEETINGS</h3>
                <button onClick={() => setModalIsOpen(true)}>Schedule Meeting</button>
            </div>
            <div className="nm-body">
                <div className="meeting-block">
                    <h5>Review - 1</h5>
                    <div><span className="title">DATE: </span><span>28/08/2021 (Saturday)</span></div>
                    <div><span className="title">TIME: </span><span>10:30 - 12:00</span></div>
                </div>
                <div className="meeting-block">
                    <h5>Review - 1</h5>
                    <div><span className="title">DATE: </span><span>28/08/2021 (Saturday)</span></div>
                    <div><span className="title">TIME: </span><span>10:30 - 12:00</span></div>
                </div>
            </div>

            <Modal 
            isOpen={modalIsOpen}
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
                    <h1 className="modal-title">Schedule Meeting</h1>
                    <h1 className="close-button" onClick={() => setModalIsOpen(false)}>x</h1>
                </div>
                <div className="modal-body">
                    <ScheduleMeeting />
                </div>
            
            </Modal>

        </div>
    )
}

export default MentorMeeting;