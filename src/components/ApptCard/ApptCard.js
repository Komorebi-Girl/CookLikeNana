import React from "react";
import "./ApptCard.css";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Parallax, Background } from 'react-parallax';

const styles = {
    fontFamily: 'sans-serif',
	textAlign: 'center',
  };
  const insideStyles = {padding: 2, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', 'text-shadow': '.5px .5px gray'};
  const image2 = "https://images.unsplash.com/photo-1465808029961-255e8fccc37d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f357b8106dfd71412ffa8f11c9cdde3a&auto=format&fit=crop&w=1650&q=80";

const ApptCard = props => (
	<div className="apptcard" style={{'height': '100vh', 'background-color': '#ff9d99'}} >
	<Parallax  className="section" bgImage={image2}
	strength={500}>
	<div style={{height: 300}}>
	<div style={insideStyles}>
		<h1>Upcoming Appointments</h1>
  </div>
   </div> 
  </Parallax>

	<Grid style={{'margin-top':' 10px'}} >

		<Row>
        <Col s={6} md={4}>
			
				<div className="apptbox">
				<div className="profile-photo">
			</div>
			      <strong>You're meeting with:</strong> {props.name || "Rose"}
			      <br></br>
			      <strong>Date:</strong> {props.date || "March 1, 2018"}
			      <br></br>
			      <strong>Time:</strong> {props.time || "1 - 4 PM"}
			      <br></br>
			       <hr></hr>
			      <button type="button" className="btn btn-primary">Reschedule</button>
			</div>
	
		</Col>
		<Col s={6} md={4}>
			
			<div className="apptbox">
			<div className="profile-photo">
		</div>
			  <strong>You're meeting with:</strong> {props.name || "Nancy"}
			  <br></br>
			  <strong>Date:</strong> {props.date || "March 5, 2018"}
			  <br></br>
			  <strong>Time:</strong> {props.time || "2 - 3 PM"}
			  <br></br>
			   <hr></hr>
			  <button type="button" className="btn btn-primary">Reschedule</button>
		</div>

	</Col>
	<Col s={6} md={4}>
			
			<div className="apptbox">
			<div className="profile-photo">
		</div>
			  <strong>You're meeting with:</strong> {props.name || "Sophia"}
			  <br></br>
			  <strong>Date:</strong> {props.date || "March 28, 2018"}
			  <br></br>
			  <strong>Time:</strong> {props.time || "1 - 4 PM"}
			  <br></br>
			   <hr></hr>
			  <button type="button" className="btn btn-primary">Reschedule</button>
		</div>

	</Col>
		</Row>
		</Grid>

	</div>
);

export default ApptCard;