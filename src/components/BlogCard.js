import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push(`/blog/${post.id}`);
  // };
  const handleClick = () => {
    navigate(`/blog/${post.id}`);
  };
  

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.excerpt}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Read More</Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;