import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';

const HomePage = () => {
  const posts = useSelector((state) => state.blogs.posts);

  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;