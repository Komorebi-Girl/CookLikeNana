import React from "react";
import "./Landing.css";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Landing = props => (
	<div>
	
		<div className="jumbotron">
		  <h1>Welcome to Cook like Nana!</h1>
			<h3>	Lost college freshmen. Broke Milienials. Stressed out newly weds. When it comes to cooking, a lot of people don't know where to start. 
             That's why we set up Cook With Nana: to help new cooks gain the knowledge to cook like pros, and nothing beats an authentic homemade meal from grandma.	 
						 </h3>
							  <p><a className="btn btn-primary btn-lg" href="/SearchPage/SearchPage" role="button">Search through Cooks</a></p>
		  
		</div>
	</div>
);

export default Landing;