import React from 'react';

import BlogList from '../../components/blog/BlogList';

export const metadata = {
  title: 'Blog - Your Website',
  description: 'Explore our latest blog posts and stay updated on industry trends.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/blog',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Blog - Your Website',
    description: 'Explore our latest blog posts and stay updated on industry trends.',
    url: 'https://yourwebsite.com/blog', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-blog-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-blog-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Blog Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Your Website',
    description: 'Explore our latest blog posts and stay updated on industry trends.',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-blog-image.jpg'], // Must be an absolute URL
  },
};
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