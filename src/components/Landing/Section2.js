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
  const image1 = "https://static.pexels.com/photos/8279/muffin.jpg";

const Section2 = props => (
    <div style={styles}>
    <Parallax className="section2"  bgImage={image1}
      strength={500}>
      <div style={{height: 500}}>

     <div style={insideStyles}>
     <div className="Grid">
         <div className="row">
         <Col s={12} md={6} l={4}>
		  <h6>Learn to cook from true experts: Grandmas</h6>
		     </Col>
             <Col s={12} md={6} l={8}>
             <h5 className="sectionbod"> Tired of constant microwaving? No idea where to start on a home-cooked meal? Avoid the hassle of
               endless Googling by signing up to meet a grandma with experience in a cuisine you want to learn more
               about preparing. From baking to traditional Italian food, get a real "taste" of home-cooking while learning
               how to make it happen with a new friend! </h5><p>
             <a className="btn btn-primary btn-lg" href="/user" role="button">Sign up as a learner</a></p>
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

		<div className="section2">
  footer
        </div>
	</div>
);

export default Section2;