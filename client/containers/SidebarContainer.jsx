/* eslint-disable import/extensions */
//  eslint-disable react/prop-types 
import React from 'react';
import { connect } from 'react-redux';
import SidebarCard from '../components/SidebarCard.jsx';

import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  getActivities: (tripId) => dispatch(actions.getActivities(tripId)),
});

const mapStateToProps = (state) => ({
  count: state.trips.count,
});

// long rectangle that renders cards based on
const SidebarContainer = (props) => {
  // get request to server (server will query db)
  const { getActivities } = props;
  const cardsArray = [];
  // loop through locations in db and and create <SidebarCard /> for each
  return (
    <div className="side-bar">
      <h5>Itineraries</h5>
      <SidebarCard
        tripId={1}
        getActivities={getActivities}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);