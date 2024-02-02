'use client'
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import validator from 'validator';

const SubscribeForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Validate email
    if (validator.isEmail(email)) {
      toast({
        title: 'You have successfully submitted',
        description: 'Thank you!',
      });
      // Add your form submission logic here
    } else {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        status: 'error',
      });
    }
  }

  return (
    <div className='flex flex-col'>
      <h5 className='mb-4'>Subscribe</h5>
      <form onSubmit={handleSubmit} className='flex flex-row '>
        <input
          type='email'
          placeholder='Email address'
          className='p-2 border-none mr-2 text-black w-full sm:w-auto md:w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type='submit'
          className='bg-[#3b82f6] text-white p-2 cursor-pointer'
        >
          →
        </button>
      </form>
      <p className='mt-2'>Subscribe to our mailing list!</p>
    </div>
  );
};

export default SubscribeForm;