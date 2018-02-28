import React, { Component } from "react";
import API from "../../utils/API";

class NanaAvailability extends Component {
    
    state = {
        nanacalendar: [],
        calendarchecked: false,
        userprofileid: ""
    };

	componentDidMount() {

        API.grabUserData()
            .then(res => {
                console.log(JSON.stringify(res.data));
                this.setState({userprofileid: res.data.profileid })
            })
            .catch(err => console.log(err));

        API.getNanaCalendar(this.props.results)
            .then(res => {
                console.log(JSON.stringify(res.data));
                this.setState({nanacalendar: res.data })
            })
            .catch(err => console.log(err));	
    } 

    saveData() {
        
        if (this.state.calendarchecked)
        {
            alert("Your Booking has been saved. Enjoy!");
        }
        else
        {
            alert("Please select a day/time before submitting");
        }
    }

    handleChange = (day, time) => (event) => {

        if (event.target.checked)
        {
            this.setState({calendarchecked : true});
            API.saveBooking({
                nanaid: this.props.results,
                userid: this.state.userprofileid,
                day: day, 
                time: time
            })
                .then(res => {
                    console.log(JSON.stringify(res.data));
                })
                .catch(err => console.log(err));
        }
        else if (!event.target.checked)
        {
            this.setState({calendarchecked : false});
            API.deleteBooking({
                nanaid: this.props.results,
                userid: this.state.userprofileid,
                day: day, 
                time: time
            })
                .then(res => {
                    console.log(JSON.stringify(res.data));
                })
                .catch(err => console.log(err));
        }
    };
    
    render() {
        return (
            <div className="container">           
                {this.state.nanacalendar.map(result =>
                    <div>
                        <input type="checkbox" id="calendarcheckbox" name="calendarcheckbox" value={result.id} onChange={this.handleChange(result.availableday, result.availabletime)}></input>
                        <label for="nanacalendar">&nbsp;&nbsp;{result.availableday}&nbsp;&nbsp;{result.availabletime}</label>
                    </div>   
                )}
                <div className="container"></div>	  
                <button type="button" className="btn btn-primary" onClick={this.saveData.bind(this)} >Save</button>
            </div>   
          );
    }
};

export default NanaAvailability;


  