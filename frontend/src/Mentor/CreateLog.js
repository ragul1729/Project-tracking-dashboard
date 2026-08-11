import { useState } from 'react';

import './CreateLog.css';
import '../Components/components.css';


function CreateLog () {

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

        if (title !== '') {
            setTitleError(false);
        }

        else {
            setTitleError(true);
            event.preventDefault();
        }

        if (log !== '') {
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