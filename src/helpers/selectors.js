// Input day and state, output array of appointments for the given day
export function getAppointmentsForDay(state, day) {
  const outputArray = [];
  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      for (let appts of stateDay.appointments) {
        outputArray.push(state.appointments[appts]);
      }
    }
  }
  return outputArray;
}

// Input interviewer data and state, returns formatted interview data
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    student: interview.student,
    interviewer: {
      id: interview.interviewer,
      name: state.interviewers[interview.interviewer].name,
      avatar: state.interviewers[interview.interviewer].avatar,
    },
  };
}

// Input day and state, output array of interviewers for that given day
export function getInterviewersForDay(state, day) {
  const outputArray = [];
  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      for (let interviewer of stateDay.interviewers) {
        outputArray.push(state.interviewers[interviewer]);
      }
    }
  }
  return outputArray;
}
