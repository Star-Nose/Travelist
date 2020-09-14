/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';
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
  username: state.form.login.username,
  password: state.form.login.password,
});

const Login = (props) => {
  const {
    validated, submitLogin, loginInput,
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
            // value={username}
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
            // value={password}
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
          onClick={submitLogin}
        >
          Login
        </Button>
        <Link to={validated ? '/main' : '/signup'}>
          <Button
            variant="outline-danger"
            type="button"
            // onClick={submitLogin}
          >
            Check Validation
          </Button>
        </Link>

      </Form>

      <br />
      <p className="text-center">
        New user?&nbsp;
        <Link to="/signup">Sign up here!</Link>
      </p>

      {/* <Route exact path="/">
        {validated ? <Redirect to="/main" /> : <Redirect to="/signup" />}
      </Route> */}
    </Container>

  );
};

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
