'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Offcanvas from './Offcanvas';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakpoint = 751;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]); // Dependency array ensures effect runs when isMenuOpen changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <Offcanvas isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navigation;