import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: '#dfe22b',
    textDecoration: 'none',
    color: 'black',
    float: 'left', 
    // top: '-200px', 
}




class NavBar extends Component {
    render() {
        return (
    <div className="NavBar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
          background: '#e28a2b'
        }}
        >Home</NavLink>

       
        <NavLink
          to="/List"
          exact
          style={link}
          activeStyle={{
          background: '#dfe22b'
          }}
        >List</NavLink>
      </div>
        )
    }
}

export default NavBar;