'use client'

import React from 'react';

const SubscribeForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('HandleSubmit');
    // Add your form submission logic here
  }

  return (
    <div className='flex flex-col'>
      <h5 className='mb-4'>Subscribe</h5>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email address'
          className='p-2 border-none mr-2  text-black w-auto'
        />
        <button
          type='submit'
          className='bg-[#3a7bff] text-white p-2 cursor-pointer'
        >
          →
        </button>
      </form>
      <p>
        Subscribe to our mailing list!
      </p>
    </div>
  );
};

export default SubscribeForm;


