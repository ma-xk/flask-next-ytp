import React from 'react';

import CourseList from '../../components/courses/CourseList';

// pages/faq.js

export const metadata = {
  title: 'Courses - Your Website',
  description: 'Explore our educational courses and enhance your skills.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/courses',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Courses - Your Website',
    description: 'Explore our educational courses and enhance your skills.',
    url: 'https://yourwebsite.com/courses', // Full absolute URL
    images: [
      {
        url: 'https://yourwebsite.com/og-courses-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://yourwebsite.com/og-courses-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Courses Page Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courses - Your Website',
    description: 'Explore our educational courses and enhance your skills.',
    siteId: 'YourTwitterSiteID',
    creator: '@YourTwitterHandle',
    creatorId: 'YourTwitterCreatorID',
    images: ['https://yourwebsite.com/twitter-courses-image.jpg'], // Must be an absolute URL
  },
};



function Courses() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
            <h1>Courses</h1>
            <h2>We offer courses and certifications in a variety of categories. Please select a category to see all the courses we have to offer.</h2>
          <CourseList />
        </div>
      </div>
    </div>
  );
}

export default Courses;