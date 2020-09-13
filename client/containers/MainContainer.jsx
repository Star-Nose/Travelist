/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import Login from '../components/Login.jsx';
import NavContainer from './NavContainer.jsx';
import SidebarContainer from './SidebarContainer.jsx';
import ActivitiesContainer from './ActivitiesContainer.jsx';

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCount()),
});

const mapStateToProps = (state) => ({
  count: state.trips.count,
});

// within main - nav container, side-bar container, activities container (3) 

const MainContainer = (props) => {
  const { count, addCount } = props;
  return (
    <div>
      <NavContainer />
      <SidebarContainer />
      <ActivitiesContainer />
      {count}
      <button type="button" onClick={addCount}>+</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
