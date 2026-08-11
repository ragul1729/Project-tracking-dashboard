import { useState } from 'react';
import Modal from 'react-modal';

import BroadcastInfo from './BroadcastInfo';

import '../Components/components.css';
import './News.css';

function MentorNews () {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="nm-block">
            <div className="nm-header">
                <h3>NEWS</h3>
                <button onClick={() => setModalIsOpen(true)}>Broadcast Info</button>
            </div>
            <div className="nm-body">
                <div className="news-block">
                    <h5>Review - 1</h5>
                    <p>Review - 1 is scheduled on Tuesday</p>
                </div>
                <div className="news-block">
                    <h5>Review - 1</h5>
                    <p>Review - 1 is scheduled on Tuesday</p>
                </div>
                <div className="news-block">
                    <h5>Review - 1</h5>
                    <p>Review - 1 is scheduled on Tuesday</p>
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
                    <h1 className="modal-title">Broadcast</h1>
                    <h1 className="close-button" onClick={() => setModalIsOpen(false)}>x</h1>
                </div>
                <div className="modal-body">
                    <BroadcastInfo />
                </div>
            
            </Modal>

        </div>
    )
}

export default MentorNews;