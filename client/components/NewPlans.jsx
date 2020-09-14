import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewPlans = (props) => (
  <div id="new-plans-container">
    <Form className="itinerary-form">
      <Form.Group controlId="formLocation">
        <Form.Label>New Location:</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group controlId="formCountry">
        <Form.Label>Country:</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Button variant="secondary" id="new-plans">Make new plans</Button>
    </Form>
  </div>
);

export default NewPlans;
