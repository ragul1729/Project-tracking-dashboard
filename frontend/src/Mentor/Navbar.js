import './Navbar.css';

import amrita from "../Assets/amrita.png";
import profile from "../Assets/profile.png";

function Navbar () {
    return (
        <div className="navbar">
            <div className="logo">
                <img alt="logo" src={amrita}></img>
                <img alt="profile" src={profile}></img>
            </div>
        </div>
    )
}

export default Navbar;