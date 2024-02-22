import React from "react";
import "./BlogPostContainer.css"; // Make sure to create and import the CSS file for styling

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Post Title 1",
    content: "This is the first post content.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Post Title 2",
    content: "This is the second post content.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Post Title 3",
    content: "This is the third post content.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more posts as needed
];

const BlogPostContainer = () => {
  return (
    <div className="blog-container">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <img src={post.imageUrl} alt="Blog Post" className="blog-image" />
          <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostContainer;
