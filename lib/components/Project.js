import React from "react";
import ReactDOM from "react-dom";
import Markdown from 'react-markdown-to-html';
import {Link} from 'react-router';

class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div className="projectWrapper col-md-4 col-xs-12 col-md-offset-1">
        <div className="projectCard row">
          <h1 className="col-xs-12" >
            {this.props.title}
          </h1>
          <img className="col-xs-12" src={this.props.image}></img>
          <p className="col-xs-12">
            {this.props.summary}
          </p>
          <h4>
          <a  className="col-xs-12" href={this.props.link}>{this.props.title} Github repository</a>
          </h4>
          <br />
          <h4>
            <a className="col-xs-12" href={this.props.site}> {this.props.title} at the deployed website</a>
          </h4>

          
        </div>
      </div>
    )
  }
}

export default Post; 
