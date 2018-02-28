
import React from "react";
import "./Landing.css";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Cover from 'react-video-cover';
import Col from 'react-bootstrap/lib/Col';

const style = {
  width: '100vw',
  height: '500px',
  position: 'relative',
  background: '-moz-linear-gradient(45deg, rgba(174,87,179,1) 0%, rgba(228,155,235,1) 40%, rgba(255,213,158,1) 100%)',
  background: '-webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(174,87,179,1)), color-stop(40%, rgba(228,155,235,1)), color-stop(100%, rgba(255,213,158,1)))',
  top: -8,
  left: 0,
  zIndex: -0,
};


const Landing = props => (
<<<<<<< HEAD
	<div>
		<div style={style}>
=======
  <div>
    <div style={style} >
>>>>>>> a74ff7f2ea332bb645a54bcb71a5c2d0d3a33c71

      <header className="header" id="header">
        <div className="jumbotron">
          <div className="skew">
            <div className="header-inner">

              <video loop id="myVideo" autoPlay>
                <source src="https://www.videvo.net/videvo_files/converted/2014_11/preview/Baking_Cookies_Videvo.mp450092.webm" />
                Your browser does not support HTML5 video.
</video >
<<<<<<< HEAD
        
<div className="content-landing">
  <Grid style={{'background-color': 'transparent', 'color': 'white'}}>
    <Row>
    <Col s={12} md={1}></Col>
      <Col s={12} md={10}>

    <h1>Welcome to Cook With Nana!</h1> 
			<h5>	Lost college freshmen. Broke Milienials. Stressed out newly weds. When it comes to cooking, a lot of people don't know where to start. 
             That's why we set up Cook With Nana: to help new cooks gain the knowledge to cook like pros, and nothing beats an authentic homemade meal from grandma.	 
						 	</h5>	<br></br>
               <form className="form-inline my-2 my-lg-0"  style={{'margin-left': "300px"}}>
         
	      <button className="btn btn-outline-success my-2 my-sm-0" style={{'background-color': "white"}}  >Browse for Appointments</button>
	    </form>
    </Col> 
    <Col s={12} md={1}></Col>
    </Row>
    </Grid> 
    {/* <Cover
=======

              <div className="content-landing">
                <Grid style={{ 'background-color': 'transparent', 'color': 'white' }}>
                  <Row>
                    <Col s={12} md={1}></Col>
                    <Col s={12} md={10}>
                      <h1 className="mainHeader">Welcome to Cook With Nana!</h1>
                      <h3 className="summary">Clueless college freshmen. Broke Millenials. Stressed out newlyweds.</h3>
                        <h4> When it comes to cooking, a lot of people don't know where to start.That's why we set up Cook With Nana: to help newbies learn how to cook like the pros. Since nothing beats an authentic homemade meal, who better to cook with than Nana?</h4>
						 		<br></br>
                      <form className="form-inline my-2 my-lg-0" style={{ 'margin-left': "300px" }}>
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Browse for Cooks" aria-label="Search" style={{
                          'background-color': "transparent",
                          'color': "white"
                        }}></input> */}
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" style={{ 'background-color': "white", "text-align": "center" }} type="submit">Find Nanas In Your Area</button> */}
                        <a className="btn btn-outline-success my-2 my-sm-0" href="/nanas" role="button">Find Nanas In Your Area</a>
                      </form>
                    </Col>
                    <Col s={12} md={1}></Col>
                  </Row>
                </Grid>
                {/* <Cover
>>>>>>> a74ff7f2ea332bb645a54bcb71a5c2d0d3a33c71
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}

        >
      	
               </Cover> */}
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>

    <main class="main">
      <div class="main-container">

        <section-slant>
          <h2>How does it work?</h2>
          <h4>Depending on whether you want to sign up as a cook or learner it works a bit differently:</h4>
        </section-slant>
      </div>
    </main>


  </div>

);

export default Landing;
