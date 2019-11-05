import React from 'react'

import Notifications from "./Notifications";
import ProjectsList from "../projects/ProjectList";
import { connect } from 'react-redux'

function Dashboard(props) {
    //console.log(props);
    const { projects } = props;

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectsList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)
