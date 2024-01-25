'use client'

import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button style={{}} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

//how can this be truly resuable if we can't make the function in the page.