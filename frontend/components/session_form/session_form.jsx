import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleSignup= this.handleSignup.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }


  renderErrors() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="login-page">
        <div className="user-auth-container">
          <h1 className="project-logo">Shmuora</h1>
          <h2 className="tagline">
            A place to share knowledge and better understand the world
          </h2>
          
        </div>
      </div>
    );
  }
}

export default SessionForm;
