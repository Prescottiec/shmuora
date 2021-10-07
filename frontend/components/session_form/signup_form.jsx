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
                    <div className="name-labels">
                        <label className="first-name-label">FIRST NAME</label>
                        <label className="last-name-label">LAST NAME</label>
                    </div>
                    <input type="text" className="first-name-input-box" value={this.state.first_name} onChange={this.handleChange("first_name")}/>
                    <input type="text" className="last-name-input-box" value={this.state.last_name} onChange={this.handleChange("last_name")}/>
                    <label className="input-label">EMAIL</label>
                    <input type="email" className="input-box" value={this.state.email} onChange={this.handleChange("email")}/>
                    <label className="input-label">PASSWORD</label>
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