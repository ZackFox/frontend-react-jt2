import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LoginComponent from "../components/LoginComponent";

const LoginContainer = ({ isLoggedIn, user }) => {
  if (isLoggedIn && user) {
    return <LoginComponent />;
  }
  return <Redirect to="/login" />;
};

LoginContainer.proptypes = {
  user: PropTypes.shape().isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps, null)(LoginContainer);
