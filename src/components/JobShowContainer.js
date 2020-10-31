import React, { Component } from 'react';
import JobCard from './JobCard'
import NewJobPostingCont from './NewJobPostingCont'
import { withRouter } from 'react-router-dom'

class JobShowContainer extends Component {

    state = {
        job: {}, 
        user_id: 1, 
    }


    componentDidMount() {
        //console.log(this.props.match.params.id)
        let jobObjId = this.props.match.params.id
        fetch(`http://localhost:3000/jobs/${jobObjId}`)
        .then(resp => resp.json())
        .then(jobObj => {
            //console.log(jobObj)
            this.setState ({
                job: jobObj
            })
        })
    }







    render() {

       // console.log(this.props)
        return (
            <div>


                <JobCard jobObj={this.state.job} /> 
                
            </div>
        );
    }
}

export default withRouter(JobShowContainer);