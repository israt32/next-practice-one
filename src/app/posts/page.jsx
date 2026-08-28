import React from 'react';

const PostsPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  console.log(posts)
  return (
    <div>
      <h2>all my posts are here</h2>
      {
        posts.map(post => <div key={post.id}>
          <h1>this is new posts</h1>
        </div>)
      }
    </div>
  );
};

export default PostsPage;