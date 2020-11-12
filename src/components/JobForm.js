import React, { Component } from 'react';
import { Form, Button, SearchCategory, Select } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'



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
        if (this.props.updateJob){
            this.props.updateJob(this.state)
            // this.props.history.push("/")
        }else {
            this.props.createJobPost(this.state)
            
        }
       
      
    }

     render() {
        //console.log(this.props)
         //console.log(this.props.categories)

         let options=this.props.categories.map(category => {
             //return <option value={category.id}>{category.name}</option>
           return {key: category.id, value: category.name, text: category.name}
         })

         //console.log(options)
        // console.log(this.props)
        
        return (
            <div className="form">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    {/* <label>Job Title</label> */}
                    <input placeholder='Enter Job Title'
                    name='job_title'
                    value={this.state.job_title }
                    onChange={this.handleInputChange} />
                    
                    </Form.Field>

                    <Form.Field>
                    {/* <label>Description</label> */}
                    <input placeholder='Enter Description' 
                    name='description'
                    value={this.state.description }
                    onChange={this.handleInputChange}/>

                    </Form.Field>

                        {/* <Form.Group> */}
                        {/* <Form.Input
                        placeholder= "Enter Job Title"
                        name='job_title'
                        value={this.state.job_title }
                        onChange={this.handleInputChange}
                        /> */}

                        {/* <Form.Input
                        placeholder= "Enter Job Description"
                        name='description'
                        value={this.state.description }
                        onChange={this.handleInputChange}
                        />   */}
                       

                    <Form.Field 
                        control={Select}
                        // label='Category'
                        options={options}
                        placeholder='Category'
                        onChange={this.handleSelect}
                    />    

                    <Form.Button content='Submit' />
                    {/* </Form.Group> */}
                    
                </Form>
            </div>
        );
    }
}

export default withRouter(JobForm);