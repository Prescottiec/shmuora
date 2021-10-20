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
        this.props.submitEvent(this.state).then( (action) => {
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
                <form onSubmit={this.handleSubmit}>
                    <h2 className="session-title">{this.props.formType}</h2>
                    <label className="input-label">Username</label>
                    <input type="username" className="input-box" value={this.state.username} onChange={this.handleChange("username")}/>
                    <label className="input-label">Email</label>
                    <input type="email" className="input-box" value={this.state.email} onChange={this.handleChange("email")}/>
                    <label className="input-label">Password</label>
                    <input type="password" className="input-box" value={this.state.password} onChange={this.handleChange("password")}/>
                    <div className="signup-submit-block">
                        <label></label>
                        <button className="submit-button">{this.props.formType}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;