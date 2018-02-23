import React from "react";
import "./Landing.css";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

const Landing = props => (
	<div>
  <header className="header" id="header">
    <div className="skew">
        <div className="header-inner">

<div className="jumbotron">
		  <h1>Welcome to Cook like Nana!</h1>
			<h4>	Lost college freshmen. Broke Milienials. Stressed out newly weds. When it comes to cooking, a lot of people don't know where to start. 
             That's why we set up Cook With Nana: to help new cooks gain the knowledge to cook like pros, and nothing beats an authentic homemade meal from grandma.	 
						 </h4>
</div>

	</div>
    </div>
  </header>
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