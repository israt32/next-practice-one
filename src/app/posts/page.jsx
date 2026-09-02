import React from 'react';

const PostsPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  console.log(posts)
  return (
    <div>
      <h2>all my posts are here</h2>
      <p>read the file here</p>
      <p>road map</p>
      {
        posts.map(post => <div key={post.id}>
          <h1>this is new posts</h1>
          <p>post descriptions</p>
        </div>)
      }
    </div>
  );
};

export default PostsPage;