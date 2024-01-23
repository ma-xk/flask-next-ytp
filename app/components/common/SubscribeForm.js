'use client'

import React from 'react';

const SubscribeForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('HandleSubmit');
    // Add your form submission logic here
  }

  return (
    <div className='footer-section subscribe-section'>
      <h5>Subscribe</h5>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Email address' />
        <button type='submit'>→</button>
      </form>
      <p>
        Hello, we are LFT Media. Our goal is to translate the positive
        effects from workouts to how companies engage with their clients
        & their teams.
      </p>
    </div>
  );
};

export default SubscribeForm;