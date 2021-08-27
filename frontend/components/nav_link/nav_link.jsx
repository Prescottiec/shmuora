import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      {/* <Link to="/">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link> */}
    </nav>
  );
  const personalNavLink = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalNavLink() : sessionLinks();
};

export default NavLink;
