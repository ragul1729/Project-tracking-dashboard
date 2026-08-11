import { useHistory } from "react-router-dom";

import './MentorProjectDetails.css';

function MentorProjectDetails () {

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/mentor/dashboard`; 
        history.push(path);
    }

    return (
        <div className="project-details block">
            <h1>
                Project details
            </h1>
            <p onClick={routeChange}>
                B.Tech Project Tracking Dashboard
            </p>
            <p onClick={routeChange}>
                Smart Grace Mark Calculator
            </p>
        </div>
    )
}

export default MentorProjectDetails;