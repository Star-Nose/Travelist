import React from 'react';
import Activity from '../components/Activity.jsx';
import { Container } from 'react-bootstrap';

const ActivitesContainer = (props) => {
    return (
      <Container>
      <div>
        <div>Activities Container</div>
        <div><Activity /> </div>
      </div>
      </Container>
    )
}

export default ActivitesContainer;