import React from 'react';
import Sidebar from '../Components/Sidebar'
import Adminnav from '../Components/Admin_nav'
import Sidedesign from '../Components/Sidedesign';
import Newproj from './Newproj';
function Createnew() {
  return (
    <div>
      <Sidedesign/>
      <Adminnav/>   
      <Newproj/>
      <Sidebar/> 
    </div>
  );
}

export default Createnew;