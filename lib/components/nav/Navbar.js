
import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router"

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="nav-bar">
        <ul>
          <li>
            <Link role="button" className="btn nav-buttons" to="blog"> Blog</Link>
          </li>
          <li>
            <Link role="button" className="btn nav-buttons" to="/">Home</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
