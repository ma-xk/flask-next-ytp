'use client';

import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import BlogList from '/app/components/blog/BlogList';

// import BlogList from '../components/blog/BlogList';
// import Spacer from '../components/common/Spacer';

function Blog() {

    return (
        <div>
            {/* <Spacer /> */}
            <Container>
                <Row justify="center">
                    <Col xs={12} md={10} lg={10}>
                        <BlogList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blog;
