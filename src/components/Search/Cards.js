import React, { Component } from "react";
// import Slider from "react-slick";
import "./Cards.css";
// import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Cards extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  handleClick = nanaid => event => {
    event.preventDefault();
    console.log(this);
    console.log("Nana ID is " + nanaid);
    this.props.router.push({
      pathname: `/nana/${nanaid}`
    });
  };

  render() {
    var settings = {
      centerPadding: "40px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true
    };

    return (
      // <div className="container">
      //    <Slider {...settings}>
      //         {this.props.results.map(result =>
      //         <div>
      //             <div><img src={result.profileimage} onClick={this.handleClick(result.nanaid)}/></div>
      //             <h4>{result.firstname}&nbsp;{result.lastname}</h4>
      //         </div>
      //         )}
      //    </Slider>
      // </div>

      <div className="container">
        <Carousel width={"50%"} showThumbs={false} infiniteLoop={true}>
          {this.props.results.map(result => (
            <div key={result.nanaid} onClick={this.handleClick(result.nanaid)}>
              <img src={result.profileimage} />
              <h4>
                {result.firstname}&nbsp;{result.lastname}
              </h4>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Cards;
