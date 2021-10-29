import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      {/* <Link to="/">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link> */}
    </nav>
  );
  const personalNavBar = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalNavBar() : sessionLinks();
};

export default NavBar;
