import React from "react";

const Header = ({subreddit, setSubreddit}) => {

  return (
    <div>
      <header>
        <input type="text" className="search" value={subreddit} onChange={(e)=> setSubreddit(e.target.value)}/>
      </header>
    </div>
  );
};

export default Header;
