import React from 'react';
import Dashboard from '../Components/Dashboard';
import Navbar from '../Components/Navbar'
import Meetings from './Meetings';
import Mentorblock from './Mentorblock';
import Nameblock from './Nameblock';
import News from './News';
import Teamblock from './Teamblock';
function Student() {
  return (
    <div>
        <Navbar/>
        <News/>
        <Meetings/>
        <Nameblock/>
        <Mentorblock/>
        <Teamblock/>
        <Dashboard/>
    </div>
  );
}

export default Student;