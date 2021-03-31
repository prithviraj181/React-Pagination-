import React from 'react';

// Just implement the loading component as the time needed between the call 
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading First Ten posts Please wait..... </h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
