import React from "react";
import classNames from "classnames";

import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const fullClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li onClick={props.setInterviewer} className={fullClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
        data-testid="interviewer-clickable-image"
      />
      {props.selected ? props.name : ""}
    </li>
  );
}
