'use client'

import { Button } from "@/components/ui/button"

import React from 'react';

const GButton = ({ onClick, children }) => {
  return (
    <Button  onClick={onClick}>
      {children}
    </Button>
  );
};

export default GButton;

//how can this be truly resuable if we can't make the function in the page.