import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import Notifications from "./Notifications";
import ProjectsList from "../projects/ProjectList";

function Dashboard(props) {
    //console.log(props);
    const { projects, auth } = props;
    if (!auth.uid) return <Redirect to={'/signin'} />

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
    console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'projects'
        }
    ])
)(Dashboard)
