import React from 'react'

import ProjectSummary from "./ProjectSummary";

const ProjectsList = ({projects}) => {
    return (
        <div className="project-list section">
            {
                /*if there are projects map through them, if not don't map through them*/
                projects && projects.map(project => {
                    return (
                        <ProjectSummary project={project} key={project.id}/>
                    )
                })
            }
        </div>
    )
}

export default ProjectsList
