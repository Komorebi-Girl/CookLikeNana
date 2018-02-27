import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";

class UserProfile extends Component {
	
	state = {
    user: {}
  };

 componentDidMount(){
		API.getUserbyID(this.props.match.params.id)
		.then(res => this.setState({user: res.data }))
		.catch(err => console.log(err));
 } 

  render(){
    return(	<div className="container">
		<div className="row">

			<div class="col-md-4">
				<div class="thumbnail">
      				<img src={this.state.user.profileimage} alt="user" className="profilephoto"></img>
    		</div>
		  </div>

			<div class="col-md-8">
				<h1>{this.state.user.fullname}</h1>
				<p>{this.state.user.location}</p>
				<h4>Cuisine Preferences:</h4>
				<p>Italian, Southern, Baking</p>
				<h4>About Me:</h4>
				<p>{this.state.user.bio}</p>
			</div>

		</div>
	</div>)}  
};

export default UserProfile;