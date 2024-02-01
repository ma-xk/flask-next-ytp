'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';
import logo from '../../../assets/images/logo.png';

const OffcanvasMenu = ({ isOpen, toggleMenu }) => {
  const offcanvasRef = useRef(); // Ref for the offcanvas menu

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
        toggleMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <>
      <div className={`offcanvas-menu ${isOpen ? 'open' : ''}`} ref={offcanvasRef}>
        <button className='close-button' onClick={toggleMenu}>
          &times;
        </button>

        <div className='offcanvas-logo'>
          <Image src={logo} alt='Logo' />
        </div>
        
        <Link href='/courses' className='link' onClick={toggleMenu}>
          Courses
        </Link>
        <Link href='/blog' className='link' onClick={toggleMenu}>
          Blog
        </Link>
        <Link href='/admin' className='link' onClick={toggleMenu}>
          Admin
        </Link>
        <Link href='/login' className='link' onClick={toggleMenu}>
          Login
        </Link>
      </div>

      {isOpen && <div className='backdrop' onClick={toggleMenu}></div>}
    </>
  );
};

export default OffcanvasMenu;