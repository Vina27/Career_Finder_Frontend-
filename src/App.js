//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import JobContainer from './components/JobContainer'
import JobCard from "./components/JobCard"



// import { Route, Switch, Link, NavLink } from 'react-router-dom'



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
         <JobContainer />
         <JobCard />
         
           
          </div>
      );
  }
}


export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


