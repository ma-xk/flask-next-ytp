import React from 'react';

export const metadata = {
  title: 'Terms and Conditions - Your Website',
  description: 'Read and understand the terms and conditions governing the use of our website.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/terms',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Terms and Conditions - Your Website',
    description: 'Read and understand the terms and conditions governing the use of our website.',
    url: 'https://yourwebsite.com/terms', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-terms-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-terms-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Terms and Conditions Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - Your Website',
    description: 'Read and understand the terms and conditions governing the use of our website.',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-terms-image.jpg'], // Must be an absolute URL
  },
};

function Terms() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>Terms of Use</h1>
        <h2>Use the site nice!</h2>
        </div>
      </div>
    </div>
  );
}

export default Terms;