
import React from "react";
import "./Landing.css";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Cover from 'react-video-cover';
import NavBar from "../../components/NavBar/NavBar.js";

const style = {
  width: '100vw',
  height: '500px',
  position: 'relative',

	top: -0,
  left: 0,
  zIndex: -0,
};

		
const Landing = props => (
	<div>
		<NavBar />
				<div style={style} >

  <header className="header" id="header">
  <div className="jumbotron">  
    <div className="skew">
        <div className="header-inner">

 <video  loop id="myVideo" autoPlay>
  <source src="https://www.videvo.net/videvo_files/converted/2015_04/preview/FoodPack1_10_Videvo.mov49703.webm" />
  Your browser does not support HTML5 video.
</video >
        
<div className="content">
    <h1>Welcome to Cook With Nana!</h1> 
			<h4>	Lost college freshmen. Broke Milienials. Stressed out newly weds. When it comes to cooking, a lot of people don't know where to start. 
             That's why we set up Cook With Nana: to help new cooks gain the knowledge to cook like pros, and nothing beats an authentic homemade meal from grandma.	 
						 	</h4>	
               <p><a className="btn btn-primary btn-lg" href="#" role="button">Sign Up Now</a></p>

    {/* <Cover
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
  
	<div className="Container">
	<main class="main">
    <div class="main-container">

      <section-slant>
					<h1>How does it work?</h1>
		 			<h4>Depending on whether you want to sign up as a cook or learner it works a bit differently:</h4>
        </section-slant>
				</div>
			</main>
		</div>
	
		
	</div> 

);

export default Landing;
