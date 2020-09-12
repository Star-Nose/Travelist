/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCount()),
});

const mapStateToProps = (state) => ({
  count: state.trips.count,
});

const MainContainer = (props) => {
  const { count, addCount } = props;
  return (
    <div>
      From MainContainer.jsx
      {count}
      <button type="button" onClick={addCount}>+</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
