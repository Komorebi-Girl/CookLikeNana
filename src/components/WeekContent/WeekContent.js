import React from "react";
import WeekRow from "../WeekRow/WeekRow";
import TimeSlot from "../TimeSlot/TimeSlot";
import WeekdayCell from "../WeekdayCell/WeekdayCell";

const WeekContent = props => {
  return (
    <WeekRow>
      <TimeSlot>{props.time}</TimeSlot>
      <WeekdayCell updateSlots={props.updateSlots} name = {`Sunday ${props.time}`} key={props.id + "_0"}/>
      <WeekdayCell updateSlots={props.updateSlots} name = {`Monday ${props.time}`} key={props.id + "_1"}/>
      <WeekdayCell updateSlots={props.updateSlots} name = {`Tuesday ${props.time}`}  key={props.id + "_2"}/>
      <WeekdayCell updateSlots={props.updateSlots} name = {`Wednesday ${props.time}`}  key={props.id + "_3"}/>
      <WeekdayCell updateSlots={props.updateSlots} name = {`Thursday ${props.time}`}  key={props.id + "_4"}/>
      <WeekdayCell updateSlots={props.updateSlots} name = {`Friday ${props.time}`}  key={props.id + "_5"}/>
      <WeekdayCell updateSlots={props.updateSlots} name = {`Saturday ${props.time}`}  key={props.id + "_6"}/>
    </WeekRow>
  );
}

export default WeekContent; 
