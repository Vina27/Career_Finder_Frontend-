//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import { withRouter } from 'react-router-dom'
import JobContainer from './components/JobContainer'

import JobShowContainer from './components/JobShowContainer'
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import List from './components/List';



class App extends Component {

  state = {
    jobs: [],
    categories: [],  
    user: {}, 
    search: ""
    // selectedCategory: "ALL"
}
  
  componentDidMount(){
    fetch(`http://localhost:3000/jobs`)
    .then(resp => resp.json())
    .then(jobsArr => {
      //setting state to jobs thats coming from backend 
      this.setState({
        jobs: jobsArr
      })
      //console.log(jobsArr)
    })//first fetch ends here 

    fetch(`http://localhost:3000/categories`)
    .then(resp => resp.json())
    .then(categoriesArr => {
      this.setState({
        categories: categoriesArr
        })
    })
    //fetching to all users so that we can index into the first user and setting it to the state 
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(users => {
     // console.log(users)
      this.setState({
        user: users[0]
      })
    })
  }

    createJobPost = (jobObj) => {
      //console.log(jobObj)
      //whatever is in the categoryArr find whats matching from the form 
      let foundCategory = this.state.categories.find(category => {
        return category.name === jobObj.category 
      })
    

  fetch(`http://localhost:3000/jobs`, {
    method: "POST", 
    headers: {
      "Content-Type": "Application/json"
    }, 
    body: JSON.stringify({
      job_title: jobObj.job_title, 
      description: jobObj.description, 
      category_id: foundCategory.id,
      user_id: this.state.user.id 
    })
  })
    .then(resp => resp.json())
    .then(newJob => {
      //console.log(newJob)
      //adding newJob to the jobArr which is already in the state 
      let updatedJobsArr = [...this.state.jobs, newJob]
      this.setState ({
        jobs: updatedJobsArr
      })
  })//getting newJob object from backend 
} //end of function 

deleteJob = (jobObj) => {
   //console.log(jobObj)
  
  fetch(`http://localhost:3000/jobs/${jobObj.id}`, {
      method: "DELETE", 
  })
    .then(resp => resp.json())
    .then(deletedJob => {
      //console.log(deletedJob)
      let updatedJobsArr = this.state.jobs.filter(job=> job.id !== deletedJob.job.id)
      this.setState({
        jobs: updatedJobsArr 
      })    
    })
  }

  handleUpdate = (updatedObj) => {
    //console.log(updatedObj)
    let updatedJobs = this.state.jobs.map(job => {
      if (job.id === updatedObj.id){
        return updatedObj
      
      }else {
        return job 
      }
    })
    //console.log(updatedJobs)
    this.setState({
      jobs: updatedJobs
    })
  }

  getSearchVal = (searchVal) => {
    //console.log(searchVal)
    this.setState({
      search: searchVal
    })
  }
 
   filterSearch = () => {
     let newArr = this.state.jobs.filter( job => {
       let searchVal = this.state.search.toLowerCase()
       return job.job_title.toLowerCase().includes(searchVal) || job.job_title.toLowerCase().includes(searchVal)
     })
     return newArr
   }
   

  render() {
    //console.log(this.state.user)
    //console.log(this.state.categories)

      return (
        <div className="App">
         < Header className="blink-me"/>
        
          <Switch>
          {/* <Route path="/" exact component={Home} /> */}
         <Route exact path="/"  render={() => <JobContainer search={this.state.search} getSearchVal={this.getSearchVal}  createJobPost={this.createJobPost} jobArr={this.filterSearch()} categories={this.state.categories}/>} />

         <Route exact path="/:id"  render={() => <JobShowContainer handleUpdate={this.handleUpdate} categories={this.state.categories} deleteJob={this.deleteJob} />} />
         <Route exact path="/mylists" render={() => <List  />} />

         </Switch>
         
          </div>
      );
  }
}


export default withRouter(App);





