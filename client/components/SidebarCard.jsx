import React from 'react';

const SidebarCard = (props) => {
  const { location, country } = props;
  return (
  <button tripid={props.tripId} onClick={ () => props.getActivities(props.tripId)} className="side-bar-card">
    <label>Location: {location}</label> 
        <br/>
    <label>Country: {country}</label>
  </button>
  );
};

export default SidebarCard;