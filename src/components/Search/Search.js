import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchResults from "../SearchResults";
import { Input, FormBtn } from "../../components/Form";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import "./Search.css";
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
      <div className="searchbox">
  <Grid>
    <Row>
    <Col s={8} md={11}>
        <form>
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
                className="searchbar-main"
              /> 
              </form> </Col>
              <Col s={4} md={1}>
              <FormBtn
                disabled={!(this.state.location && this.state.date)}
                onClick={this.loadNanas}
                button type="button"
              >
              Search
              </FormBtn>
              </Col>
                </Row>
                </Grid>
                <Row>
              <form  style={{'margin': '0 auto'}}>
              <input type="checkbox" style={{'max-width': '20px'}} id="italiancuisine" name="italiancuisine"
               value={this.state.italiancuisine} onChange={this.handleInputChange}/><label for="italiancuisine"> Italian Cuisine</label>
              
              <input type="checkbox" style={{'max-width': '20px'}} id="southerncuisine" name="southerncuisine" value={this.state.southerncuisine} onChange={this.handleInputChange}/>
              <label for="southerncuisine"> Southern Cuisine</label>

              <input type="checkbox" style={{'max-width': '20px'}} id="hispaniccuisine" name="hispaniccuisine" value={this.state.hispaniccuisine} onChange={this.handleInputChange}/>
              <label for="hispaniccuisine"> Hispanic Cuisine</label>

                 <input type="checkbox" style={{'max-width': '20px'}} id="vegetarianvegan" name="vegetarianvegan" value={this.state.vegetarianvegan} onChange={this.handleInputChange}/>
               <label for="vegcuisine"> Vegetarian/Vegan Cuisine</label>

              <input type="checkbox"  style={{'max-width': '20px'}} id="baking" name="baking" value={this.state.baking} onChange={this.handleInputChange}/>
              <label for="baking"> Baking</label>
              
            </form>
         </Row>
        <SearchResults results={this.state.nanas} />
      </div>
    );
  }
}

export default Search;
