import React from 'react';
import Hero from './components/common/Hero';

function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <Hero />
        </div>
      </div>
    </div>
  );
}

export default Home;