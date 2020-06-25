import React from "react";

import "./HomeContent.css";

const BlogHeader = ({ title, date, author }) => {
  return (
    <div>
      <h2 className="blog-post-title">{this.props.title}</h2>
      <div className="date-author">
        <p id="date">{this.props.date}</p>
        <p id="author">{this.props.author}</p>
      </div>
    </div>
  );
};

export default BlogHeader;
