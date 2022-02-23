import React from 'react';
import InterviewListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const parsedInterviewerList = props.interviewers.map((element) => 
  <InterviewListItem 
  id={element.id}
  name={element.name}
  avatar={element.avatar}
  selected={(props.interviewer === element.id) ? true : false}
  setInterviewer={props.setInterviewer}
  />)
  
  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
      {parsedInterviewerList}
    </ul>
  </section>
  )
}