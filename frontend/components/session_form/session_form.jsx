import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup= this.handleSignup.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // handleLogin(e) {
  //   e.preventDefault();
  //   this.props.login(this.state);
  // }

  // handleSignup(e) {
  //   e.preventDefault();
  //   this.props.signup(this.state);
  // }

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
          <div className="projectLogo" />
          <h2 className="tagline">
            Where questions are asked, answered, and edited by users. A place to
            share knowledge and better understand the world.
          </h2>
          <div className="login-form-container">
            <div className="signUpLogin">
              <div className="login">
                <form onSubmit={this.handleLogin} className="login-form-box">
                  Welcome to Shmuora!
                  <br />
                  {/* Please {this.props.formType} or {this.props.navLink} */}
                  {this.renderErrors()}
                  <div className="login-form">
                    <br />
                    <label>Username:</label>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      className="login-input"
                    />
                    <br />
                    <label>Email:</label>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="login-input"
                    />
                    <br />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="login-input"
                    />
                    <br />
                    <input
                      className="session-submit"
                      type="submit"
                      value={this.props.formType}
                    />
                  </div>
                  <div className="login-form-errors">{this.renderErrors()}</div>
                </form>
              </div>

              <div className="signup">
                <form onSubmit={this.handleSignup}>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
