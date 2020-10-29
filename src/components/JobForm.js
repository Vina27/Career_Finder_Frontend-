import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class JobForm extends Component {

    state = {
        jobForm: "", 
    }

    handleInputChange = (evt) =>{
        //console.log(evt.target)
        this.setState({
            [evt.target.name] : evt.target.value 
        })
    }


    handleSubmit = (evt) => {
        evt.preventDefault()
        //console.log("hi")
    }

     render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                        placeholder= "Job Title and Description"
                        name='jobForm'
                        value={this.state.jobForm }
                        onChange={this.handleInputChange}
                        />

                    <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default JobForm;