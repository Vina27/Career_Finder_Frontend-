//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import { withRouter } from 'react-router-dom'
import JobContainer from './components/JobContainer'
import JobShowContainer from './components/JobShowContainer'
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
import List from './components/List'





class App extends Component {

  state = {
    jobs: [],
    categories: [], 
    user_id: 1, 
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

  }

    createJobPost = (jobObj) => {
      //console.log(jobObj)
      //whatever is in the categoryArr find whats matching from the form 
      let foundCategory = this.state.categories.find(category => {
        return category.name === jobObj.category 
      })


  fetch(`http://localhost:3000/jobs`, {
    method: "Post", 
    headers: {
      "Content-Type": "Application/json"
    }, 
    body: JSON.stringify({
      job_title: jobObj.job_title, 
      description: jobObj.description, 
      category_id: foundCategory.id,
      user_id: this.state.user_id 
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
      method: "Delete", 
  })
    .then(resp => resp.json())
    .then(deletedJob => {
      console.log(deletedJob)
      let updatedJobsArr = this.state.jobs.filter(job=> job.id !== deletedJob.job.id)
      this.setState({
        jobs: updatedJobsArr 
      })
     
    })
  }

  handleUpdate = (updatedObj) => {
    console.log(updatedObj)
    let updatedJobs = this.state.jobs.map(job => {
      if (job.id === updatedObj.id){
        return updatedObj
      
      }else {
        return job 
      }
    })
    console.log(updatedJobs)
    this.setState({
      jobs: updatedJobs
    })
    
  }


  render() {
    //console.log(this.state.categories)

      return (
        <div className="App">
         < Header />
         <NavBar>
          
         </NavBar>



         {/* <aside className="sidebar">
          <ul>
            <li>
              <Link to=> </Link>
            </li>
          < / ul>

          < / aside> */}
        
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
         <Route path="/" exact render={() => <JobContainer createJobPost={this.createJobPost} jobArr={this.state.jobs} categories={this.state.categories}/>} />

         <Route path="/:id" render={() => <JobShowContainer handleUpdate={this.handleUpdate} categories={this.state.categories} deleteJob={this.deleteJob} />} />

         </Switch>
         
         
        </div>
      );
  }
}


export default withRouter(App);





