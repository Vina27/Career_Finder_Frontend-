import React, { Component } from 'react';
import JobForm from './components/JobForm'

class NewJobPostingCont extends Component {
    render() {
        return (
            <div>
                <p>This is NewJobPostingCont</p>
                {this.state.JobForm}
            </div>
        );
    }
}

export default NewJobPostingCont;