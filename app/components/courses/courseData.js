'use client';

import car from '/app/components/blog/car.png';

const courseData = [
  {
    id: 1,
    slug: 'elearning-course-1',
    title: 'Automotive Maintenance Basics',
    date: 'December 24, 2023',
    author: 'Mark Testman',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 2,
    slug: 'elearning-course-2',
    title: 'Digital Marketing Fundamentals',
    date: 'February 10, 2023',
    author: 'Mark Testman',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 3,
    slug: 'elearning-course-3',
    title: 'Web Development Essentials',
    date: 'March 15, 2023',
    author: 'Mark Testman',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 4,
    slug: 'elearning-course-4',
    title: 'Introduction to Data Science',
    date: 'April 20, 2023',
    author: 'Thomas Rodriguez',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 5,
    slug: 'elearning-course-5',
    title: 'Graphic Design Fundamentals',
    date: 'May 25, 2023',
    author: 'Thomas Rodriguez',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 6,
    slug: 'elearning-course-6',
    title: 'Introduction to Python Programming',
    date: 'June 15, 2023',
    author: 'Thomas Rodriguez',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 7,
    slug: 'elearning-course-7',
    title: 'Financial Management Strategies',
    date: 'July 20, 2023',
    author: 'Alice Smith',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 8,
    slug: 'elearning-course-8',
    title: 'Art History and Appreciation',
    date: 'August 15, 2023',
    author: 'Alice Smith',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 9,
    slug: 'elearning-course-9',
    title: 'Healthy Cooking and Nutrition',
    date: 'September 10, 2023',
    author: 'Emily Johnson',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  {
    id: 10,
    slug: 'elearning-course-10',
    title: 'Photography Fundamentals',
    date: 'October 20, 2023',
    author: 'Emily Johnson',
    thumbnail: car,
    image: car,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula diam non massa hendrerit, sed tempus dui ultricies. Fusce consectetur urna id lacus lobortis eleifend. Nullam et purus sit amet quam cursus vehicula ac non urna. Sed vitae odio non dui tincidunt pharetra. Phasellus a ullamcorper quam. Sed non turpis at nunc efficitur luctus. Praesent id odio a dolor ultrices tincidunt id eu ex. Aliquam erat volutpat. Sed vestibulum nunc sit amet eleifend. Ut auctor, mi a fermentum efficitur, lorem sem interdum urna, in varius tortor velit sit amet libero. Praesent in elit nec purus semper suscipit. Sed a massa at ex tincidunt fermentum ac quis sapien. Integer posuere tincidunt nulla, at malesuada arcu finibus in. Aenean ut euismod odio. Praesent vel auctor orci. Nullam et libero felis.
    `,
  },
  
];

export default courseData;
