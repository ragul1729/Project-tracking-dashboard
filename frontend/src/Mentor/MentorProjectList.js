import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';

import WeeklyLog from './WeeklyLog';

import './MentorProjectList.css';
import CreateLog from './CreateLog';

function MentorProjectList () {

    const [modal1IsOpen, setModal1IsOpen] = useState(false)
    const [modal2IsOpen, setModal2IsOpen] = useState(false)

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/mentor/dashboard`; 
        history.push(path);
    }
    

    return (
        <div>
            <h1 className="project-list-title">Project List</h1>
            <div className="project-list">
                <div className="block-2">
                    <div>
                        <h2 onClick={routeChange}>Project tracking dashboard</h2>
                    </div>
                    <div>
                        <h4>Machine Learning</h4>
                    </div>
                    <div class="bottom mt">
                        <p>Group 21</p>
                        <button onClick={() => setModal1IsOpen(true)}>Weekly Log</button>
                        <p>CSE(2021)</p>
                    </div>
                </div>
            </div>

            <div className="project-list">
                <div className="block-2">
                    <div>
                        <h2 onClick={routeChange}>Smart Grace Mark Calculator</h2>
                    </div>
                    <div>
                        <h4>Machine Learning</h4>
                    </div>
                    <div class="bottom mt">
                        <p>Group 21</p>
                        <button onClick={() => setModal1IsOpen(true)}>Weekly Log</button>
                        <p>CSE(2021)</p>
                    </div>
                </div>
            </div>

            <Modal isOpen={modal1IsOpen}
                onRequestClose={() => setModal1IsOpen(false)}
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
                        <h1 className="modal-title">Weekly Logs</h1>
                        <h1 className="close-button" onClick={() => setModal1IsOpen(false)}>x</h1>
                    </div>
                    <div className="modal-body">
                        <WeeklyLog />
                    </div>
                    <div className="modal-button">
                        <button onClick={() => setModal2IsOpen(true)}>Create Log</button>
                    </div>

                </Modal>

                <Modal isOpen={modal2IsOpen}
                onRequestClose={() => setModal2IsOpen(false)}
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
                        <h1 className="modal-title">Create Log</h1>
                        <h1 className="close-button" onClick={() => setModal2IsOpen(false)}>x</h1>
                    </div>
                    <div className="modal-body">
                        <CreateLog />
                    </div>


                </Modal>
                    

        </div>

    )
}

export default MentorProjectList;