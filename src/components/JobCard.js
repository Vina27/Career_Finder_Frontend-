import React, { Component } from 'react';
import JobForm from './JobForm'
import { Button, Card, Image } from 'semantic-ui-react'
import { Divider, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

class JobCard extends Component {

    handleDeleteJob = (evt) => {
        console.log(this.props)
        this.props.deleteJob(this.props.jobObj)
        this.props.history.push("/")
    }





    render() {
//return below shows you job title and description but must render it out on app.js 
        //console.log(this.props.jobObj)
        return (
            <div>

             {/* <Grid.Row columns={2}>
                <Grid.Column> */}
            <Card.Group>
                <Card>
                    <Card.Content>
                    <Card.Header>{this.props.jobObj.job_title}</Card.Header>
                    <Card.Description>{this.props.jobObj.description}</Card.Description>
                    {this.props.deleteJob ? <Button basic color='red' onClick={this.handleDeleteJob}>
                    Delete
                </Button> : null }
                    
                
                    </Card.Content>
                </Card>
      
                {/* <Card>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>Delete</Button>
                        <Button basic color='red'>Save to List
                    </Button>
                    </div>
                </Card.Content>
                </Card> */}

            </Card.Group>
            {/* </Grid.Column>
        </Grid.Row> */}

            </div>
        );
    }
}

export default withRouter(JobCard);