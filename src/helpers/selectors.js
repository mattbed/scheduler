export function getAppointmentsForDay(state, day) {
  const outputArray = []
  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      for (let appts of stateDay.appointments) {
        outputArray.push(state.appointments[appts]);
      }
    }
  }
  return outputArray;
};

export function getInterview(state, interview) {
  if (!interview) { return null }
  return {
    student: interview.student,
    interviewer: {
    id: interview.interviewer,
    name: state.interviewers[interview.interviewer].name,
    avatar: state.interviewers[interview.interviewer].avatar
    }
  }
};