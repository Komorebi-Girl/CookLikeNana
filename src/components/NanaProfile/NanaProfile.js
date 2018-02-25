import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";

class NanaProfile extends Component {
  state = {
    firstname: "Rose",
    location: "Somerset, NJ",
    image: "https://c1.staticflickr.com/4/3275/2918869494_7e93a0ec3e_n.jpg",
    specialties: "Italian",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minima, repudiandae ex explicabo distinctio praesentium magnam velit inventore optio, dignissimos fuga, ipsum quos vero consequuntur! Voluptate cumque culpa eum nisi!"

  }

 componentDidMount(){
   API.grabNanaData().then(res => this.setState({firstname: res.data.firstname, location: res.data.location, bio: res.data.bio, image: res.data.profileimage}))
 } 

  render(){
    return(	<div className="container">
		<div className="row">

			<div class="col-md-4">
				<div class="thumbnail">
      				<img src={this.state.image} alt="grandma"></img>
    		</div>
		  </div>

			<div class="col-md-8">
				<h1>{this.state.firstname}</h1>
				<p>{this.state.location}</p>
				<h4>Cooking Specialties:</h4>
				<p>{this.state.specialties}</p>
				<h4>About Me:</h4>
				<p>{this.state.bio}</p>
				<button type="button" className="btn btn-primary">Make An Appointment With Me!</button>
			</div>

		</div>
	</div>)}  
};

export default NanaProfile;