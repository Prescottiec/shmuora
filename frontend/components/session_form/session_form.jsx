import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="login-page">
        <div className="user-auth-container">
          <h1 className="project-logo">Shmuora</h1>
          <h2 className="tagline">
            A place to share knowledge and better understand the world
          </h2>
          <div className="main-session-forms">
            <SignupFormContainer />
            <LoginFormContainer />
          </div>

        </div>
      </div>
    );
  }
}

export default SessionForm;
