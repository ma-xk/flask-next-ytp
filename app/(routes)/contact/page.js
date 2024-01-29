import React from 'react';

// pages/contact.js

export const metadata = {
  title: 'Contact Us - Your Website',
  description: 'Get in touch with us. We would love to hear from you!',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Contact Us - Your Website',
    description: 'Get in touch with us. We would love to hear from you!',
    url: 'https://yourwebsite.com/contact', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-contact-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-contact-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Contact Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Your Website',
    description: 'Get in touch with us. We would love to hear from you!',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-contact-image.jpg'], // Must be an absolute URL
  },
};

function Contact() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>Contact Us</h1>
        <h2>We still talk sometimes.</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;