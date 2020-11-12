import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import JobCard from './JobCard'


class List extends Component {
    renderOutList = () => {
        return this.props.lists.map((listObj) => {
            return <JobCard jobObj={listObj} />
        })
    }


    render() {
        console.log("hello from list")
        return (
            <div>
               
               {this.renderOutList()}
               
            </div>
        );
    }
}

export default List;