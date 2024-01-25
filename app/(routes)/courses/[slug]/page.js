'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Image from 'next/image';

import courseData from '/app/components/courses/courseData';

import '/app/components/blog/blog.css';

const CourseCategory = ({ params }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchedPost = courseData.find((p) => p.slug === params.slug);
    setPost(fetchedPost);
  }, [params.slug]);

  if (!post) {
    return (
      <div>
        <Container>
          <Row justify='center'>
            <Col xs={12} md={10}>
              <div>Post not found</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container>
        {/* <Spacer /> */}
        <Row justify='center'>
          <Col xs={12} md={10}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseCategory;
