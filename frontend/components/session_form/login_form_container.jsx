import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

import { withRouter } from 'react-router-dom'
// import React from "react";
// import { Link } from "react-router-dom";
// import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Login",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));