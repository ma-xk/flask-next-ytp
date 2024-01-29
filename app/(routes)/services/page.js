import React from 'react';

export const metadata = {
  title: 'Services - Your Website',
  description: 'Explore the range of services we offer to meet your needs.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/services',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Services - Your Website',
    description: 'Explore the range of services we offer to meet your needs.',
    url: 'https://yourwebsite.com/services', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-services-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-services-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Services Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Your Website',
    description: 'Explore the range of services we offer to meet your needs.',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-services-image.jpg'], // Must be an absolute URL
  },
};
function Services() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>Services</h1>
        <h2>We do other stuff as well.</h2>
        </div>
      </div>
    </div>
  );
}

export default Services;