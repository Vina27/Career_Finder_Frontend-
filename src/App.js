//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';

//import JobCard from './test/JobCard'; 
//import JobContainer from './test/JobContainer'
//import JobShowContainer from './test/JobShowContainer'
// import JobCard from './components/JobCard'
import JobContainer from './components/JobContainer'
// import JobShowContainer from './components/JobShowContainer'
// import List from './components/List'
// import Category from './components/Category'
// import JobForm from './components/JobForm'
//import NewJobPostingCont from './components/NewJobPostingCont'



import { Route, Switch, Link, NavLink } from 'react-router-dom'



class App extends Component {

  state = {
    jobs: []

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
    })
  }

  render() {

      return (
        <div className="App">
         < Header />
         <JobContainer jobArr={this.state.jobs} />

        
         
         
        </div>
      );
  }
}


export default App;





