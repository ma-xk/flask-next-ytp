'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import blogPosts from '/app/components/blog/blogData';

import   '/app/components/blog/blog.css';

const BlogPost = ({ params }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchedPost = blogPosts.find(p => p.slug === params.slug);
        setPost(fetchedPost);
    }, [params.slug]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Container>
                {/* <Spacer /> */}
                <Row justify="center">
                    <Col xs={12} md={10}>
                        <h1>{post.title}</h1>
                        {post.image && <img src={post.image} alt={post.title} className="blog-post-image" />}
                        <p><strong>Author:</strong> {post.author}</p>
                        <p><strong>Date:</strong> {post.date}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogPost;
