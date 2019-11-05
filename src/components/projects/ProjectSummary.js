import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-2 project-summary">
            <div className="card-content black-text">
                <span className="card-title">{project.title}</span>
                <p>Posted by Jeremiah</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    )
}

export default ProjectSummary
