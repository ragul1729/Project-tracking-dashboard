import { useState } from 'react';

import './ScheduleMeeting.css';
import '../Components/components.css';

function ScheduleMeeting () {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [timeBegin, setTimeBegin] = useState('')
    const [timeEnd, setTimeEnd] = useState('')


    const [titleError, setTitleError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [timeBeginError, setTimeBeginError] = useState(false);
    const [timeEndError, setTimeEndError] = useState(false);
    const [timeDifferenceError, setTimeDifferenceError] = useState(false);

    const titleChangeHandler = event => {
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    const dateChangeHandler = event => {
        console.log(event.target.value);
        setDate(event.target.value);
    }

    const timeBeginChangeHandler = event => {
        setTimeBegin(event.target.value);
    }

    const timeEndChangeHandler = event => {
        setTimeEnd(event.target.value);
    }

    const formSubmissionHandler = event => { 


        if (title !== '') {
            setTitleError(false);
        }

        else {
            setTitleError(true);
            event.preventDefault();
        }

        if (date !== '') {
            setDateError(false);
        }

        else {
            setDateError(true);
            event.preventDefault();
        }

        if (timeBegin !== '') {
            setTimeBeginError(false);
        }

        else {
            setTimeBeginError(true);
            event.preventDefault();
        }

        if (timeEnd !== '') {
            setTimeEndError(false);
        }

        else {
            setTimeEndError(true);
            event.preventDefault();
        }

        if (timeBegin !== '' && timeEnd !== '') {
            const hours1 = timeBegin[0] + timeBegin[1];
            const hours2 = timeEnd[0] + timeEnd[1];

            const minutes1 = timeBegin[3] + timeBegin[4];
            const minutes2 = timeEnd[3] + timeEnd[4];

            console.log(hours1, minutes1, hours2, minutes2);
            
            if (hours1 > hours2) {
                setTimeDifferenceError(true);
                event.preventDefault();
            }

            else if (hours1 === hours2) {
                if (minutes1 >= minutes2) {
                    setTimeDifferenceError(true);
                    event.preventDefault();
                }
                else {
                    setTimeDifferenceError(false);
                }
            } 
            
            else {
                setTimeDifferenceError(false);
            }

        }

        else {
            setTimeDifferenceError(false);
        }

    };

    return (
        <div>
            <form onSubmit={formSubmissionHandler}>
                <input className="schedule-title" type="text" placeholder="Title" onChange={titleChangeHandler}></input>
                { //Title validation
                    (titleError === true)
                    ? <div className="alert-error"> Title cannot be Empty! </div> 
                    : null
                }
                <p className="schedule-date-label" for="date">Date</p>
                <input className="schedule-date" type="date"  onChange={dateChangeHandler}></input>
                { //Date validation
                    (dateError === true)
                    ? <div className="alert-error"> Date cannot be Empty! </div> 
                    : null
                }
                <div className="schedule-time-flex">
                    <div>
                        <p className="schedule-start-time-label" for="start-time">Start Time</p>
                    </div>
                    <div>
                        <p className="schedule-end-time-label" for="end-time">End Time</p>
                    </div>
                </div>
                <div className="schedule-time-flex">
                    <div>
                        <input className="schedule-start-time" type="time" onChange={timeBeginChangeHandler}></input>
                        { //Start time validation
                            (timeBeginError === true)
                            ? <div className="alert-error"> Start time cannot be Empty! </div> 
                            : null
                        }
                    </div>
                    <div>
                        <input className="schedule-end-time" type="time" onChange={timeEndChangeHandler}></input>
                        { //End time validation
                            (timeEndError === true)
                            ? <div className="alert-error"> End time cannot be Empty! </div> 
                            : null
                        }
                    </div>
                </div>
                { //End time validation
                    (timeDifferenceError === true)
                    ? <div className="alert-error"> Start time should be less than end time! </div> 
                    : null
                }
                <select className="schedule-team">
                    <option value="Team-21">Team - 21</option>
                    <option value="Team-40">Team - 40</option>
                </select>
                <div className="schedule-button-flex">
                    <button className="schedule-button"> Schedule </button> 
                </div>
            </form>
        </div>
    )
}

export default ScheduleMeeting;