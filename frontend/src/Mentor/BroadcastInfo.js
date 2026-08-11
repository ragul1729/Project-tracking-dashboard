import { useState } from 'react';

import './BroadcastInfo.css'
import '../Components/components.css';

function BroadcastInfo() {

    const [title, setTitle] = useState('');
    const [log, setLog] = useState('');

    const [titleError, setTitleError] = useState(false);
    const [logError, setLogError] = useState(false);

    const titleChangeHandler = event => {
        setTitle(event.target.value);
    }

    const logChangeHandler = event => {
        setLog(event.target.value);
    }

    const formSubmissionHandler = event => { 

        if (title != '') {
            setTitleError(false);
        }

        else {
            setTitleError(true);
            event.preventDefault();
        }

        if (log != '') {
            setLogError(false);
        }

        else {
            setLogError(true);
            event.preventDefault();
        }
    };


    return (
        <div>
            <form onSubmit={formSubmissionHandler}>
                <input className="broadcast-title" type="text" placeholder="Title" onChange={titleChangeHandler}></input>
                { //Title validation
                    (titleError == true)
                    ? <div className="alert-error"> Title cannot be Empty! </div> 
                    : null
                }
                
                <textarea className="broadcast-text-area" rows="6" onChange={logChangeHandler}></textarea>
                { //Log Validation
                    (logError == true)
                    ? <div className="alert-error"> News cannot be Empty! </div> 
                    : null
                }
                
                <select className="broadcast-team">
                    <option value="Team-21">Team - 21</option>
                    <option value="Team-40">Team - 40</option>
                    <option value="Both">All</option>
                </select>
                <div className="broadcast-button-flex">
                    <button className="broadcast-button"> Broadcast </button>
                </div>
            </form>
        </div>
    )
}

export default BroadcastInfo;