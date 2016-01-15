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
      <div className="app">
        <Markdown src="./posts/newpost.md"/>
      </div>
    )
  }
}

export default Post; 
