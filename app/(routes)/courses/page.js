'use client';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import CourseList from '/app/components/courses/CourseList';

function Courses() {
  return (
    <div>
      <Container>
        <Row justify='center'>
          <Col xs={12} md={10} lg={10}>
            <CourseList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Courses;
