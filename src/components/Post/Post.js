import React from 'react';

const Post = ({post}) => {
  return (
    <article>
        <a href={"https://reddit.com" + post.permalink} target="_blank" rel="noreferrer">
        <h2 className="title">{post.title}</h2>
        </a>
        <img src={post.url_overridden_by_dest} alt={post.description}/>
        
        <div className="reactions">
        Posted by <span>{post.author} </span> <span>{Math.floor(post.created_utc)}hours ago </span>     <span>{post.num_comments}</span> 
        </div>
    </article>
  )
}

export default Post;