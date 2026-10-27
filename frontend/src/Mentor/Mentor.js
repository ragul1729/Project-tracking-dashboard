import Navbar from "./Navbar";

import MentorNameBlock from "./MentorNameBlock";
import MentorProjectDetails from "./MentorProjectDetails";

import MentorProjectList from "./MentorProjectList";
import Dashboard from "./MentorDashboard";

import MentorNews from "./News";
import MentorMeeting from "./Meeting";

import './Mentor.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Mentor () {

    const mentorID = 42;

    const [mentorData, setMentorData] = useState({});

    useEffect(() => {
        const fetchMentor = async () => {
            try {
                const response = await axios.get(
                `http://localhost:8080/api/teachers/mentor/${mentorID}`
                );

                setMentorData(response.data);
                //console.log(response.data);
            } catch (error) {
                console.error("Error fetching mentor:", error);
            } 
        };
            fetchMentor();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="wrapper">
                <div className="left">
                    {mentorData.name && <MentorNameBlock mentorName={mentorData.name}/>}
                    <MentorProjectDetails />
                </div>
                <div className="middle">
                    {mentorData.projects && <MentorProjectList projects={mentorData.projects}/>}
                </div>
                <div className="right">
                <MentorNews />
                <MentorMeeting />
                </div>
            </div>
        </div>
    )
}

export default Mentor;
