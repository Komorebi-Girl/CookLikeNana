import React from "react";
import "./ApptCard.css";

const ApptCard = props => (
	<div className="container">
		<div className="row">
			<div className="col-md-4 profile-photo">
			  
			</div>
			<div className="col-md-3">
			    <div className="content">
			      <strong>Name:</strong> {props.name || "Rose"}
			      <br></br>
			      <strong>Date:</strong> {props.date || "March 1, 2018"}
			      <br></br>
			      <strong>Time:</strong> {props.time || "1 - 4 PM"}
			      <br></br>
			       
			      <button type="button" className="btn btn-primary">Reschedule</button>
			    </div>
			</div>

		</div>
	</div>
);

export default ApptCard;