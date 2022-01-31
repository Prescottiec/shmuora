import React from "react";
import { Link } from "react-router-dom";

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
          <Link className="nav-bar-logo" to="/browse">Shmuora</Link>
          <Link to="/browse" className="home_logo">
            <button>
              <img src={window.home_logo}/>
            </button>
          </Link>
          <a href="https://www.linkedin.com/prescottcarlson" className="linkedin-logo" target="_blank">
            <img src={window.linkedin_logo}/>
          </a>
          <a href="https://github.com/prescottiec" className="github-logo" target="_blank">
            <img src={window.github_logo}/>
          </a>
          <Link to='/postsnew' className="nav-bar-question">
            <button className="nav-bar-question-button">Add question</button>
          </Link>
          <button className="logout-button" onClick={()=>this.handleClick()}>Sign Out</button>
        </nav>
      </div>  
    )
  };
};

export default NavBar;
