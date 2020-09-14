/* eslint-disable import/extensions */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Activity from '../components/Activity.jsx';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCount()),
});

const mapStateToProps = (state) => ({
  count: state.trips.count,
});

const ActivitiesContainer = (props) => (
  <div id="large-activity-container">
    <h1>Activities: </h1>
    <div id="all-activities">
      <Button>Add Activity</Button>
      <Activity />
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
