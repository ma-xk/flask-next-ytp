import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // If you use Next.js Image component
import '../blog/blog.css';

const CourseCard = ({ thumbnail, title, author, date, slug }) => {
  return (
    <div className='blog-card'>
      <Image
        src={thumbnail}
        alt={title}
        width={500}
        height={300}
        layout='responsive'
      />
      <div className='blog-content'>
        <h2 className='blog-title'>{title}</h2>
        <Link href={`/courses/${slug}`} passHref>
          <button className='inverse-button-style'>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
