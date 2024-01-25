'use client';

import React from 'react';
import CourseCard from './CourseCard.js';
import courseData from './courseData.js';
import '/app/components/blog/blog.css'; // Keep the CSS import

const CourseList = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {courseData.map((post) => (
        <div key={post.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-8">
          <CourseCard
            thumbnail={post.thumbnail}
            title={post.title}
            slug={post.slug} // Pass slug for routing
          />
        </div>
      ))}
    </div>
  );
};

export default CourseList;