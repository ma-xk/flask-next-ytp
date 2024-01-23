'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-grid-system';
import './footer.css';
import reddit from '/public/assets/images/reddit.png';
import twitter from '/public/assets/images/twitter.png';
import facebook from '/public/assets/images/facebook.png';

const Footer = () => {
  function handleSumbit(e) {
    e.preventDefault();
    console.log('sumbit');
  }
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <div className='footer-section'>
              <h5>Product</h5>
              <ul>
                <li>Employee database</li>
                <li>Payroll</li>
                <li>Absences</li>
                <li>Time tracking</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className='footer-section'>
              <h5>Information</h5>
              <ul>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Support</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className='footer-section'>
              <h5>Company</h5>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Contact us</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className='footer-section subscribe-section'>
              <h5>Subscribe</h5>
              <form onSubmit={handleSumbit}>
                <input type='email' placeholder='Email address' />
                <button type='submit'>→</button>
              </form>
              <p>
                Hello, we are LFT Media. Our goal is to translate the positive
                effects from workouts to how companies engage with their clients
                & their teams.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className='footer-bottom'>
              <div className='logo'>LFT</div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className='footer-bottom'>
              <div className='footer-links'>
                <a href='/terms'>Terms</a>
                <a href='/privacy'>Privacy</a>
                <a href='/cookies'>Cookies</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <div className='footer-bottom'>
                <div className='footer-social'>
                  <Link href='https://reddit.com'>
                    <Image src={reddit} alt='Reddit Icon' />
                  </Link>
                  <Link href='https://facebook.com'>
                    <Image src={facebook} alt='Facebook Icon' />
                  </Link>
                  <Link href='https://twitter.com'>
                    <Image src={twitter} alt='Twitter Icon' />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
