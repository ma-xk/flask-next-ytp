import React from 'react';
import BlogPost from '../../../components/blog/BlogPost';

function page({ params }) {
  return (
    <div>
      <BlogPost params={params}/>
    </div>
  );
}

export default page;

//we can now do dynamic metadata here