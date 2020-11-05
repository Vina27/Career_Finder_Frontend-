//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import { withRouter } from 'react-router-dom'
import JobContainer from './components/JobContainer'
import JobList from './components/JobList'
import JobShowContainer from './components/JobShowContainer'
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
//import List from './components/List'
import Search from './components/Search'
import Sort from './components/Sort'



class App extends Component {

  state = {
    jobs: [],
    categories: [], 
    user_id: 1, 
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
      method: "DELETE", 
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

 

  getSearchVal = (searchVal) => {
    console.log(searchVal)
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
   







   // getSearchVal = (searchVal) => {
   //   this.setState({
   //     searchVal 
   //   })
   // }

   // filterBasedOnSearchSort = () => {
   //   let {jobs, selectedCategory, searchVal} = this.state
   //   let copyOfJobs = [...jobs]
   //   if (selectedCategory === "All") {
   //     return jobs
   //   } else if (selectedCategory === "Category") {
   //     copyOfJobs.sort((job1, job2) => {
   //       return job1.category.localeCompare(job2.category)
   //     })
   //     return copyOfJobs
   //   } else if (selectedCategory === "Description") {
   //     copyOfJobs.sort((job1, job2) => {
   //       return job1.description.localeCompare(job2.description)
   //     })
   //     return copyOfJobs
   //   } else {
   //     return jobs.filter((job) => {
   //       return job.description.toLowerCase().includes(searchVal.toLowerCase())
   //     })
   //   }
   // }

   // changeSelectedCategory = (selectedCategory) => {
   //   this.setState({
   //     selectedCategory
   //   })
   // }


  render() {
    //console.log(this.state.categories)

      return (
        <div className="App">
         < Header className="blink-me"/>
        
        


         
        
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
         <Route path="/" exact render={() => <JobContainer search={this.state.search} getSearchVal={this.getSearchVal}  createJobPost={this.createJobPost} jobArr={this.filterSearch()} categories={this.state.categories}/>} />

         <Route path="/:id" render={() => <JobShowContainer handleUpdate={this.handleUpdate} categories={this.state.categories} deleteJob={this.deleteJob} />} />

         </Switch>
         
         
        </div>
      );
  }
}


export default withRouter(App);





