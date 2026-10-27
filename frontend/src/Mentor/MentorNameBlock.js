import './MentorNameBlock.css';

function MentorNameBlock ({mentorName}) {
    return (
        <div className="mentor-nameblock block">
            <h1>{mentorName}</h1>
            <p>Mentor</p>
        </div>
    )
}

export default MentorNameBlock;