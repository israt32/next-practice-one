import React from 'react';

const PostsPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  console.log(posts)
  return (
    <div>
      <h2>all my posts are here</h2>
      {
        posts.map(post => <div key={post.id}></div>)
      }
    </div>
  );
};

export default PostsPage;