import './WeeklyLog.css';

function WeeklyLog () {
    return (
        <div className="log-wrapper">
            <div className="log">
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
            </div>

            
        </div>
    )
}

export default WeeklyLog;