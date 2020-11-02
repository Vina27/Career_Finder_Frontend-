import React from "react";

const Search = (props) => {

  let handleSearch = (evt) => {
      
//     props.getSearchVal(evt.target.value)
 }

  return (
    <div className="ui large fluid icon input">
    <form>
      <input
        type="text"
        placeholder={"Search for Jobs"}
        value={props.searchVal}
        onChange={handleSearch}
      />
      <input type="submit" value="Submit" />
    </form>
     
   
     
    </div>
  );
};

export default Search;
