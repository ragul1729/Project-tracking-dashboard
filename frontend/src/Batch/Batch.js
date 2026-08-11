import React from 'react';
import Navbar from '../Components/Navbar'
import Nameblock from './Nameblock';
import Newsbatch from './Newsbatch';
import Allproj from './Allproj';
function Student() {
  return (
    <div>
        <Navbar/>
        <Nameblock/>
        <Newsbatch/>
        <Allproj/>
    </div>
  );
}

export default Student;