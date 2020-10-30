//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import { withRouter } from 'react-router-dom'

import JobContainer from './components/JobContainer'
import JobShowContainer from './components/JobShowContainer'


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
        

         <Switch>

         <Route path="/" exact render={() => <JobContainer jobArr={this.state.jobs}/>} />

         <Route path="/:id" render={() => <JobShowContainer />} />

         </Switch>
         
         
        </div>
      );
  }
}


export default withRouter(App);





