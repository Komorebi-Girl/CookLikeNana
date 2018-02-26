import React, { Component } from "react";
import Slider from "react-slick";
import "./Cards.css";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class Cards extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    handleClick = (nanaid) => (event) => {
        event.preventDefault();   
        console.log("Nana ID is " + nanaid);
        // browserHistory.push("/nana/" + nanaid);
        this.props.history.push({
            pathname: `/nana/${nanaid}`
        });
    }    

    render() {

        var settings = {
            centerPadding: '40px',
            dots: true, 
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true
        };

        return (
            <div className="container">
               <Slider {...settings}>
                    {this.props.results.map(result =>
                    <div>
                        <div><img src={result.profileimage} onClick={this.handleClick(result.nanaid)}/></div>
                        <h4>{result.firstname}&nbsp;{result.lastname}</h4>
                    </div>    
                    )}
               </Slider>
            </div>   
          );
    }
};

export default withRouter(Cards);


  