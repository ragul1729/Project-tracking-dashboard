import Navbar from "../Components/Navbar";
import Nameblock from "./NameBlock";
import PanelMembers from "./PanelMembers";
import News from "../Student/News";
import ProjectDetails from "../Mentor/ProjectDetails";
import ProjectList from "../Mentor/ProjectList";

function PanelProjects(){
    return (
        <div>
            <Navbar />
            <Nameblock />
            <PanelMembers />
            <ProjectList />
            <News />
        </div>
    )
}

export default PanelProjects;