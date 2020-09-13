import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// const mapDispatchToProps = (dispatch) => ({
  
// });

// const mapStateToProps = (state) => ({
  
// });

const Login = () => {
  // const { } = props;
  return (
    <Container>
      <h1>Travelist</h1>

      <Form>
       <Form.Group controlId="loginUsername">
         <Form.Label>Username</Form.Label>
         <Form.Control type="text" placeholder="Username" />
       </Form.Group>

       <Form.Group controlId="loginPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       <Form.Group controlId="loginCheckbox">
         <Form.Check type="checkbox" label="Remember me" variant="danger" />
       </Form.Group>
       
       <Link to="/login">
         <Button variant="outline-danger">Login</Button>
       </Link>

      </Form>
    </Container>
  );
};

export default Login;
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
