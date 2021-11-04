import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import React from "react";

import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
