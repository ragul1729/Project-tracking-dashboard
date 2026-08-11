import React from 'react';
import Sidebar from '../Components/Sidebar'
import Adminnav from '../Components/Admin_nav'
import Sidedesign from '../Components/Sidedesign';
import Newacc from './Newacc';
function Addacc() {
  return (
    <div>
      <Sidedesign/>
      <Adminnav/>   
      <Newacc/>
      <Sidebar/> 
    </div>
  );
}

export default Addacc;