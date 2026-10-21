import React,{useEffect} from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import App from './App';
import shome from './Student/Student';
import Admin from './Admin/Admin';
import Mentor from './Mentor/Mentor';
import Mentor2 from './Mentor/Mentor2';
import Addacc from './Admin/Addacc';
import Createnew from './Admin/Createnew';
import Updateacc from './Admin/Updateacc';
import Updateproj from './Admin/Updateproj';

function Path(){
    useEffect(() => {
        document.title = "PTS : Project Tracking System"
      }, [])
    return (
        <Router>
            <div>
                <Switch>
                <Route path="/" exact component = {App} />
                <Route path="/student" exact component = {shome} />
                <Route path="/mentor" exact component = {Mentor} />
                <Route path="/mentor/dashboard" exact component = {Mentor2} />
                <Route path="/admin" exact component = {Admin} />
                <Route path="/addacc" exact component = {Addacc} />
                <Route path="/updateacc" exact component = {Updateacc} />
                <Route path="/createproj" exact component = {Createnew} />
                <Route path="/updateproj" exact component = {Updateproj} />
                </Switch>
            </div>
        </Router>
    );
}

export default Path;