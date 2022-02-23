import React from 'react';
import classNames from "classnames";

import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  const setInterviewerVar = () => {
    props.setInterviewer(props.id);
  }

  const fullClass = classNames("interviewers__item", {"interviewers__item--selected": props.selected})

return (
<li onClick={setInterviewerVar} className={fullClass}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.selected ? props.name : ""}
</li>
)
}