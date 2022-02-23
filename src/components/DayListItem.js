import React from "react";
import classNames from "classnames";

import "./DayListItem.scss";

export default function DayListItem(props) {
  let fullClass = classNames('day-list__item', 
    { 'day-list__item--full': !props.spots },
    { 'day-list__item--selected': props.selected }
    )
  const setDayVar = () => {
    props.onChange(props.name);
  }

  const formatSpots = () => {
    if (props.spots === 0) {
      return 'no spots remaining';
    }
    if (props.spots === 1) {
      return props.spots+ ' spot remaining';
    }
    if (props.spots > 1) {
      return props.spots+' spots remaining';
    }
  }
  
  return (
    <li onClick={setDayVar} selected={props.selected} className={fullClass}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
