import React, { Component } from "react";
import API from "../../utils/API";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class SmallForm extends Component{
  state = {
    result: {}
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const yourEmail = this.state.email;
    const yourPassword = this.state.password;
    API.checkLogin(yourEmail, yourPassword)
    .then(({ data }) => {
      console.log(data);
      console.log(this.props)
      if(data.usertype === "2"){
        this.props.history.push({
          pathname: `/userprofile/${data.id}`
        })
      }
      else if (data.usertype === "1"){
        this.props.history.push({
          pathname: `/nanaprofile/${data.id}`
        })   
      }
    })
    .catch(err => {
      console.log('Error: ', err);
    });
  };

  render() {
    console.log(this.props);
    return (
    <form action="/api/signup" method="post">
      <div>Email</div>
      <input type="text" name="email" onChange={this.handleInputChange}></input>
      <div>Password</div>  
      <input type="text" name="password" onChange={this.handleInputChange}></input>
      <input type="submit" value="Submit" onClick={this.handleFormSubmit}></input>
    </form>)}  
};





export default withRouter(SmallForm);
