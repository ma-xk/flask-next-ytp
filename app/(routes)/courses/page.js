import React from 'react';

import CourseList from '/app/components/courses/CourseList';

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