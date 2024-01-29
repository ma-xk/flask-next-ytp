'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import blogPosts from './blogData';

import './blog.css'; // Keep the CSS import


const BlogPost = ({ params }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchedPost = blogPosts.find((p) => p.slug === params.slug);
    setPost(fetchedPost);
  }, [params.slug]);

  if (!post) {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12">
            <div>Post not found</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12">
          <h1>{post.title}</h1>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              className='blog-post-image'
            />
          )}
          <p>
            <strong>Author:</strong> {post.author}
          </p>
          <p>
            <strong>Date:</strong> {post.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;