import React from 'react';
// import logo from '../../assets/images/logo.png'

export const metadata = {
  title: 'About Us - Your Website',
  description: 'Learn more about our company and what we do.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-about-image.png',
    }, // Relative path to the canonical URL
    openGraph: {
      title: 'About Us - Your Website',
      description: 'Learn more about our company and what we do.',
      url: 'https://yourwebsite.com/about', // Full absolute URL
      images: [
        {
          url: 'https://nextjs.org/og.png', // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us - Your Website',
      description: 'Learn more about our company and what we do.',
      siteId: 'YourTwitterSiteID',
      creator: '@YourTwitterHandle',
      creatorId: 'YourTwitterCreatorID',
      images: ['https://yourwebsite.com/twitter-about-image.jpg'], // Must be an absolute URL
    },
  }

function page() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <div className='w-full md:w-10/12 lg:w-10/12'>
          <h1>About Us</h1>
          <h2>We the best!</h2>
        </div>
      </div>
    </div>
  );
}

export default page;
