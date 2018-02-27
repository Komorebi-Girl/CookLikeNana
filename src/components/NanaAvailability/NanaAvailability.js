import React, { Component } from "react";
import API from "../../utils/API";

class NanaAvailability extends Component {
    
    state = {
		nanacalendar: []
    };

	componentDidMount() {

        // API.getNanaCalendar(this.props.results.nanaid)
		API.getNanaCalendar(1)
            .then(res => {
                console.log(JSON.stringify(res.data));
                this.setState({nanacalendar: res.data })
            })
            .catch(err => console.log(err));	
    } 

    render() {
        return (
            <div className="container">           
                {this.state.nanacalendar.map(result =>
                    <div>
                        <input type="checkbox" id="nanacalendar" name="nanacalendar" value={result.id}></input>
                        <label for="nanacalendar">&nbsp;&nbsp;{result.availableday}&nbsp;&nbsp;{result.availabletime}</label>
                    </div>   
                )}
                <div className="container" style={{height:"20px"}}></div>	  
                <button type="button" className="btn btn-primary" onClick={this.saveNana} >Save</button>
            </div>   
          );
    }
};

export default NanaAvailability;


  