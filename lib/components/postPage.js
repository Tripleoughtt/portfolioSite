import React from "react";
import ReactDOM from "react-dom";
import Markdown from 'react-markdown-to-html';
import {Link} from 'react-router';

class postPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){ 
    this.setState({
      source: this.props.params.post
    })
  }
  render(){
    console.log(this.props)
    var src = `./posts/${this.props.params.post}`
    return(
      <div>
        {src}
        <Markdown src={src} />
      </div>
    )
  }
}

export default postPage; 
