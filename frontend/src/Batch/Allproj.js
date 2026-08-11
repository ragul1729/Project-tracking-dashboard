import "./ProjectList.css";
var data = [
    {
    "title" : "Fire Detection using Deep Learning",
    "field" : "Machine Learning",
    "group" : "Group - 21",
    "branch" : "CSE(2021)"
    },
    {
    "title" : "Fire Detection using Deep Learning",
    "field" : "Machine Learning",
    "group" : "Group - 21",
    "branch" : "CSE(2021)"
    },
    {
    "title" : "Fire Detection using Deep Learning",
    "field" : "Machine Learning",
    "group" : "Group - 21",
    "branch" : "CSE(2021)"
    },
    {
    "title" : "Fire Detection using Deep Learning",
    "field" : "Machine Learning",
    "group" : "Group - 21",
    "branch" : "CSE(2021)"
    },
];

function Allproj() {
    return (
        <div className="list">
            <div className="project-head">PROJECT LIST</div>
            {data.map((info) => {return(
            <div className="project-card">
                <div className="project-title">
                    {info.title}
                </div>
                <div className="project-field">
                    {info.field}
                </div>
                <div className="project-group">
                    {info.group}
                </div>
                <div className="project-branch">
                    {info.branch}
                </div>
            
            </div>
            )})}
    </div>
    )
}

export default Allproj;