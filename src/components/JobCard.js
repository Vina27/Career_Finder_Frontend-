import React, { Component } from 'react';
import JobForm from './JobForm'
import { Button, Card, Image } from 'semantic-ui-react'
import { Divider, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'


class JobCard extends Component {

    handleDeleteJob = (evt) => {
        //console.log(this.props)
        this.props.deleteJob(this.props.jobObj)
        this.props.history.push("/")
    }



    render() {

//return below shows you job title and description but must render it out on app.js 
        console.log(this.props.jobObj)
        return (
                 <tr>
                    <td>{this.props.jobObj.job_title}</td>
                    <td>{this.props.jobObj.description}</td>
                    <td>{this.props.jobObj.description}</td>
                    <td>{this.props.jobObj.description}</td>
                     <td>
    {this.props.deleteJob ? <button onClick={this.handleDeleteJob}>
                      x
                  </button> : null }
                     
                    </td>
                </tr>
                
                   

        
        );
    }
}






export default withRouter(JobCard);


