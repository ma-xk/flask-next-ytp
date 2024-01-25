'use client'
import React from 'react';
import Button from '../common/Button';
function test1() {
  function handleClick() {
    console.log('test');
  }

  return (
    <div>
      <Button onClick={handleClick}>Press</Button>
    </div>
  );
}

export default test1;
