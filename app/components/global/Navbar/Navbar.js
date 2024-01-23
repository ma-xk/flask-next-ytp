'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-grid-system';
import './navbar.css';
import logo from '/public/assets/images/logo.png';

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
      <Container className='nav-content'>
        <div className='logo'>
          <Link href='/'>
            <Image src={logo} alt='Logo' className='navbar-logo' />
          </Link>
        </div>

        <button className='hamburger' onClick={toggleMenu}>
          &#9776;
        </button>

        <div className={`links ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href='/blog' className='link'>
            Blog
          </Link>
          <Link href='/admin' className='link'>
            Admin
          </Link>
          <Link href='/login' className='link'>
            Login
          </Link>
        </div>
      </Container>

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

        <Link href='/blog' className='link' onClick={toggleMenu}>
          Blog
        </Link>
        <Link href='/admin' className='link' onClick={toggleMenu}>
          Admin
        </Link>
      </div>

      <div
        className={`backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      ></div>
    </nav>
  );
};

export default Navbar;