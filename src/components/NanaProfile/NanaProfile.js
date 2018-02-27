import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";
import Calendar from "../Calendar"
import NanaAvailability from "../../components/NanaAvailability";

class NanaProfile extends Component {	
  state = {
    firstname: "Rose",
    location: "Somerset, NJ",
    image: "https://c1.staticflickr.com/4/3275/2918869494_7e93a0ec3e_n.jpg",
    specialties: "Italian",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minima, repudiandae ex explicabo distinctio praesentium magnam velit inventore optio, dignissimos fuga, ipsum quos vero consequuntur! Voluptate cumque culpa eum nisi!",
		nana: {},
    nanacalendar: {},
    nanainfo: ""
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

// renderSelectView(){
//   API.getNanaData().then(res => {
//     if(res.data === null){
//     return (<div className="container">
// 			<div className="row">
// 				<div class="col-md-4">
// 					<div class="thumbnail">
// 								<img src={this.state.nana.profileimage} alt="grandma" className="profilephoto"></img>
// 					</div>
// 				</div>
// 				<div class="col-md-8">
// 					<h1>{this.state.nana.firstname}&nbsp;{this.state.nana.lastname}</h1>
// 					<p>{this.state.nana.location}</p>
// 					<h4>Cooking Specialties:</h4>
// 					<p>Italian, Southern, Baking</p>
// 					<h4>About Me:</h4>
// 					<p>{this.state.nana.bio}</p>
// 					<h4>Nana's Availability:</h4>
// 			    <NanaAvailability results={this.props.match.params.id} />		
// 				</div>		
				
// 			</div>
//   </div>)}
  
//   else {
//    return (<div className="container">
// 		<div className="row">

// 			<div className="col-md-4">
// 				<div className="thumbnail">
//       		<img src={this.state.image} alt="grandma"></img>
//     		</div>
// 		  </div>

// 			<div className="col-md-8">
// 				<h1>{this.state.firstname}</h1>
// 				<p>{this.state.location}</p>
// 				<h4>Cooking Specialties:</h4>
// 				<p>{this.state.specialties}</p>
// 				<h4>About Me:</h4>
// 				<p>{this.state.bio}</p>
// 				<button type="button" className="btn btn-primary">Make An Appointment With Me!</button>
// 			</div>

//     </div>

//     <div className="row">
//       <div className="col-md-8">
//         <Calendar nanaid={this.props.match.params.id}/>
//       </div>
//     </div>
    
//  </div>)}          
//   })
// }}

  render(){
    let profileAddon; 
    if(this.state.nanainfo === null) {
      profileAddon = <NanaAvailability results={this.props.match.params.id} />		
    } else {
      profileAddon = <Calendar nanaid={this.props.match.params.id}/>
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
  </div>)};
}

export default NanaProfile;