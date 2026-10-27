import React from 'react';
import './Timeline.css'; // Importing the companion styles

function Timeline({ data, setModalIsOpen }) {
  // Late loading guard condition to handle asynchronous useEffect delays
  if (!data || data.length === 0) {
    return <div className="timeline-loading">Loading timeline metrics...</div>;
  }

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        
        {/* Main tracking timeline bar line */}
        <div className="timeline-axis-line"></div>

        {/* Dynamic Mapping Loop */}
        {data.map((info, index) => (
          <div key={info.id || index} className="timeline-row">
            
            {/* Timeline bullet marker point node */}
            <div className="timeline-bullet-node"></div>
            
            {/* Event Item Card Block */}
            <div className="timeline-card">
              
              {/* Card Header Structure */}
              <div className="timeline-card-header">
                <h3>{info.title}</h3>
              </div>

              {/* Card Content Body Structure */}
              <div className="timeline-card-content">
                <div className="timeline-summary-text">
                  {info.summary}
                </div>
                
                {/* Footer Flex Container Block */}
                <div className="timeline-footer">
                  
                  {/* Left Meta Group: Planner graphic image, Date, Time */}
                  <div className="timeline-footer-left">
                    <img 
                      src="https://img.icons8.com/material-sharp/24/000000/planner.png" 
                      alt="planner icon" 
                      className="planner-icon"
                    />
                    <span>{info.date}</span>
                    <span> - </span>
                    <span>{info.time}</span>
                  </div>
                  
                  {/* Right Meta Group: Interactive Modal Action Button */}
                  <div className="timeline-footer-right">
                    <button 
                      className="view-marks-btn" 
                      onClick={() => setModalIsOpen(true)}
                    >
                      View Marks
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Timeline;