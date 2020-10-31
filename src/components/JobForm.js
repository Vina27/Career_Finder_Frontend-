import React, { Component } from 'react';
import { Form, SearchCategory, Select } from 'semantic-ui-react'



class JobForm extends Component {

    state = {
        job_title: "",
        description: "", 
        category: "",
    }

    

    handleInputChange = (evt) =>{
        //console.log(evt.target)
    
        this.setState({
            [evt.target.name] : evt.target.value 
        })
    }

    handleSelect = (evt) => {
       this.setState({
           category: evt.target.innerText
       })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        //console.log(this.state)
        this.props.createJobPost(this.state)
      
    }

     render() {
        
         //console.log(this.props.categories)

         let options=this.props.categories.map(category => {
             //return <option value={category.id}>{category.name}</option>
           return {key: category.id, value: category.name, text: category.name}
         })

         //console.log(options)
        // console.log(this.props)
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

                    <Form.Field
                        control={Select}
                        label='Category'
                        options={options}
                        placeholder='Occupation'
                        onChange={this.handleSelect}

                    />    



                     

                    <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default JobForm;