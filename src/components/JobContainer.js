import React, { Component } from 'react';
import JobForm from './JobForm'
import JobCard from './JobCard'
import {Link} from 'react-router-dom'
import NewJobPostingCont from './NewJobPostingCont'
import { Divider, Grid } from 'semantic-ui-react';
import Search from './Search'
import Sort from './Sort'

class JobContainer extends Component {
    renderJobCards = () => {
        return this.props.jobArr.map((jobObj) => {
            //console.log(jobObj)
            return <Link key={jobObj.id} to={`/${jobObj.id}`}> < JobCard jobObj={jobObj} /></Link>
        }) 
    }


        render() {
            //console.log(this.props.categories)
            return (
           
                <div className="Job-Cont-JobCard">
                    <div className="row">
                        <div className="column">
                
                <p>This is JobContainer</p>
                {/* <Grid > */}
                {/* <Grid.Row columns={2}>
                <Grid.Column>  */}
                {this.renderJobCards()}
                {/* </Grid> */}
                {/* </Grid.Column>
                </Grid.Row>      */}
                </div>
                </div>
                
                <JobForm categories={this.props.categories} createJobPost={this.props.createJobPost} /> 
          
                
                </div>
        );
    }
}
    



export default JobContainer;