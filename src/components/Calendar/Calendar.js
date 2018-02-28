import React, {Component} from "react";
import WeekdayName from "../WeekdayName";
import WeekRow from "../WeekRow";
import TimeSlot from "../TimeSlot";
import WeekContent from "../WeekContent";



class Calendar extends Component {

  constructor(props){
    super(props)
    this.bookedSlot = [];
  }

  updateSlots = (chosenSlot) => {
    this.bookedSlot.push(chosenSlot)
    console.log(this.bookedSlot)
  }  
  render (){
    return (<div className="container">
    <WeekRow>
      <TimeSlot>Time Slot</TimeSlot>
      <WeekdayName>S</WeekdayName>
      <WeekdayName>M</WeekdayName>
      <WeekdayName>T</WeekdayName>
      <WeekdayName>W</WeekdayName>
      <WeekdayName>Th</WeekdayName>
      <WeekdayName>F</WeekdayName>
      <WeekdayName>Sa</WeekdayName>
    </WeekRow>
    <WeekContent nanaid={this.props.nanaid} time="9am - 10am" id="row1" updateSlots={this.updateSlots}/>
    <WeekContent nanaid={this.props.nanaid} time="10am -11am" id="row2" updateSlots={this.updateSlots}/>
    <WeekContent nanaid={this.props.nanaid} time="11am -12pm" id="row3" updateSlots={this.updateSlots}/>
    <WeekContent nanaid={this.props.nanaid} time="12pm - 1pm" id="row4" updateSlots={this.updateSlots}/>
    <WeekContent nanaid={this.props.nanaid} time="1pm - 2pm" id="row5" updateSlots={this.updateSlots}/>
    <WeekContent nanaid={this.props.nanaid} time="2pm - 3pm" id="row6" updateSlots={this.updateSlots}/>
    <WeekContent nanaid={this.props.nanaid} time="3pm - 4pm" id="row7" updateSlots={this.updateSlots}/>
    <WeekContent nanaid={this.props.nanaid} time="4pm - 5pm" id="row8" updateSlots={this.updateSlots}/>
 </div>   
)}
}

export default Calendar;
