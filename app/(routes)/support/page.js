import React from 'react';

// pages/support.js

export const metadata = {
  title: 'Support - Your Website',
  description: 'Get assistance and support for any inquiries or issues you may have.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/support',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Support - Your Website',
    description: 'Get assistance and support for any inquiries or issues you may have.',
    url: 'https://yourwebsite.com/support', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-support-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-support-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Support Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support - Your Website',
    description: 'Get assistance and support for any inquiries or issues you may have.',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-support-image.jpg'], // Must be an absolute URL
  },
};


function Support() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>Support</h1>
        <h2>Need some help?</h2>
        </div>
      </div>
    </div>
  );
}

export default Support;