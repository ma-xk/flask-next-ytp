'use client'
import React from 'react';
import Button from '../common/Button';
import AccordionShad from '../common/Accordion';
import MenuShad from '../common/MenuShad';

function test1() {
  function handleClick() {
    console.log('test');
  }

  return (
    <div className='p-10'>
      <Button onClick={handleClick}>Press</Button>
      <AccordionShad/>
      <div ><MenuShad/></div>
      


    </div>
  );
}

export default test1;
