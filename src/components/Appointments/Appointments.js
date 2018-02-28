import React, { Component } from "react";
import API from "../../utils/API";

class Appointments extends Component {
    
    state = {
        bookings: []
    };

	componentDidMount() {

        API.getBookings(this.props.results)
            .then(res => {
                console.log(JSON.stringify(res.data));
                this.setState({bookings: res.data })
            })
            .catch(err => console.log(err));	
    } 
    
    render() {
        return (
            <div className="container">           
                {this.state.bookings.map(result =>
                    <div>
                        <label for="nanacalendar">&nbsp;&nbsp;{result.day}&nbsp;&nbsp;{result.time}</label>
                    </div>   
                )}
            </div>   
          );
    }
};

export default Appointments;


  