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
      <Link to={`${this.props.source}`}>
        <div className="post">

          <div className="text">
            <Markdown src={`./posts/${this.props.source}`} />
          </div>
        </div>
      </Link>
    )
  }
}

export default Post; 
