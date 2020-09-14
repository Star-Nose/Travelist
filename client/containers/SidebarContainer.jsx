/* eslint-disable import/extensions */
//  eslint-disable react/prop-types
import React from 'react';
import { connect } from 'react-redux';
import SidebarCard from '../components/SidebarCard.jsx';
import NewPlans from '../components/NewPlans.jsx';

import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  getActivities: (tripId) => dispatch(actions.getActivities(tripId)),
  newLocationInput: (e) => dispatch(actions.newLocationInput(e)),
  addNewPlans: (e) => dispatch(actions.newPlans(e)),
});

const mapStateToProps = (state) => ({
  country: state.form.newPlans.country,
  newLocation: state.form.newPlans.newLocation,
  trips: state.trips.trips,
});

// long rectangle that renders cards based on
const SidebarContainer = (props) => {
  // get request to server (server will query db)
  const {
    getActivities, addNewPlans, newLocationInput, country, newLocation, trips,
  } = props;
  // loop through locations in db and and create <SidebarCard /> for each
  return (
    <div className="side-bar">
      <h5 id="itineraries">Itineraries</h5>
      <NewPlans
        addNewPlans={addNewPlans}
        country={country}
        location={newLocation}
        newLocationInput={newLocationInput}
      />
      {trips.map((trip, i) => (
        <SidebarCard
          key={`tripId${i}`}
          tripId={`tripId${i}`}
          getActivities={getActivities}
          country={country}
          location={newLocation}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
