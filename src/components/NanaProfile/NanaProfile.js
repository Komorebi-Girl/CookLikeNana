import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";
import NanaAvailability from "../../components/NanaAvailability";
import Calendar from "../Calendar";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Parallax, Background } from 'react-parallax';

const styles = {
	fontFamily: 'sans-serif',
textAlign: 'center',
};
const insideStyles = {padding: 2, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', 'text-shadow': '.5px .5px gray'};
const image2 = "https://images.unsplash.com/photo-1513149739851-50f01dfcbd9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e67dcdd3f97daf6de8ce268646535032&auto=format&fit=crop&w=2250&q=80";


class NanaProfile extends Component {
  state = {
		nana: {},
		nanainfo: {},
    firstname: "Rose",
    location: "Somerset, NJ",
    image: "https://c1.staticflickr.com/4/3275/2918869494_7e93a0ec3e_n.jpg",
    specialties: "Italian",
    bio: 'I am what the kids these days call "dope". I make the best chili in town and no one can stop me.  Haters gonna hate. Distinctio praesentium magnam velit inventore optio, dignissimos fuga, ipsum quos vero consequuntur! Voluptate cumque culpa eum nisi!'	
  };

  componentDidMount() {
    Promise.all([API.getNanabyID(this.props.match.params.id), API.grabNanaData()])
      .then(res => {
				console.log(JSON.stringify(res[0]));
        this.setState({
          nana: res[0].data,
          nanainfo:res[1].data 
				});
	  })
		.catch(err => console.log(err));
  } 

  render(){
		let profileAddon=""; 
		console.log("nana = " + JSON.stringify(this.state.nana));
		console.log("nanainfo = " + JSON.stringify(this.state.nanainfo));
		console.log("params = " + this.props.match.params.id);
		console.log("profile id = " + this.state.nanainfo.profileid);
		console.log("nana id =" + this.state.nana.nanaid);
		
		if(this.props.match.params.id == this.state.nanainfo.profileid) 
		{
			profileAddon = <Calendar nanaid={this.props.match.params.id}/>		
		} 
		else if (typeof this.state.nanainfo.profileid != this.state.nana.nanaid) 
		{
			profileAddon = <NanaAvailability results={this.props.match.params.id} />
		}
		else
		{
			profileAddon = "Please login to see Nana's Availability"
		}

    return(	
			<div className="profile" style={{'height': '100vh', 'background-color': '#ffffff'}} >
			
			<Parallax  className="section" bgImage={image2}
			strength={500}>
			<div style={{height: 200}}>
			<div style={insideStyles}>

			</div>
			</div> 
			</Parallax>

			<div className="container">
<Grid>
	<Row>
		<Col s={12} md={4} l={4} style={{'max-width': '290px'}}>
				<div className="thumbnail">
      				<img className="avatar" src={this.state.nana.profileimage} alt="grandma"></img> 
    		</div> 
			</Col>

			<Col s={12} md={8} l={9}>
			<div className="profilebox">
				<h1>{this.state.nana.firstname}</h1>
				<p>{this.state.nana.location}</p>
				<h4>Cooking Specialties:</h4>
				<p>Italian, Southern, Baking</p>
				<h4>About Me:</h4>
				<p>{this.state.nana.bio}</p>
				<h4>Nana's Availability:</h4>
			    {profileAddon}	
				</div>
		</Col>
	</Row>
	</Grid>

	</div>
	</div>
	)}  
};

export default NanaProfile;