import React from 'react';
import EditorForm from '../../components/admin/EditorForm';

export const metadata = {
  title: 'Admin - Your Website',
  description: 'Manage and control the admin area of our website.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/admin',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Admin - Your Website',
    description: 'Manage and control the admin area of our website.',
    url: 'https://yourwebsite.com/admin', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-admin-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-admin-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Admin Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin - Your Website',
    description: 'Manage and control the admin area of our website.',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-admin-image.jpg'], // Must be an absolute URL
  },
};


function Admin() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>Admin</h1>
        <h2>Here you can upload, edit, and delete content on your site.</h2>
        <EditorForm/>
        </div>
      </div>
    </div>
  );
}

export default Admin;