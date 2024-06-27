import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.blogs.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;