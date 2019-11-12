import React from 'react'
import {Link} from "react-router-dom";

import ProjectSummary from "./ProjectSummary";

const ProjectsList = ({projects}) => {
    return (
        <div className="project-list section">
            {
                /*if there are projects map through them, if not don't map through them*/
                projects && projects.map(project => {
                    return (
                        <Link to={'/project/' + project.id} key={project.id}>
                            <ProjectSummary project={project}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ProjectsList
