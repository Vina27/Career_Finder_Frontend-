import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }






class NavBar extends Component {
    render() {
        return (
    <div class="NavBar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
          background: 'blue'
        }}
        >Home</NavLink>

       
        <NavLink
          to="/List"
          exact
          style={link}
          activeStyle={{
          background: 'blue'
          }}
        >List</NavLink>
      </div>
        )
    }
}

export default NavBar;