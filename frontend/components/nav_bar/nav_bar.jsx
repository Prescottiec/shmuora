import React from "react";
import { Link } from "react-router-dom";

// import GitHubIcon from "../../../app/assets/images/github.png";
// import LinkedInIcon from "../../../app/assets/images/linkedin.png";

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.props.logout().then( () =>
        this.props.history.push("/")
    );
  };

  render() {
    return (
      <div className="nav-bar-ui">
        <nav className="nav-bar-buttons"> 
          <Link className="nav-bar-home" to="/">Home</Link>
          <div className="about-dropdown">
            <a href="https://www.linkedin.com/prescottiec" className="about-dropdown-link" target="_blank">
              {/* <img src={LinkedInIcon}/> */}
            </a>
            <a href="https://github.com/prescottiec" className="about-dropdown-link" target="_blank">
              {/* <img src={GitHubIcon}/> */}
            </a>
          </div>
          <button className="logout-button" onClick={()=>this.handleClick()}>Sign Out</button>
        </nav>
      </div>  
    )
  };
};

export default NavBar;
