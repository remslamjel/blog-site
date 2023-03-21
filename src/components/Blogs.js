import React from "react";
import Container from "@mui/material/Container";
import BlogCard from "./BlogCard";

const Blogs = ({ blog }) => {
  return (
    <Container maxWidth="md">
      {blog &&
        blog.map((item, index) => {
          return <BlogCard key={index + 1} blog={item} />;
        })}
    </Container>
  );
};

export default Blogs;
