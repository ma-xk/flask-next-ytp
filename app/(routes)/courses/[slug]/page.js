import React from 'react';
import CourseCategory from '../../../components/courses/CourseCategory';

function page({ params }) {
  return (
    <div>
      <CourseCategory params={params}/>
    </div>
  );
}

export default page;

//we can now do dynamic metadata here