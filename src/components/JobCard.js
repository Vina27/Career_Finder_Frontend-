import React, { Component } from 'react';

class JobCard extends Component {
    render() {
//return below shows you job title and description but must render it out on app.js 
        //console.log(this.props.jobObj)
        return (
            <div>
                <p>
                   {this.props.jobObj.job_title} 
                   {this.props.jobObj.description} 
                </p>
            </div>
        );
    }
}

export default JobCard;