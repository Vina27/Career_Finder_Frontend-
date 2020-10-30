import React, { Component } from 'react';
//import JobForm from './JobForm'
import JobCard from './JobCard'
//import NewJobPostingCont from './components/NewJobPostingCont'

class JobContainer extends Component {
    renderJobCards = () => {
        return this.props.jobArr.map((jobObj) => {
            //console.log(jobObj)
            return < JobCard jobObj={jobObj} />
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