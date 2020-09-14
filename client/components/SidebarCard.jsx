import React from 'react';

const SidebarCard = (props) => {
  const { tripId, location, country, getActivities } = props;
  return (
    <button
      type="button"
      tripid={tripId}
      onClick={() => getActivities(tripId)}
      className="side-bar-card"
    >
      <label>Location: {location}  </label>
      <br />
      <label>Country: {country} </label>
    </button>
  );
};

export default SidebarCard;
