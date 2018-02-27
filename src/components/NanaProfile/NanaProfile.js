import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";
import NanaAvailability from "../../components/NanaAvailability";

class NanaProfile extends Component {	

  state = {
		nana: {},
		nanacalendar: {}
  };

  componentDidMount() {

    API.getNanabyID(this.props.match.params.id)
      .then(res => {
		  this.setState({nana: res.data });
	  })
	  .catch(err => console.log(err));	
  } 

  render(){
    return(	
		<div className="container">
			<div className="row">
				<div class="col-md-4">
					<div class="thumbnail">
								<img src={this.state.nana.profileimage} alt="grandma" className="profilephoto"></img>
					</div>
				</div>
				<div class="col-md-8">
					<h1>{this.state.nana.firstname}&nbsp;{this.state.nana.lastname}</h1>
					<p>{this.state.nana.location}</p>
					<h4>Cooking Specialties:</h4>
					<p>Italian, Southern, Baking</p>
					<h4>About Me:</h4>
					<p>{this.state.nana.bio}</p>
					{/* <button type="button" className="btn btn-primary">Make An Appointment With Me!</button> */}
					<h4>Nana's Availability</h4>
			    <NanaAvailability results={this.state.nana} />		
				</div>		
				
			</div>
	</div>
	)}  
};

export default NanaProfile;