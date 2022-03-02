import React, { useState } from 'react';

import Button from "../Button.js";
import InterviewerList from "../InterviewerList.js";


export default function Form(props) {
  const [error, setError] = useState("");

  const reset = function() {
    setStudent("");
    setInterviewer("");
  }

  const cancel = function() {
    reset();
    props.onCancel();
  }

  const validate = function() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(student, interviewer, props.edit);
  }

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        value={student}
        placeholder="Enter Student Name"
        onChange={(event) => setStudent(event.target.value)}
        data-testid="student-name-input"
      />
      <section className="appointment__validation">{error}</section>
    </form>
    <InterviewerList 
      interviewers={props.interviewers}
      onChange={(id) => setInterviewer(id)}
      value={interviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={validate}>Save</Button>
    </section>
  </section>
</main>
  )
}