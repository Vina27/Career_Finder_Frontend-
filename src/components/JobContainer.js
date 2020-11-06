import React, { Component } from 'react';
import JobForm from './JobForm'
import JobCard from './JobCard'
import JobList from './JobList'
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
    // renderJobCards = () => {
    //     return this.props.jobArr.map((jobObj) => {
    //         //console.log(jobObj)
    //         return <Link key={jobObj.id} to={`/${jobObj.id}`}> < JobCard jobObj={jobObj} /></Link>
    //     }) 
    // }

    
        render() {
            //console.log(this.props.categories)
            return (
           
                <div className="Job-Cont-JobCard">
                 <Search 
                getSearchVal={this.props.getSearchVal}
                search={this.props.search} 
                />
                <JobForm categories={this.props.categories} createJobPost={this.props.createJobPost} /> 
                <JobList jobArr={this.props.jobArr}/>
                </div>
                
        );
    }
}
    
export default JobContainer;



