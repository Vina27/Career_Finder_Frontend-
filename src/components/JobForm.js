import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'


class JobForm extends Component {

    state = {
        job_title: "",
        // jobForm: "",
        description: "", 
        // category_id: ""
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
                        placeholder= "Enter Job Title"
                        name='job_title'
                        value={this.state.job_title }
                        onChange={this.handleInputChange}
                        />

                        <Form.Input
                        placeholder= "Enter Job Description"
                        name='description'
                        value={this.state.description }
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