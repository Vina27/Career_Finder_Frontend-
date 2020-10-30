import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

class JobCard extends Component {
    render() {
//return below shows you job title and description but must render it out on app.js 
        //console.log(this.props.jobObj)
        return (
            <div>

            <Card.Group>
                <Card>
                    <Card.Content>
                    <Card.Header>{this.props.jobObj.job_title}</Card.Header>
                    <Card.Description>{this.props.jobObj.description}</Card.Description>
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

            </div>
        );
    }
}

export default JobCard;