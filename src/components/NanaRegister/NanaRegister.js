import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import "./NanaRegister.css";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class NanaRegister extends Component {
  state = {
		nana: [],
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		location: "",
		profileimage: "",
		youtubelink: "",
		costperhour: "",
		bio: "",
    italiancuisine: false,
    southerncuisine: false,
    hispaniccuisine: false,
    vegetarianvegan: false,
    baking: false
	};
	
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  saveNana = (event) => {
		event.preventDefault();
    API.saveNana({
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			password: this.state.password,
			location: this.state.location,
			profileimage: this.state.profileimage,
			youtubelink: this.state.youtubelink,
			costperhour: this.state.costperhour,
			bio: this.state.bio,
      italiancuisine: this.state.italiancuisine,
      southerncuisine: this.state.southerncuisine,
      hispaniccuisine: this.state.hispaniccuisine,
      vegetarianvegan: this.state.vegetarianvegan,
      baking: this.state.baking
    })
      .then(res => {
				console.log(res);
				this.setState({ nana: res.data});
				this.props.history.push({
          pathname: `/nana/${res.data.profileid}`
			  })
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
        <div className="card">
			<h5 className="card-header">Nana Registration</h5>
			<div className="card-body">
				<form>
				<div className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">First Name</label>
    				<input type="text" className="form-control" id="firstname" name="firstname" onChange={this.handleInputChange}></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Last Name</label>
    				<input type="text" className="form-control" id="lastname" name="lastname" onChange={this.handleInputChange}></input>
				  </div>
				</div>


				<div className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleInputEmail1">Email address</label>
				    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={this.handleInputChange}></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" class="form-control" id="password" name="password" onChange={this.handleInputChange}></input>
				  </div>
				</div>

				<div className="row">
				  <div class="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Location</label>
    				<input type="text" className="form-control" id="location" name="location" onChange={this.handleInputChange}></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Link to Photo</label>
    				<input type="text" className="form-control" id="profileimage" name="profileimage" onChange={this.handleInputChange}></input>
				  </div>
				</div>

				<div className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">YouTube Link</label>
    				<input type="text" className="form-control" id="youtube" name="youtubelink" onChange={this.handleInputChange}></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Rate Per Hour</label>
    				<input type="text" className="form-control" id="costperhour" name="costperhour" onChange={this.handleInputChange}></input>
				  </div>
				</div>


				  <div className="form-group">
				    <label for="exampleFormControlTextarea1">Tell Us About Yourself</label>
				    <textarea className="form-control" id="bio" name="bio" rows="3" onChange={this.handleInputChange}></textarea>
				  </div>

				  <div className="form-group">
				  	<label for="exampleFormControlTextarea1">Cuisine Specialty</label>
				    <div>
						<input type="checkbox" id="italian" name="italiancuisine" value={this.state.italiancuisine} onChange={this.handleInputChange}></input>
				    	<label for="checkbox1">Italian Cuisine</label>
					</div>
					
					<div>
					    <input type="checkbox" id="southern" name="southerncuisine" value={this.state.southerncuisine} onChange={this.handleInputChange}></input>
					    <label for="checkbox2">Southern Cuisine</label>
					</div>

					<div>
					    <input type="checkbox" id="hispanic" name="hispaniccuisine" value={this.state.hispaniccuisine} onChange={this.handleInputChange}></input>
					    <label for="checkbox3">Hispanic Cuisine</label>
					</div>

					<div>
					    <input type="checkbox" id="vegvegan" name="vegetarianvegan" value={this.state.vegetarianvegan} onChange={this.handleInputChange}></input>
					    <label for="checkbox4">Vegetarian/Vegan</label>
					</div>

					<div>
					    <input type="checkbox" id="baking" name="baking" value={this.state.baking} onChange={this.handleInputChange}></input>
					    <label for="checkbox5">Baking</label>
					</div>
				  </div>
				
				<button type="button" className="btn btn-primary" onClick={this.saveNana} >Submit</button>
				</form>
			</div>
		</div>
      </Container>
    );
  }
}

export default withRouter(NanaRegister);