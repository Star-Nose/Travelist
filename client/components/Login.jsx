/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  loginInput: (e) => dispatch(actions.loginInput(e)),
  validateLogin: (u, p) => dispatch(actions.validateLogin(u, p)),
});

const mapStateToProps = (state) => ({
  validated: state.form.login.validated,
  username: state.form.login.username,
  password: state.form.login.password,
});

const Login = (props) => {
  const {
    validated, loginInput, validateLogin, username, password,
  } = props;
  return (
    <Container>
      <h1>Travelist</h1>

      <Form noValidate>
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

        <Button
          className="mr-3"
          variant="danger"
          type="button"
          onClick={() => validateLogin(username, password)}
          // onClick={submitLogin}
        >
          Login
        </Button>
        <Link to={validated ? '/main' : '/signup'}>
          <Button
            variant="outline-danger"
            type="button"
            // onClick={submitLogin}
          >
            Enter Site
          </Button>
        </Link>

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
