/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Activity from '../components/Activity.jsx';
import ActivityFormModal from '../components/AddActivityModal.jsx';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  handleFormInput: (newState) => dispatch(actions.activityFormInput(newState)),
  handleFormSubmit: (newState) =>
    dispatch(actions.activityFormSubmit(newState)),
});

const mapStateToProps = (state) => ({
  description: state.form.newActivity.description,
  notes: state.form.newActivity.notes,
  address: state.form.newActivity.address,
  link: state.form.newActivity.link,
  completed: state.form.newActivity.completed,
});

const ActivitiesContainer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const {
    description,
    notes,
    address,
    link,
    handleFormInput,
    handleFormSubmit,
  } = props;

  return (
    <div>
      <ActivityFormModal
        show={showModal}
        onHide={() => setShowModal(false)}
        description={description}
        notes={notes}
        address={address}
        link={link}
        handleFormInput={handleFormInput}
        handleFormSubmit={handleFormSubmit}
      />
      <div>Activities Container</div>
      <Button onClick={() => setShowModal(true)}>Add Activity</Button>
      <div>
        <Activity />
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesContainer);
