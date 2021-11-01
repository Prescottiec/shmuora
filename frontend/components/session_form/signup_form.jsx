import React from 'react';

class SignupForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then( (action) => {
                return this.props.history.push("/")
            }
        );
    }

    handleChange(fieldType){
        return event => {
            this.setState({
                [fieldType]: event.currentTarget.value
            });
        }
    }

    render(){
        return (
            <div className="session-form">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <br/>
                    <div className="signup-form">
                        <br />
                        <label className="user-auth-text">Sign-up</label>

                        <input 
                            type="username" 
                            placeholder="Your Username"
                            className="input-box" 
                            value={this.state.username} 
                            onChange={this.handleChange("username")}
                        />
                        <br />
        
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            className="input-box" 
                            value={this.state.email} 
                            onChange={this.handleChange("email")}
                        />
                        <br />
                        
                        <input 
                            type="password" 
                            placeholder="Your Password"
                            className="input-box" 
                            value={this.state.password} 
                            onChange={this.handleChange("password")}
                        />
                        <br />
                        <button className="session-submit">Sign-up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;