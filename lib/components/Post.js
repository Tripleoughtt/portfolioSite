import React from "react";
import ReactDOM from "react-dom";
import Markdown from 'react-markdown-to-html';

class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {  }
  }
  render(){
    return(
      <div>

        <div className="postText">
          <Markdown src={this.props.source} />
        </div>
      </div>
    )
  }
}

export default Post; 
