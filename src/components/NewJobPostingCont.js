import React, { Component } from 'react';
import JobForm from './JobForm'
import JobCard from './JobCard'



class NewJobPostingCont extends Component {
    render() {

         


        return (
            <div>
                {JobForm}
            
                {JobCard}
                <p>This is NewJobPostingCont</p>
              
            </div>
        );
    }
}

export default NewJobPostingCont;