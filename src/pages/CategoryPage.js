import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';

const CategoryPage = ({ match }) => {
  const { category } = match.params;
  const posts = useSelector((state) =>
    state.blogs.posts.filter((post) => post.category === category)
  );

  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CategoryPage;