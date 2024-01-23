// pages/blog/[slug].js
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import blogPosts from '/src/components/blog/blogData.js'; // Adjust the import path as necessary
import Spacer from '/src/components/common/Spacer';

const BlogPost = ({ post }) => {
    if (!post) {
        return (
            <div>
                <Container>
                    <Row justify="center">
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
                <Spacer />
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

export async function getStaticPaths() {
    const paths = blogPosts.map(post => ({ params: { slug: post.slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = blogPosts.find(p => p.slug === params.slug);
    return { props: { post } };
}

export default BlogPost;
