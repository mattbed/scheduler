import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday", 
    days: [],
    appointments: {},
    interviewers: {}
  });

  // used to find the key corresponding to a day of the week
  const findKeyByDay = function(day) {
    for (let key of Object.keys(state.days)){
      if (state.days[key].name === day) {
        return key;
      }
    }
  }

  // Object method to update count of spots
  const updateCount = {
    // Delete method
    delete: function(key) {
      const currentSpots = state.days[key].spots;
      return currentSpots + 1;
    },
    // Update (add) method (takes edit parameter to sort between add/edit interview)
    update: function(key, edit) {
      const currentSpots = state.days[key].spots;
      if (edit === "false") {
        return currentSpots -1;
      } else if (edit === "true") {
        return currentSpots;
      }
    },
  };

  const setDay = day => setState({ ...state, day });


  // Implement deletion of an interview
  function cancelInterview(id) {
    // recreate state appointments element with updated value (null)
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // recreate state days element with updated spots count
    const key = findKeyByDay(state.day);
    const spot = updateCount.delete(key);
    const targetDay = {
      ...state.days[key],
      spots: spot
    } 
    const days = [
      ...state.days,
      ]
    days.splice(key,1,targetDay);
    // delete from api and update state
    return axios.delete(`/api/appointments/${id}`)
      .then((res) => {
        setState({
          ...state,
          appointments,
          days
        })
      })
  }

  // Implement addition of an interview
  function bookInterview(id, interview, edit) {
     // recreate state appointments element with updated value (interview)
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // recreate state days element with updated spots count
    const key = findKeyByDay(state.day);
    const spot = updateCount.update(key, edit);
    const targetDay = {
      ...state.days[key],
      spots: spot
    } 
    const days = [
      ...state.days,
      ]
    days.splice(key,1,targetDay);
    // add to api and update state
    return axios.put(`/api/appointments/${id}`, {interview})
    .then((res) => {
      setState({
        ...state,
        appointments,
        days
      })
      })
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
     })
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  }
}