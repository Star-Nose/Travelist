import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';


const Activity = ({ description, notes, address, link }) => (
  // here, we should loop through a data structure from state, to display the activities array
  <div id="Activity">
    Description: {description}
    <br/>
    Notes: {notes}
    <br/>
    Address: {address}
    <br/>
    Link: {link}
  </div>
);

export default Activity;
