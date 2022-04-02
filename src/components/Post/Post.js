import React from "react";
import { Link } from "react-router-dom";
import arrowDwn from "../../assets/downvote.png";
import arrowUp from "../../assets/upvote.png";
import commentBubble from "../../assets/commentBubble.png";

const Post = ({ post }) => {
  return (
    <article>
      <div className="vote-container">
        <div className="icon-container">
          <img src={arrowUp} alt="Vote Up" />
          <img src={arrowDwn} alt="Vote down" />
        </div>
        <div className="wrapper">
          <Link
            to={"https://reddit.com" + post.permalink}
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="title">{post.title}</h3>
          </Link>

          <img
            className="splash-image"
            src={post.url_overridden_by_dest}
            alt={post.description}
          />

          <div> </div>

          <div className="reactions">
            <span>Posted by {post.author} </span>{" "}
            <span>{new Date(post.created_utc).getHours()} hours ago</span>
            <span>
              <img src={commentBubble} alt="number of comments" />{" "}
              {post.num_comments}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
