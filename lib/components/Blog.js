import React from "react";
import Post from "./Post";
import Data from "../postData";

class Blog extends React.Component {
  render(){
    var posts = Data.posts.map((post) => <Post title={post["title"]} source={post['path']} date={post["date"]} about={post['about']} />)
    return (
      <div>
        {posts}
      </div>
    );
  }
}

export default Blog;
