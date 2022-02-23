import React from "react";
import classNames from "classnames";

export default function DayListItem(props) {
  let fullClass = classNames({'.day-list__item--full': !props.spots })
  const setDayVar = () => {
    props.setDay(props.name);
  }
  return (
    <li onClick={setDayVar} className={fullClass}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}
