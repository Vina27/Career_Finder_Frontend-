// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import JobContainer from "./components/MovieContainer"
import JobShowContainer from "./components/MovieShowContainer"

import { Route, Switch, Link, NavLink } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobContainer />
        <JobShowContainer />
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
// 


