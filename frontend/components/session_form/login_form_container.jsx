import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Login",
    // navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
    // signup: (user) => dispatch(signup(user["signup"])),
    // login: (user) => dispatch(login(user["login"]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);