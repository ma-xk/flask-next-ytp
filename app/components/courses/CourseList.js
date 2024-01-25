import React from 'react';
import { Row, Col } from 'react-grid-system';
import CourseCard from './CourseCard.js';
import courseData from './courseData.js';
import '/app/components/blog/blog.css';

const CourseList = () => {
  return (
    <Row>
      {courseData.map((post) => (
        <Col key={post.id} xs={12} sm={12} md={6} lg={4}>
          <CourseCard
            thumbnail={post.thumbnail}
            title={post.title}
            author={post.author}
            date={post.date}
            slug={post.slug} // Pass slug for routing
          />
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;
