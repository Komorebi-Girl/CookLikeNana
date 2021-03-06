import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";
import Appointments from "../../components/Appointments";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import { Parallax, Background } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  padding: 2,
  "background-position": "center",
  position: "absolute",
  top: "-20px",
  left: "50%",
  transform: "translate(-50%,-50%)",
  "text-shadow": ".5px .5px gray"
};
const image2 =
  "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?ixlib=rb-0.3.5&s=669cc6e44711be97f33c3d0415915aa9&auto=format&fit=crop&w=1650&q=80";

class UserProfile extends Component {
  state = {
    user: {},
    booking: {},
    // TESTING
    fullname: "The-Real-Guy-Fieri",
    location: "Flavortown, FT",
    image:
      "https://cdn-images-1.medium.com/max/2000/1*7AgUOXVfaxKP-WyTEU_Nhw.jpeg",
    preferences: "Everything",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minima, repudiandae ex explicabo distinctio praesentium magnam velit inventore optio, dignissimos fuga, ipsum quos vero consequuntur! Voluptate cumque culpa eum nisi!"
  };

  componentDidMount() {
    API.getUserbyID(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div
        className="profile"
        style={{ height: "100vh", "background-color": "#ffffff" }}
      >
        <Parallax className="section" bgImage={image2} strength={500}>
          <div style={{ height: 200 }}>
            <div style={insideStyles} />
          </div>
        </Parallax>
        <div className="container">
          <Grid>
            <Row>
              <Col s={12} md={4} l={4} style={{ "max-width": "300px" }}>
                <div className="thumbnail">
                  <img
                    className="avatar"
                    src={this.state.user.profileimage}
                    alt="user"
                    style={{ "background-image": "center" }}
                  />
                </div>
              </Col>

              <Col s={12} md={8} l={9}>
                <div className="profilebox">
                  <h1>{this.state.user.fullname}</h1>
                  <p>{this.state.user.location}</p>
                  <h4>Cuisine Preferences:</h4>
                  <p>Italian, Southern, Baking</p>
                  <h4>About Me:</h4>
                  <p>{this.state.user.bio}</p>
                  <h4>Your Appointments:</h4>
                  <Appointments results={this.props.match.params.id} />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default UserProfile;
