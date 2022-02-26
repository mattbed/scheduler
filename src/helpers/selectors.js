export default function getAppointmentsForDay(state, day) {
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