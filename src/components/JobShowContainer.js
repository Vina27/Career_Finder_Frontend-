import React, { Component } from 'react';
import JobCard from './JobCard'
import { withRouter } from 'react-router-dom'
import JobForm from './JobForm'
import { Table } from 'semantic-ui-react';

class JobShowContainer extends Component {

    state = {
        job: {}, 
        user_id: 1, 
    }

//why are we fetching to jobs/jobObjId and figure out what jobObjId is 
    componentDidMount() {
        //console.log(this.props.match.params.id)
        let jobObjId = this.props.match.params.id
        fetch(`http://localhost:3000/jobs/${jobObjId}`)
        .then(resp => resp.json())
        .then(jobObj => {
            console.log(jobObj)
            this.setState ({
                job: jobObj
            })
        })
    }

    updateJob = (jobObj) => {
        //console.log(jobObj)
        let jobObjId = this.props.match.params.id
        let foundCategory = this.props.categories.find(category => {
            return category.name === jobObj.category 
          })
          //console.log(foundCategory)
        fetch(`http://localhost:3000/jobs/${jobObjId}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                job_title: jobObj.job_title, 
                description: jobObj.description, 
                category_id: foundCategory.id,
                user_id: this.state.user_id 
            })
            
        })
        .then(resp => resp.json())
        .then(updatedObj =>{
            //console.log(updatedObj)
            this.props.handleUpdate(updatedObj)
            this.setState ({
                job: updatedObj
            })
        })
    
    }
    

    render() {

       //console.log(this.props)
        return (
            <div>
                <JobForm updateJob={this.updateJob}  
                categories={this.props.categories}
                 />
                
                
                <JobCard jobObj={this.state.job} 
                deleteJob={this.props.deleteJob} 
                
                /> 
                {/* <button className="Delete-btn" onClick={this.handleDeleteJob}> Delete </button>  */}
            </div>
        );
    }
}

export default withRouter(JobShowContainer);