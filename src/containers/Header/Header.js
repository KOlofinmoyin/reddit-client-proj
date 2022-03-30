import {React, useState, useEffect } from "react";
import Post from '../../components/Post/Post.js'

const Header = () => {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('pics');
  
  useEffect(() => {
    fetch("https://www.reddit.com/r/"+subreddit+".json")
        .then(res => {
          if(res.status !== 200){
              console.log("ERROR!!!");
              return;
          }
          res.json().then(data => {
            if(data !== null){
              setPosts(data.data.children);
            }
          })
        })
  }, [subreddit]);

  return (
    <div>
      <header>
        <input type="text" className="input" value="pics" value={subreddit} onChange={(e)=> setSubreddit(e.target.value)}/>
      </header>
      <div className="post">
          {
            posts !== null ? posts.map((post, index)=> <Post key={index} post={post.data}/>) : ''
          }
      </div>
    </div>
  );
};

export default Header;
