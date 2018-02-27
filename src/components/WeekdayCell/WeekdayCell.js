import React, {Component} from "react";
import "./WeekdayCell.css";
import API from "../../utils/API";

class WeekdayCell extends Component{

  state = {
    color: "" 
  }

  componentDidMount(){
    API.findTimeSlot(this.props.day,this.props.thisTime)
    .then(res => {
      if(res.data === null){
        let unavailable = "white"
        this.setState({color: unavailable})
      }
      else{
        let available = "green"
        this.setState({color: available})
      }
    })
  }
  
  trackSelection = () => {
    let displayState; 
    if(this.state.color === "green") {
      API.deleteTimeSlot(this.props.day,this.props.thisTime,this.props.nanaid)
      .then(res => {
        console.log(res);
        displayState = "white"
        this.setState({color: displayState})
      })
    }

    else if(this.state.color === "white") {
      API.createTimeSlot(this.props.day,this.props.thisTime,this.props.nanaid)
      .then(res => {
        console.log(res);
        displayState = "green"
        this.setState({color: displayState})
      })
    }
    // this.props.updateSlots(this.props.name)
  }

  render(){
  return(
    <div className="WeekdayName col-xs-1">
     <span style={{color: this.state.color}} onClick={this.trackSelection}> <i className="fas fa-check check"></i></span>
    </div>
  )}
}

export default WeekdayCell;