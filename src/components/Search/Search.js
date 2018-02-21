import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
// import SearchResults from "../SearchResults";
import { Input, FormBtn } from "../../components/Form";

class Search extends Component {
  state = {
    nanas: [],
    location: "",
    date: "",
    italiancuisine: "",
    southerncuisine: "",
    hispaniccuisine: "",
    vegcuisine: "",
    baking: ""
  };

  loadNanas = (location, date, italiancuisine, southerncuisine, hispaniccuisine, vegcuisine, baking) => {
    API.getNanas(location, date, italiancuisine, southerncuisine, hispaniccuisine, vegcuisine, baking)
      .then(res =>
        this.setState({ nanas: res.data, location: "", date: "", cuisine: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
              <input type="checkbox" id="italiancuisine" name="italiancuisine" onChange={this.handleInputChange}/>
              <label for="italiancuisine"> Italian Cuisine</label>
              <input type="checkbox" id="southerncuisine" name="southerncuisine" onChange={this.handleInputChange}/>
              <label for="southerncuisine"> Southern Cuisine</label>
              <input type="checkbox" id="hispaniccuisine" name="hispaniccuisine" onChange={this.handleInputChange}/>
              <label for="hispaniccuisine"> Hispanic Cuisine</label>
              <input type="checkbox" id="vegcuisine" name="vegcuisine" onChange={this.handleInputChange}/>
              <label for="vegcuisine"> Vegetarian/Vegan Cuisine</label>
              <input type="checkbox" id="baking" name="baking" onChange={this.handleInputChange}/>
              <label for="baking"> Baking</label>
              <FormBtn
                disabled={!(this.state.location && this.state.date)}
                onClick={() => this.loadNanas(this.state.location, this.state.date, this.state.italiancuisine, this.state.southerncuisine, this.state.hispaniccuisine, this.state.vegcuisine, this.state.baking)}
              >
              Search
              </FormBtn>
            </form>
        {/* <SearchResults results={this.state.nanas} /> */}
      </Container>
    );
  }
}

export default Search;
