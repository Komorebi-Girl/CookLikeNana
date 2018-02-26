import React, {Component} from "react";
import "./WeekdayCell.css"

class WeekdayCell extends Component{

  state = {
    color: "white", 
  }

  trackSelection = () => {
    let displayState;
    displayState = "green"
    this.props.updateSlots(this.props.name)
    this.setState({color: displayState})
  }

  render(){
  return(
    <div className="WeekdayName col-xs-1">
      <span className="glyphicon glyphicon-ok align-center check" style={{color: this.state.color}} onClick={() => this.trackSelection(this.props.id)} aria-hidden="true"></span>
    </div>
  )}
}

export default WeekdayCell;