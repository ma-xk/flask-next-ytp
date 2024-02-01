'use client';

import React from 'react';
import { useToast } from '@/components/ui/use-toast';

const SubscribeForm = () => {
  const { toast } = useToast();
  function handleSubmit(e) {
    e.preventDefault();
    toast({
      title: 'You have successfully submitted',
      description: 'Thank you!',
    });
    // Add your form submission logic here
  }

  return (
    <div className='flex flex-col'>
      <h5 className='mb-4'>Subscribe</h5>
      <form onSubmit={handleSubmit} className='flex flex-row '>
        <input
          type='email'
          placeholder='Email address'
          className='p-2 border-none mr-2 text-black w-full sm:w-auto md:w-full'
        />
        <button
          type='submit'
          className='bg-[#3a7bff] text-white p-2 cursor-pointer'
        >
          →
        </button>
      </form>
      <p>Subscribe to our mailing list!</p>
    </div>
  );
};

export default SubscribeForm;
