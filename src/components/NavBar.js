import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '25px',
    margin: '-70px 6px 6px',
    //background: '#dfe22b',
    textDecoration: 'none', 
    color: 'white',
    float: 'left',
    fontSize: '20px', 
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
          background: ''
        }}
        >Home</NavLink>

       
        {/* {/* <NavLink
          to="/mylists"
          exact
          style={link}
          activeStyle={{
          background: ''
          }}
        >List</NavLink> */}
      </div> 
        )
    }
}

export default NavBar;