import React from "react";
import "./WeekdayName.css"

const WeekdayName = (props) => (
  <div className="WeekdayName col-xs-1">
    <h1>{props.children}</h1>
  </div>
)

export default WeekdayName;