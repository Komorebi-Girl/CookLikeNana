import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchResults from "../SearchResults";
import { Input, FormBtn } from "../../components/Form";

class Search extends Component {
  state = {
    nanas: [],
    location: "",
    date: "",
    italiancuisine: false,
    southerncuisine: false,
    hispaniccuisine: false,
    vegetarianvegan: false,
    baking: false
  };

  loadNanas = (event) => {
    event.preventDefault();
    API.getNanas({
      location: this.state.location,
      italiancuisine: this.state.italiancuisine,
      southerncuisine: this.state.southerncuisine,
      hispaniccuisine: this.state.hispaniccuisine,
      vegetarianvegan: this.state.vegetarianvegan,
      baking: this.state.baking
    })
      .then(res => {
        console.log(res);
        this.setState({ nanas: res.data, location: "", date: "", italiancuisine: false, southerncuisine: false, hispaniccuisine: false,  vegetarianvegan: false, baking: false })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    if (event.target.type === "checkbox")
    {
      let chkVal = event.target.value;
      if (chkVal === "false")
         chkVal = true;
      else
         chkVal = false;
      this.setState({
        [name] : chkVal
      })
    }   
   else
   {
      this.setState({
        [name]: value
      })
  } 
  };

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <form>
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
              />
              <input type="checkbox" id="italiancuisine" name="italiancuisine" value={this.state.italiancuisine} onChange={this.handleInputChange}/>
              <label for="italiancuisine"> Italian Cuisine</label>
              <input type="checkbox" id="southerncuisine" name="southerncuisine" value={this.state.southerncuisine} onChange={this.handleInputChange}/>
              <label for="southerncuisine"> Southern Cuisine</label>
              <input type="checkbox" id="hispaniccuisine" name="hispaniccuisine" value={this.state.hispaniccuisine} onChange={this.handleInputChange}/>
              <label for="hispaniccuisine"> Hispanic Cuisine</label>
              <input type="checkbox" id="vegetarianvegan" name="vegetarianvegan" value={this.state.vegetarianvegan} onChange={this.handleInputChange}/>
              <label for="vegcuisine"> Vegetarian/Vegan Cuisine</label>
              <input type="checkbox" id="baking" name="baking" value={this.state.baking} onChange={this.handleInputChange}/>
              <label for="baking"> Baking</label>
              <FormBtn
                disabled={!(this.state.location && this.state.date)}
                onClick={this.loadNanas}
              >
              Search
              </FormBtn>
            </form>
        <SearchResults results={this.state.nanas} />
      </Container>
    );
  }
}

export default Search;
