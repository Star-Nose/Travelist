/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (e) => dispatch(actions.submitLogin(e)),
  loginInput: (e) => dispatch(actions.loginInput(e)),
});

const mapStateToProps = (state) => ({
  validated: state.form.login.validated,
});

const Login = (props) => {
  const { validated, submitLogin, loginInput } = props;
  return (
    <Container>
      <h1>Travelist</h1>

      <Form noValidate validated={validated}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            required
            onChange={loginInput}
          />
          <Form.Control.Feedback type="invalid">Incorrect Username</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={loginInput}
          />
          <Form.Control.Feedback type="invalid">Incorrect Password</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="loginCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        {/* <Link to="/main"> */}
        <Button variant="outline-danger" type="button" onClick={submitLogin}>Login</Button>
        {/* </Link> */}
      </Form>

      <br />
      <p className="text-center">
        New user?&nbsp;
        <Link to="/signup">Sign up here!</Link>
      </p>
    </Container>
  );
};

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
