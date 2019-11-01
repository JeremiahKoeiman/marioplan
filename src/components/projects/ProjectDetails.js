import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - { id }</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores commodi cum deleniti dolorem doloremque, doloribus ducimus et exercitationem hic iure nisi qui quis, quos sapiente temporibus unde voluptas voluptatem.</p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
                    <div>Posted by Jeremiah</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

