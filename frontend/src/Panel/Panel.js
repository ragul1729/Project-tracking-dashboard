import Dashboard from "./Dashboard";
import Navbar from "../Components/Navbar";
import Nameblock from "./NameBlock";
import PanelMembers from "./PanelMembers";
import News from "../Student/News";


function Panel() {
    return (
        <div>
            <Navbar />
            <Nameblock />
            <PanelMembers />
            <Dashboard />
            <News />
        </div>
    )
}

export default Panel;