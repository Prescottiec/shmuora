import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleSignup= this.handleSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

    componentDidMount(){
        this.props.clearErrors();
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

    handleDemo(e) {
        e.preventDefault();
        const demoUser = { username: 'Demo_User', email: 'demo@demo.com', password: '123456'};
        this.props.processForm(demoUser);
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
          <div className="login-form-container">
            <div className="signUpLogin">
              <div className="login">
                <form onSubmit={this.handleLogin} className="login-form-box">
                  <br />
                  {this.renderErrors()}
                  <div className="login-form">
                    <br />
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="Your Username"
                      value={this.state.username}
                      onChange={this.update("username")}
                      className="input-box"
                    />
                    <br />
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="input-box"
                    />
                    <br />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Your Password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="input-box"
                    />
                    <br />
                    <input
                      className="session-submit"
                      type="submit"
                      value={this.props.formType}
                    />
                    <button className="demo-user-button" onClick={this.handleDemo}>Demo User</button>
                  </div>
                  <div className="login-form-errors">{this.renderErrors()}</div>
                </form>
              </div>

            </div>
          </div>
    );
  }
}

export default LoginForm;
