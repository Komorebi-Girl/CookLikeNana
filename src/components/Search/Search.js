import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import { Input, FormBtn } from "../../components/Form";
import Cards from "./Cards";

class Search extends Component {
  state = {
    nanas: [],
    location: "",
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
        this.setState({ nanas: res.data, location: "", italiancuisine: false, southerncuisine: false, hispaniccuisine: false,  vegetarianvegan: false, baking: false })
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
      <div className="card-body">
      <div className="card">
      <div className="card-body">
      <Container style={{ maxWidth: "90%" }}>
        
        <div className="row">


				  <div className="form-group col-md-6 offset-md-3">


              <Input type="text"
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (Required)"
              />
          </div>
        </div>

        <div className="row">  

          <div className="form-group col-md-12 text-center">
              <input type="checkbox" id="italiancuisine" name="italiancuisine" value={this.state.italiancuisine} onChange={this.handleInputChange}/>
              <label for="italiancuisine">&nbsp;Italian Cuisine&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" id="southerncuisine" name="southerncuisine" value={this.state.southerncuisine} onChange={this.handleInputChange}/>
              <label for="southerncuisine">&nbsp;Southern Cuisine&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" id="hispaniccuisine" name="hispaniccuisine" value={this.state.hispaniccuisine} onChange={this.handleInputChange}/>
              <label for="hispaniccuisine">&nbsp;Hispanic Cuisine&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" id="vegetarianvegan" name="vegetarianvegan" value={this.state.vegetarianvegan} onChange={this.handleInputChange}/>
              <label for="vegcuisine">&nbsp;Vegetarian/Vegan Cuisine&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" id="baking" name="baking" value={this.state.baking} onChange={this.handleInputChange}/>
              <label for="baking">&nbsp;Baking</label>
          </div>
				</div> 

        <div className="row"> 
          <div class="col-md-12 text-center">   
            <button type="button" className="btn btn-success" disabled={!(this.state.location)} onClick={this.loadNanas} >Search</button>
          </div>
        </div>
        
        <div className="container" style={{height:"50px"}}></div>	  
        <div id="container">
          <Cards results={this.state.nanas} />
        </div>
    </Container>
    </div>
    </div>
    </div>
    );
  }
}

export default Search;
