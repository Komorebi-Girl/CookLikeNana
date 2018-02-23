import React from "react";
import "./Landing.css";

const Landing = props => (
	<div>
	  	<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    
		    <div className="navbar-header">
		      <a className="navbar-brand" href="/">Log In</a>
		    </div>
		    

		  </div>
		</nav>
		<div className="jumbotron">
		  <h1>Welcome to Cook like Nana!</h1>
		  <a href="#"><h5>Learn About</h5></a>
		  <p><a className="btn btn-primary btn-lg" href="#" role="button">Search for Nanas!</a></p>
		  
		</div>
	</div>
);

export default Landing;