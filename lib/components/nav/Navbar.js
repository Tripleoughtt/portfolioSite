
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
      <div className="navBar">
        <ul>
          <li className="tab">
            <Link role="button" className="nav-buttons" to="blog">B L O G</Link>
          </li>
          <li className="tab">
            <Link role="button" className="nav-buttons" to="/">H O M E</Link>
          </li>
          <li className="tab">
            <Link role="button" className="nav-buttons" to="/">P R O J E C T S</Link>
          </li>
          <li className="tab">
            <Link role="button" className="nav-buttons" to="/">R E S U M E</Link>
          </li>
          <li className="tab">
            <Link role="button" className="nav-buttons" to="/">C O N T A C T</Link>
          </li>

        </ul>
      </div>
    )
  }
}

export default Navbar;
