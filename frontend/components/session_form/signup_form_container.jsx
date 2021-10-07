import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import { SignupForm } from "./signup_form";

import { withRouter } from "react-router-dom";
// import React from "react";
// import { Link } from "react-router-dom";
// import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    // navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
