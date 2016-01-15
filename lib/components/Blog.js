import React from "react";
import Post from "./Post";
import Data from "../postData";

class Blog extends React.Component {
  render(){
    console.log(Data)
        var posts = Data.posts.map((post) => <Post title={post["title"]} source={post['path']} date={post["date"]} about={post['about']} />)
        console.log(posts)
    return (
      <div>
        {posts}
      </div>
    );
  }
}

export default Blog;
