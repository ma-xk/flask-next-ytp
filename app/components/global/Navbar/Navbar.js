'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';
import logo from '../../../assets/images/logo.png';

const Navbar = ({ toggleMenu }) => {
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

          <div className='links'>
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
      </div>
    </nav>
  );
};

export default Navbar;