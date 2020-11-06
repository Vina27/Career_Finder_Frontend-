import React, { Component } from 'react';
import JobCard from './JobCard'
import {Link} from 'react-router-dom'

class JobList extends Component {
    renderJobCards = () => {
        return this.props.jobArr.map((jobObj) => {
            //console.log(jobObj)
            return <Link key={jobObj.id} to={`/${jobObj.id}`}> < JobCard jobObj={jobObj} /></Link>
        }) 
    }

// handleAddBtn = (evt) => {
//     //console.log(this.props)
// }





    render() {
    return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Job Title</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Save to List</h3>
              
          </th>
          <th>
            <h3 className="ui center aligned header"></h3>
          </th>
        </tr>
        {this.renderJobCards()}
      </tbody>
    </table>
  );
};
}
export default JobList;

{/* <Button basic color='blue' onClick={this.handleAddBtn}>+</Button> */}