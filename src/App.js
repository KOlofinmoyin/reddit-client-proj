import {React, useState, useEffect } from "react";
import "./App.css";
import Header from "./containers/Header/Header";
import Posts from "./containers/Posts/Posts";
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
    <Router>
    <div className="App">
      <Header subreddit={subreddit} setSubreddit={setSubreddit}/>
      <Posts posts={posts}/>
    </div>
    </Router>
  );
}

export default App;
