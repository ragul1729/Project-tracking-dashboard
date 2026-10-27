import { useEffect, useState } from 'react';
import axios from 'axios';
import './WeeklyLog.css';

function WeeklyLog ({projectId}) {

    const [logs, setLogs] = useState([]);

    const formatOrdinalDate = (dateInput) =>  {
        
        const date = (typeof dateInput === 'string' && dateInput.includes('T') && !/[Z+-][^T]*$/.test(dateInput.split('T')[1])) ? dateInput.replace('T', ' ') : dateInput;
       
        const dateObj = typeof date === 'string' ? new Date(date) : date;
      
        if (Number.isNaN(dateObj.getTime())) {
            throw new Error("Invalid date provided to formatOrdinalDate");
        }
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const month = dateObj.toLocaleString('en-IN', { month: 'long' });

        const suffix = (day > 3 && day < 21) ? 'th' : ['th', 'st', 'nd', 'rd'][day % 10] || 'th';

        return `${day}${suffix} ${month} ${year}`;
    }

    const formatTimeAMPM = (dateInput) => {
    
        const date = (typeof dateInput === 'string' && dateInput.includes('T') && !/[Z+-][^T]*$/.test(dateInput.split('T')[1])) ? dateInput.replace('T', ' ') : dateInput;
        const dateObj = typeof date === 'string' ? new Date(date) : date;
      
        if (Number.isNaN(dateObj.getTime())) {
            throw new Error("Invalid date provided to formatTimeAMPM");
        }
        let hours = dateObj.getHours();
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        const formattedHours = String(hours).padStart(2, '0');

        return `${formattedHours}:${minutes} ${ampm}`;
    }

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await axios.get(
                `http://localhost:8080/api/weekly-logs/project/${projectId}`
                );

                setLogs(response.data);
                setLogs(prevLogs => {
                    return [...prevLogs].sort((a, b) => b.logDate.localeCompare(a.logDate));
                });
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching logs:", error);
            } 
        };
            fetchLogs();
    }, []);

    return (
        <div className="log-wrapper">
            {logs.map((log, index) => {
                return(
                    <div className="log" key={index}>
                        <h3 className="log-title">{log.title}</h3>
                        <p className="log-description">{log.description}</p>
                        <div className="log-bottom">
                            <div className="log-time">{formatTimeAMPM(log.logDate)}</div>

                            <div className="log-meta">
                                {log.isEdited === true && (
                                    <span className="log-edited">
                                        Edited
                                    </span>
                                )}
                            </div>
                            <div className="log-date">{formatOrdinalDate(log.logDate)}</div>
                        </div>
                    </div>
                )
            })}
            {/* <div className="log">
                <h3 className="log-title">Log Title</h3>
                <p className="log-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                <div className="log-bottom">
                    <div className="log-time">15:30</div>
                    <div className="log-date">9th October 2021</div>
                </div>
            </div>

            <div className="log">
                <h3 className="log-title">Log Title</h3>
                <p className="log-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                <div className="log-bottom">
                    <div className="log-time">15:30</div>
                    <div className="log-date">9th October 2021</div>
                </div>
            </div> */}
        </div>
    )
}

export default WeeklyLog;