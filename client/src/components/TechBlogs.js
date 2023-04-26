import React, { useEffect, useState } from 'react';
import './TechBlogs.css';

const TechBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('https://dev.to/api/articles?tag=javascript&per_page=15');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Latest Tech Blogs !!</h1>
      {blogs.map((blog) => (
        <div className="blog-post" key={blog.id}>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-description">{blog.description}</p>
          <button className="read-more-btn" onClick={() => handleReadMore(blog.url)}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default TechBlogs;
