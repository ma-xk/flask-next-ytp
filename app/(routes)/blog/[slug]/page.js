// pages/[slug]/index.js
import React from 'react';
import BlogPost from '../../../components/blog/BlogPost';
import blogData from '../../../components/blog/blogData';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug;

  console.log(`Fetching metadata for slug: ${slug}`);

  // find metadata for the specified slug
  const blogMetadata = blogData.find(item => item.slug === slug);

  console.log('Found blog metadata:', blogMetadata);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blogMetadata ? blogMetadata.title : 'Blog Not Found',
    openGraph: {
      images: ['/some-specific-page-image.jpg'], // Add more images if needed
    },
  };
}

function Page({ params }) {
  console.log('Rendering Page component with params:', params);

  return (
    <div>
      <BlogPost params={params} />
    </div>
  );
}

export default Page;
