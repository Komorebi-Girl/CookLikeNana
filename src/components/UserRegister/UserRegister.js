import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import "./UserRegister.css";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class UserRegister extends Component {
  state = {
		user: [],
		fullname: "",
		email: "",
		password: "",
		address: "",
		profileimage: "",
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
	
  saveUser = (event) => {
		event.preventDefault();
    API.saveUser({
			fullname: this.state.fullname,
			email: this.state.email,
			password: this.state.password,
			address: this.state.address,
			profileimage: this.state.profileimage,
			bio: this.state.bio,
      italiancuisine: this.state.italiancuisine,
      southerncuisine: this.state.southerncuisine,
      hispaniccuisine: this.state.hispaniccuisine,
      vegetarianvegan: this.state.vegetarianvegan,
      baking: this.state.baking
    })
      .then(res => {
				console.log("RESSSSSSSSSSS");
				console.log(res);
        this.props.history.push({
          pathname: `/user/${res.data.profileid}`
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
			<h5 className="card-header">User Registration</h5>
			<div className="card-body">
				<form>
				<div className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Full Name</label>
    				<input type="text" className="form-control" id="fullname" name="fullname"  onChange={this.handleInputChange}></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleInputEmail1">Email</label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  onChange={this.handleInputChange}></input>
				  </div>
				</div>

				<div className="row">
				  <div class="form-group col-md-6">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" class="form-control" id="password" name="password"  onChange={this.handleInputChange}></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Address</label>
    				<input type="text" className="form-control" id="address" name="address"  onChange={this.handleInputChange}></input>
				  </div>
				</div>

				  <div className="form-group">
				    <label for="exampleFormControlSelect1">Link to Photo (Optional)</label>
    				<input type="text" className="form-control" id="photo" name="profileimage"  onChange={this.handleInputChange}></input>
				  </div>

				  <div className="form-group">
				    <label for="exampleFormControlTextarea1">Tell Us About Yourself (Optional)</label>
				    <textarea className="form-control" id="bio" rows="3" name="bio"  onChange={this.handleInputChange}></textarea>
				  </div>

				   <div className="form-group">
				  	<label for="exampleFormControlTextarea1">Cuisine Preference (Optional)</label>
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
				
				<button type="button" className="btn btn-primary" onClick={this.saveUser} >Submit</button>
				</form>
			</div>
		</div>
      </Container>
    );
  }
}

export default withRouter(UserRegister);