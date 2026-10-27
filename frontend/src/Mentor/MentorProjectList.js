import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';

import WeeklyLog from './WeeklyLog';

import './MentorProjectList.css';
import CreateLog from './CreateLog';

function MentorProjectList ({projects}) {

    const [modalViewLogIsOpen, setModalViewLogIsOpen] = useState(false)
    const [modalCreateLogIsOpen, setModalCreateLogIsOpen] = useState(false)

    const [activeProjectId, setActiveProjectId] = useState(null);
    console.log(projects);

    const history = useHistory();

    const handleRouteChange = (projectID) =>{ 
        let path = `/mentor/dashboard/${projectID}`; 
        history.push(path);
    }
    

    return (
        <div>
            <h1 className="project-list-title">Project List</h1>
            {projects.map((project, index) => (
                <div className="project-list" key={index}>
                        <div className="block-2">
                            <div>
                                <h2 onClick={()=> {handleRouteChange(project.projectID)}}>{project.projectTitle}</h2>
                            </div>
                            <div>
                                <h4>Machine Learning</h4>
                            </div>
                            <div className="bottom mt">
                                <p>Group {project.teamNumber}</p>
                                <button onClick={() => {setActiveProjectId(project.projectId); setModalViewLogIsOpen(true);}}>Weekly Log</button>
                                <p>CSE(2021)</p>
                            </div>
                        </div>
                    </div>
            ))}
            
            <Modal isOpen={modalViewLogIsOpen}
                onRequestClose={() => setModalViewLogIsOpen(false)}
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
                        <h1 className="close-button" onClick={() => setModalViewLogIsOpen(false)}>x</h1>
                    </div>
                    <div className="modal-body">
                        <WeeklyLog projectId={activeProjectId}/>
                    </div>
                    <div className="modal-button">
                        <button onClick={() => setModalCreateLogIsOpen(true)}>Create Log</button>
                    </div>

                </Modal>

                <Modal isOpen={modalCreateLogIsOpen}
                onRequestClose={() => setModalCreateLogIsOpen(false)}
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
                        <h1 className="close-button" onClick={() => setModalCreateLogIsOpen(false)}>x</h1>
                    </div>
                    <div className="modal-body">
                        <CreateLog projectId={activeProjectId}/>
                    </div>


                </Modal>
                    

        </div>

    )
}

export default MentorProjectList;