import { useState } from 'react';
import axios from "axios";

import './CreateLog.css';
import '../Components/components.css';


function CreateLog ({projectId}) {

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

        event.preventDefault();
        if (title.trim() !== '') {
            setTitleError(false);
        }

        else {
            setTitleError(true);
            event.preventDefault();
        }

        if (log.trim() !== '') {
            setLogError(false);
        }

        else {
            setLogError(true);
            event.preventDefault();
        }

        const logPayload = {"projectId": projectId, "teacherId":42, "logDate": new Date().toISOString(), "title": title, "description": log, "isEdited": false}
        const response = axios.post("http://localhost:8080/api/weekly-logs", logPayload)
        .then(response => {
            // Handles success
            console.log('Log created:', response.data);
        })
        .catch(error => {
            // Handles error
            console.error('Error creating Log:', error);
        });;
    };

    return (
        <div>
            <form onSubmit={formSubmissionHandler}>
                <input className="create-log-title" type="text" placeholder="Title" onChange={titleChangeHandler}></input>
                { //Title validation
                    (titleError === true)
                    ? <div className="alert-error"> Title cannot be Empty! </div> 
                    : null
                }
                
                <textarea className="create-log-text-area" rows="6" onChange={logChangeHandler}></textarea>
                { //Log Validation
                    (logError === true)
                    ? <div className="alert-error"> Log cannot be Empty! </div> 
                    : null
                }
                <div className="create-log-button-flex">
                    <button className="create-log-button"> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default CreateLog;