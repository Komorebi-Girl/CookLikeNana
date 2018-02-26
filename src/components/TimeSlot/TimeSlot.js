import React from "react";
import "./TimeSlot.css"

const TimeSlot = (props) => (
  <div className="TimeSlot col-xs-4">
    <h6>{props.children}</h6>
  </div>
)

export default TimeSlot;