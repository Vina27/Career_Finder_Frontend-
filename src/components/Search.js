import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class Search extends Component {

  handleSearch = (evt) => {
    console.log(evt.target.value)
    this.props.getSearchVal(evt.target.value)
  }



  render() {
    
    return (
      <div>

        <Form className="search-form">
            <Form.Input
              className="search-input"
              icon="search"
              name="search"
              
              placeholder="Search for Jobs"
              value={this.props.search}
              onChange={this.handleSearch}
            />
          </Form>
      </div>
    );
  }
}

export default Search;