import Navbar from "./Navbar";

import MentorNameBlock from "./MentorNameBlock";
import MentorProjectDetails from "./MentorProjectDetails";

import MentorProjectList from "./MentorProjectList";
import Dashboard from "./MentorDashboard";

import MentorNews from "./News";
import MentorMeeting from "./Meeting";

import './Mentor.css';

function Mentor () {
    return (
        <div>
            <Navbar />
            <div className="wrapper">
                <div className="left">
                    <MentorNameBlock />
                    <MentorProjectDetails />
                </div>
                <div className="middle">
                    <MentorProjectList />
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
