import React, { Component } from 'react';
import JobCard from './JobCard'
import {Link} from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


class JobList extends Component {
    renderJobCards = () => {
        return this.props.jobArr.map((jobObj) => {
            //console.log(jobObj)
            return  <Table.Row> 
                    <JobCard functionToUpdateList={this.props.functionToUpdateList} jobObj={jobObj} /> 
                    </Table.Row>
        }) 
    }

// handleAddBtn = (evt) => {
//     //console.log(this.props)
// }


    render() {
    return (
    <table className="ui celled striped padded table">
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Job Title</Table.HeaderCell>
        <Table.HeaderCell>Job Description</Table.HeaderCell>
        <Table.HeaderCell>Delete Job</Table.HeaderCell> 
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {this.renderJobCards()}
    </Table.Body>
  </Table>
    </table>
  );
};
}
export default JobList;

{/* <Button basic color='blue' onClick={this.handleAddBtn}>+</Button> */}