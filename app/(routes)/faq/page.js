import React from 'react'

export const metadata = {
  title: 'FAQ - Your Website',
  description: 'Find answers to frequently asked questions about our products and services.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/faq',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'FAQ - Your Website',
    description: 'Find answers to frequently asked questions about our products and services.',
    url: 'https://yourwebsite.com/faq', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-faq-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-faq-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'FAQ Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Your Website',
    description: 'Find answers to frequently asked questions about our products and services.',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-faq-image.jpg'], // Must be an absolute URL
  },
};

function page() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>FAQ</h1>
        </div>
      </div>
    </div>
  )
}

export default page