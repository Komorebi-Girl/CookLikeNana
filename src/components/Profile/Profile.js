import React from "react";
import "./Profile.css";

const Profile = props => (
	<div className="container">
		<div className="row">
			<div class="col-md-4">
				<div class="thumbnail">
      				<img src="https://c1.staticflickr.com/4/3275/2918869494_7e93a0ec3e_n.jpg" alt="grandma"></img>
    			</div>


			</div>
			<div class="col-md-8">
				<h1>{props.firstname || "Rose"}</h1>
				<p>Somerset, NJ</p>
				<h4>Cooking Specialties:</h4>
				<p>{props.specialties || "Italian"}</p>
				<h4>About Me:</h4>
				<p>{props.bio || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minima, repudiandae ex explicabo distinctio praesentium magnam velit inventore optio, dignissimos fuga, ipsum quos vero consequuntur! Voluptate cumque culpa eum nisi!"}</p>
				<button type="button" className="btn btn-primary">Make An Appointment With Me!</button>

			</div>


		</div>

	</div>
);

export default Profile;