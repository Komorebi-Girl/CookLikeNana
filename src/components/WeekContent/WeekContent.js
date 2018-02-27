import React from "react";
import WeekRow from "../WeekRow/WeekRow";
import TimeSlot from "../TimeSlot/TimeSlot";
import WeekdayCell from "../WeekdayCell/WeekdayCell";

const WeekContent = props => {

  return (
    <WeekRow>
      <TimeSlot>{props.time}</TimeSlot>
      <WeekdayCell nanaid={props.nanaid} updateSlots={props.updateSlots} day={"Sunday"}    thisTime={props.time}  name = {`Sunday ${props.time}`} key={props.id + "_0"}/>
      <WeekdayCell nanaid={props.nanaid} updateSlots={props.updateSlots} day={"Monday"}    thisTime={props.time}  name = {`Monday ${props.time}`} key={props.id + "_1"}/>
      <WeekdayCell nanaid={props.nanaid} updateSlots={props.updateSlots} day={"Tuesday"}   thisTime={props.time}  name = {`Tuesday ${props.time}`}  key={props.id + "_2"}/>
      <WeekdayCell nanaid={props.nanaid} updateSlots={props.updateSlots} day={"Wednesday"} thisTime={props.time}  name = {`Wednesday ${props.time}`}  key={props.id + "_3"}/>
      <WeekdayCell nanaid={props.nanaid} updateSlots={props.updateSlots} day={"Thursday"}  thisTime={props.time}  name = {`Thursday ${props.time}`}  key={props.id + "_4"}/>
      <WeekdayCell nanaid={props.nanaid} updateSlots={props.updateSlots} day={"Friday"}    thisTime={props.time}  name = {`Friday ${props.time}`}  key={props.id + "_5"}/>
      <WeekdayCell nanaid={props.nanaid} updateSlots={props.updateSlots} day={"Saturday"}  thisTime={props.time}  name = {`Saturday ${props.time}`}  key={props.id + "_6"}/>
    </WeekRow>
  );
}

export default WeekContent; 
