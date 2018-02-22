import React, { Component } from "react";
import API from "../../utils/API";

class SmallForm extends Component{
  state = {
    result: {}
  };

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
    API.signUp(yourEmail, yourPassword);
  };

  render() {
    return (
    <form action="/api/signup" method="post">
      <div>Email</div>
      <input type="text" name="email" onChange={this.handleInputChange}></input>
      <div>Password</div>  
      <input type="text" name="password" onChange={this.handleInputChange}></input>
      <input type="submit" value="Submit" onClick={this.handleFormSubmit}></input>
    </form>)}  
};





export default SmallForm;
