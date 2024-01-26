import React from 'react';

import BlogList from '/app/components/blog/BlogList';

function Blog() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>Blog</h1>
        <h2>Check back frequently for our expertly curated blog posts.</h2>
          <BlogList />
        </div>
      </div>
    </div>
  );
}

export default Blog;