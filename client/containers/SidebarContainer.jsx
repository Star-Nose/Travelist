/* eslint-disable import/extensions */
//  eslint-disable react/prop-types 
import React from 'react';
import { connect } from 'react-redux';
import SidebarCard from '../components/SidebarCard.jsx';
import NewPlans from '../components/NewPlans.jsx'

import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  getActivities: (tripId) => dispatch(actions.getActivities(tripId)),
  newLocationInput: (e) => dispatch(actions.newLocationInput(e)),
});

const mapStateToProps = (state) => ({
  count: state.trips.count,
  location: 'Hollywood, CA',
  country: 'USA',
  newLocation: state.trips.newLocation,
});

// long rectangle that renders cards based on
const SidebarContainer = (props) => {
  // get request to server (server will query db)
  const { getActivities, location, country, newPlans, newLocationInput } = props;
  const cardsArray = [];
  // loop through locations in db and and create <SidebarCard /> for each
  return (
    <div className="side-bar">
      <h5 id="itineraries">Itineraries</h5>
      <NewPlans
        newLocationInput={newLocationInput}
      />
      <SidebarCard
        tripId={1}
        getActivities={getActivities}
        location={location}
        country={country}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);