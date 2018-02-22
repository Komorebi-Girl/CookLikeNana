import React from "react";
import "./SearchResults.css";

const SearchResults = props =>
  <ul className="list-group search-results">
    {props.results.map(result =>
      <div>
      <li key={result} className="list-group-item">
        <img alt="Profile" src={result.profileimage} className="img-responsive" />
      </li>
      <li>
        {result.firstname}
      </li>
      <li>
        {result.lastname}
    </li>
    </div>
    )}
  </ul>;

export default SearchResults;
