import React from 'react';

const SidebarCard = (props) => {
  return (
  <button tripid={props.tripId} onClick={ () => props.getActivities(props.tripId)} className="side-bar-card">
    <label>Location: </label> 
        <br/>
    <label>Country: </label>
  </button>
  );
};

export default SidebarCard;