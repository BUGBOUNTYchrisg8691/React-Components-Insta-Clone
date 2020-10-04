import React, { useRef } from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
const { v4: uuidv4 } = require("uuid")

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props
  const commentRef = useRef()

  const handleAddComment = () => {
    const text = commentRef.current.value
    if (text === '') return
    const newPost = { ...post, comments: [...post.comments, { id: uuidv4(), username: "test", text: text }] }
    console.log(newPost)
    commentRef.current.value = ""
  }

  return (
    <div className='post-border'>
      <PostHeader
        username={ post.username }
        thumbnailUrl={ post.thumbnailUrl }
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={ post.imageUrl }
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={ () => likePost(post.id) } numberOfLikes={ post.likes } />
      {/* Comments also wants its props! */}
      <Comments comments={ post.comments } />
      <input ref={ commentRef } type="text" />
      <button onClick={ handleAddComment }>Add Comment</button>
    </div>
  );
};

export default Post;
