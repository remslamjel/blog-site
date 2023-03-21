import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={"Imagefordefaults"} className="blog-image" />
      <div className="blog-content">
        <div>
          <span className="blog-title">{blog.title}</span>

          <br />
          <span className="blog-author">
            <a
              href={"url"}
              target="_blank"
              rel="noreferrer"
              className="author-source"
            >
              <b>Author: {blog.author} </b>
            </a>
          </span>
        </div>

        <div className="description-container">
          <div className="description">{blog.content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
