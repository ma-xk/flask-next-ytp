import React from 'react';
import { Row, Col } from 'react-grid-system';
import BlogCard from './BlogCard.js'; 
import blogPosts from './blogData.js'
import './blog.css'

const BlogList = () => {
    return (
        <Row>
            {blogPosts.map(post => (
                <Col key={post.id} xs={12} sm={12} md={6} lg={4}>
                    <BlogCard 
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

export default BlogList;
