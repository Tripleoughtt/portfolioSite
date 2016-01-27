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
      <div className="post">
        <div className="postHead row">
          <Link className="link" to={`/blog/${this.props.source}`}>
            <h1 className="col-sm-8 col-xs-12 title">{this.props.title.toUpperCase()}</h1>
          </Link>
            <h1 className="col-sm-4 col-xs-12 date">{this.props.date.toUpperCase()}</h1>
        </div>
        <div className="about">
          <span>{this.props.about.toUpperCase()}</span>
        </div>
      </div>
    )
  }
}

export default Post; 
