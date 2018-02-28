import React from "react";
import ReactDOM from 'react-dom';
import "./Landing.css";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Parallax, Background } from 'react-parallax';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'left',
  };
  const insideStyles = {padding: 2, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
  const image2 = "https://static.pexels.com/photos/414660/pexels-photo-414660.jpeg";

const Section1 = props => (


<div style={styles}>

    <Parallax  className="section" bgImage={image2}
      strength={500}>
      <div style={{height: 500}}>
      <div style={insideStyles}>
      
        <div className="Grid">
        <div className="row">
        <Col s={12} md={4}>
          <h6>Calling all grandmas: We need your help</h6>
            </Col>
            <Col s={12} md={8}>
         <h5> As a cook at Cook With Nana, you 
             can teach new generations of home-chefs while making side-money. Once your profile is created in the sign-up page and your hourly rates and schedules are set, you're ready to 
             meet them and share your cooking wisdom!</h5>
             <p><a className="btn btn-primary btn-lg " href="/nana" role="button">Sign up as a granny</a></p>
        </Col>
        </div>
         <div className="row">
         <Col md={12}>
     
         </Col>
         </div>
      </div>
    </div>
		
     </div> 
    </Parallax>
    </div>
);
export default Section1;