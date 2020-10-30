import React, { Component } from 'react';
import JobForm from './JobForm'
import JobCard from './JobCard'
import {Link} from 'react-router-dom'
import NewJobPostingCont from './NewJobPostingCont'
import { Divider, Grid } from 'semantic-ui-react';

class JobContainer extends Component {
    renderJobCards = () => {
        return this.props.jobArr.map((jobObj) => {
            //console.log(jobObj)
            return <Link key={jobObj.id} to={`/${jobObj.id}`}> < JobCard jobObj={jobObj} /></Link>
        }) 
    }


        render() {
            return (
           
                <div>
                
                <p>This is JobContainer</p>
                {this.renderJobCards()}

                
                </div>
        );
    }
}
    



export default JobContainer;