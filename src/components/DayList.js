import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  const days = props.days;
  const parseDayList = days.map((element) => 
  <DayListItem 
  key={element.id}
  name={element.name}
  spots={element.spots}
  selected={(props.day === element.name) ? true : false}
  setDay={props.setDay}
  />)
  
  return (
    <ul>
      {parseDayList}
    </ul>
  )
};