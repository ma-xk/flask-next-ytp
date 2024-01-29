'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offcanvasRef = useRef(); // Ref for the offcanvas menu

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        offcanvasRef.current &&
        !offcanvasRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between p-4'>
          <div className='logo'>
            <Link href='/'>
              <Image src={logo} alt='Logo' className='navbar-logo' />
            </Link>
          </div>

          <button className='hamburger' onClick={toggleMenu}>
            &#9776;
          </button>

          <div className={`links ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href='/courses' className='link'>
              Courses
            </Link>
            <Link href='/blog' className='link'>
              Blog
            </Link>
            <Link href='/admin' className='link'>
              Admin
            </Link>
            <Link href='https://courses.yourtrainingprovider.com/' className='link'>
              Login
            </Link>

          </div>
        </div>

        <div
          className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}
          ref={offcanvasRef}
        >
          <button className='close-button' onClick={toggleMenu}>
            &times;
          </button>

          <div className='offcanvas-logo'>
            <Image src={logo} alt='Logo' />
          </div>
          <Link href='/courses' className='link'>
            Courses
          </Link>
          <Link href='/blog' className='link' onClick={toggleMenu}>
            Blog
          </Link>
          <Link href='/admin' className='link' onClick={toggleMenu}>
            Admin
          </Link>
          <Link href='/login' className='link'>
            Login
          </Link>
        </div>

        <div
          className={`backdrop ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;