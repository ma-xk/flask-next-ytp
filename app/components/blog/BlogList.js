import React from 'react';
import BlogCard from './BlogCard.js';
import blogPosts from './blogData.js';
import '/app/components/blog/blog.css'; // Keep the CSS import

const BlogList = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {blogPosts.map((post) => (
        <div key={post.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-8">
          <BlogCard
            thumbnail={post.thumbnail}
            title={post.title}
            author={post.author}
            date={post.date}
            slug={post.slug} // Pass slug for routing
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList;