import React, { Component } from 'react';
import NavBar from './NavBar'

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="App-header">Career Finder</h1>
                <NavBar className="NavBar-header" />
              
            </div>
        );
    }
}

export default Header;