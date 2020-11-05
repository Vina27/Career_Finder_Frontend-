import React, { Component } from 'react';
import JobForm from './JobForm'
import { Button, Card, Image } from 'semantic-ui-react'
import { Divider, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'


class JobCard extends Component {

    handleDeleteJob = (evt) => {
        //console.log(this.props)
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
                 {/* starting from below */}

                 {/* Turn Card Group back on for orignal job card box styling  */}
             {/* <Card.Group>
                 <Card>
                     <Card.Content>
                     <Card.Header>{this.props.jobObj.job_title}</Card.Header> */}
                     {this.props.jobObj.job_title}
                     {this.props.jobObj.description}
                     {this.props.deleteJob ? <Button className="delete-btn" basic color='red' onClick={this.handleDeleteJob}>
                      x
                  </Button> : null }
                     
                     {/* <Card.Description>{this.props.jobObj.description}</Card.Description>
                      {this.props.deleteJob ? <Button basic color='red' onClick={this.handleDeleteJob}>
                      Delete
                  </Button> : null }
                    
                
                    </Card.Content> */}
                   {/* </Card> */}
                 {/* turn on ending here at card upper one */}
                 {/* <Card>
                 <Card.Content extra>
                     <div className='ui two buttons'>
                         <Button basic color='green'>Delete</Button>
                         <Button basic color='red'>Save to List
                     </Button>
                     </div>
                 </Card.Content>
                 </Card> */}
             {/* need below card.group  */}
            {/* </Card.Group> */}
            {/* </Grid.Column>
         </Grid.Row> */}

            </div>
        );
    }
}



// <table class="ui celled table">
//   <thead>
//     <tr><th>Job Title</th>
//     <th>Description</th>
//     <th>Category</th>
//   </tr></thead>
//   <tbody>   

//   <tr>
//       <td data-label="Job Title">{this.props.jobObj.job_title}</td>
//       <td data-label="Description">{this.props.jobObj.description}</td>
//       <td data-label="Category"></td>
//     </tr>
//   </tbody>
//   </table>


export default withRouter(JobCard);


// render() {
    //     <Table striped>
    //     <Table.Header>
    //   <Table.Row>
    //     <Table.HeaderCell>Job Title</Table.HeaderCell>
    //     <Table.HeaderCell>Description</Table.HeaderCell>
    //     <Table.HeaderCell>Category</Table.HeaderCell>
    //     <Table.HeaderCell>Save to List</Table.HeaderCell>
    //   </Table.Row>
    // </Table.Header>

    //     <Table.Body>
    //     <Table.Row>
    //     <Table.Cell>{this.props.jobObj.job_title}</Table.Cell>
    //     <Table.Cell>{this.props.jobObj.description}</Table.Cell>
    //     <Table.Cell>Requires call</Table.Cell>
    //     </Table.Row>
    //     </Table.Body>
    //     </Table>

