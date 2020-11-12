import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'


class JobCard extends Component {

    handleDeleteJob = (evt) => {
        //console.log(this.props)
        this.props.deleteJob(this.props.jobObj)
        this.props.history.push("/")
    }

    handleAddToList = (evt) => {
        console.log("click")
        fetch(`http://localhost:3000/lists`, {
            method: "POST", 
            headers: {
                "Content-Type": "Application/Json"
            }, 
            body: JSON.stringify({
                user_id: 1, 
                job_id: this.props.jobObj.id 
            })
        })
        .then(resp => resp.json())
        .then(list =>{
            console.log(list)
           this.props.functionToUpdateList(list)
            
        })
    }

    render() {
        console.log(this.props.functionToUpdateList)


//return below shows you job title and description but must render it out on app.js 
        //console.log(this.props.jobObj)
       
        return (
        <>
          <Table.Cell>
            <Link key={this.props.jobObj.id} to={`/${this.props.jobObj.id}`}>
              {this.props.jobObj.job_title}
            </Link>
            </Table.Cell>

          <Table.Cell>{this.props.jobObj.description}</Table.Cell>

         <Table.Cell>
            <button className="Delete-btn" onClick={this.handleDeleteJob}> Delete </button>  
         </Table.Cell>
        </>
        );
    }
}






export default withRouter(JobCard);


