import React from 'react';
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const parsedInterviewerList = props.interviewers.map((element) => 
  <InterviewerListItem 
  key={element.id}
  name={element.name}
  avatar={element.avatar}
  selected={(props.value === element.id) ? true : false}
  setInterviewer={() => props.onChange(element.id)}
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