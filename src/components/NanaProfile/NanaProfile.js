import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";
import NanaAvailability from "../../components/NanaAvailability";
import Calendar from "../Calendar";

class NanaProfile extends Component {	

  state = {
		nana: {},
		nanainfo: {}
  };

  componentDidMount() {
    Promise.all([API.getNanabyID(this.props.match.params.id), API.grabNanaData()])
      .then(res => {
        this.setState({
          nana: res[0].data,
          nanainfo:res[1].data 
        });
	  })
		.catch(err => console.log(err));
  } 

  render(){
		let profileAddon=""; 
		alert("params = " + this.props.match.params.id);
		alert("profile id = " + this.state.nanainfo.profileid);
		alert("nana id = " + this.state.nana.nanaid);
		if(this.props.match.params.id == this.state.nanainfo.profileid) 
		{
			profileAddon = <Calendar nanaid={this.props.match.params.id}/>		
		} 
		else if (typeof this.state.nana.nanaid === 'undefined') 
		{
			profileAddon = <NanaAvailability results={this.props.match.params.id} />
		}
		else
		{
			profileAddon = "Please login to see Nana's Availability"
		}

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
					<h4>Nana's Availability:</h4>
			    {profileAddon}	
				</div>		
				
			</div>
	</div>
	)}  
};

export default NanaProfile;