import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

export default (props) => ( 
  <Carousel axis="horizontal" showThumbs={true} showArrows={true}>
    {props.results.map(result =>
      <div className="container text-centered" style={{height:"300px", width:"400px"}}>
        <img alt="Profile" src={result.profileimage} />
         <p className="legend">{result.firstname}&nbsp;{result.lastname}</p>
      </div>
    )}   
  </Carousel>
);


  