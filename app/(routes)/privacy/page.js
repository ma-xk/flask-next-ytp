import React from 'react';

// pages/privacy.js

export const metadata = {
  title: 'Privacy Policy - Your Website',
  description: 'Learn about how we collect, use, and protect your personal information in our privacy policy.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/privacy',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Privacy Policy - Your Website',
    description: 'Learn about how we collect, use, and protect your personal information in our privacy policy.',
    url: 'https://yourwebsite.com/privacy', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-privacy-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-privacy-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Privacy Policy Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Your Website',
    description: 'Learn about how we collect, use, and protect your personal information in our privacy policy.',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-privacy-image.jpg'], // Must be an absolute URL
  },
};

function Privacy() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>Privacy</h1>
        <h2>Stay Secretive & Private as Heck at All Times</h2>
        </div>
      </div>
    </div>
  );
}

export default Privacy;