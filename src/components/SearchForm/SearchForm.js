import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>
  <form className="search">
    <div className="form-group">
      <label htmlFor="location">Location:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="location"
        type="text"
        className="form-control"
        placeholder="Location"
        id="location"
      />
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="date"
        type="text"
        className="form-control"
        placeholder="Date"
        id="date"
      />
      <datalist id="breeds">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
      </datalist>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>;

export default SearchForm;
