import React, {Component} from "react";
import API from "../../utils/API";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
//style
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import {Input} from 'semantic-ui-react';
import "./SmallForm.css";


//============
class SmallForm extends Component {
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
    this.setState({[name]: value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const yourEmail = this.state.email;
    const yourPassword = this.state.password;
    API.checkLogin(yourEmail, yourPassword)
    .then(({ data }) => {
      console.log(data);
      console.log(this.props)
      if(data.usertype == "2"){
        this.props.history.push({
          pathname: `/user/${data.profileid}`
        })
      }
      else if (data.usertype == "1"){
        this.props.history.push({
          pathname: `/nana/${data.profileid}`
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


<div className="login" style={{'height': '100vh'}} > <br></br>


      <div className="login-bg">
        <div className="Panel">
          <form action="/api/signup" method="post">
            <div>Email</div>

            <Input type="text" name="email" id="password" onChange={this.handleInputChange}></Input>
            <div>Password</div> 
            
            <Input type="password" name="password" onChange={this.handleInputChange}></Input>
            <br></br>
            <input
              className="btn"
              id="login-btn"
              type="submit"
              value="Submit"
              onClick={this.handleFormSubmit}
              style={{
              'text-align': 'center',
              'width': '100%'
            }}></input>
            
          </form>
         
        </div>
        <br></br>
        Don't have an account yet? <a href="/">Sign up as a learner
        </a> OR <a href="/">Sign up as a Granny
        </a>

      </div>
      </div>
    )
  }
};

export default withRouter(SmallForm);
