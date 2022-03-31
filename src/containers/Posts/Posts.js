import Header from '../Header/Header';
import Post from '../../components/Post/Post.js'

const Posts = ({posts}) => {

  return (
    <div>

      <div className="post">
          {
            posts !== null ? posts.map((post, index)=> <Post key={index} post={post.data}/>) : ''
          }
      </div>
    </div>
  );
};

export default Posts;
