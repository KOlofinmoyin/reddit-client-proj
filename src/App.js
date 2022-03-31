import {React, useState, useEffect } from "react";
import "./App.css";
import Header from "./containers/Header/Header";
import Posts from "./containers/Posts/Posts";

function App() {
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
    <div className="App">
      <Header subreddit={subreddit} setSubreddit={setSubreddit}/>
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
