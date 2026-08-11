import DashboardCoordinator from "./DashboardCoordinator";
import Navbar from "../Components/Navbar";
import Nameblock from "./NameBlock";
import PanelMembers from "./PanelMembers";
import News from "../Student/News";


function PanelCoordinator(){
    return (
        <div>
            <Navbar />
            <Nameblock />
            <PanelMembers />
            <DashboardCoordinator/>
            <News />
        </div>
    )
}

export default PanelCoordinator;