import React, { Component } from 'react';
import JobForm from './JobForm'
import JobCard from './JobCard'
import {Link} from 'react-router-dom'
import NewJobPostingCont from './NewJobPostingCont'
import { Divider, Grid, Table } from 'semantic-ui-react';
import Search from './Search'
import Sort from './Sort'

//This container should render job list and remove jobcard 
// joblist component should import jobcard and map function renderjobcards lines 15-20
//keep 

//36 remove render card funx and replace with the joblist component 


class JobContainer extends Component {
    renderJobCards = () => {
        return this.props.jobArr.map((jobObj) => {
            //console.log(jobObj)
            return <Link key={jobObj.id} to={`/${jobObj.id}`}> < JobCard jobObj={jobObj} /></Link>
        }) 
    }

    
        render() {
            //console.log(this.props.categories)
            return (
           
                <div className="Job-Cont-JobCard">
                    <div className="row">
                        <div className="column">
                
                <p>This is JobContainer</p>
                {/* <Grid > */}
                {/* <Grid.Row columns={2}>
                <Grid.Column>  */}
                {this.renderJobCards()}
                {/* </Grid> */}
                {/* </Grid.Column>
                </Grid.Row>      */}
                </div>
                </div>
                
                <JobForm categories={this.props.categories} createJobPost={this.props.createJobPost} /> 
                <div className="Search-Bar" >
                <Search 
                getSearchVal={this.props.getSearchVal}
                search={this.props.search} 
                />
                </div>
                
                </div>
        );
    }
}
    
export default JobContainer;


// return (
//     <table className="ui celled striped padded table">
//       <tbody>
//         <tr>
//           <th>
//             <h3 className="ui center aligned header">Job Title</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Description</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Category</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Save to List</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Delete</h3>
//           </th>
//         </tr>
//         {renderJobCards()}
//       </tbody>
//     </table>
//   );
// };

