import Image from 'next/image';
import Link from 'next/link';
import reddit from '/public/assets/images/reddit.png';
import twitter from '/public/assets/images/twitter.png';
import facebook from '/public/assets/images/facebook.png';
import SubscribeForm from '../../common/SubscribeForm';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container mx-auto max-w-screen-xl px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {/* Product Section */}
          <div className='footer-section'>
            <h5>Product</h5>
            <ul>
              <li>
              <Link href='/courses' className='link'>Courses</Link>
              </li>
              <li>
              <Link href='/services' className='link'>Services</Link>
              </li>
              <li>
              <Link href='/support' className='link'>Support</Link>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className='footer-section'>
            <h5>Information</h5>
            <ul>
              <li>
              <Link href='/faq' className='link'>FAQ</Link>
              </li>
              <li>
              <Link href='/blog' className='link'>Blog</Link>
              </li>
              <li>
              <Link href='/support' className='link'>Support</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className='footer-section'>
            <h5>Company</h5>
            <ul>
              <li>
                <Link href='/about' className='link'>About Us</Link>
              </li>
              <li>
                <Link href='/contact' className='link'>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <SubscribeForm />
        </div>
      </div>

      {/* Bottom Section */}
      <div className='container mx-auto max-w-screen-xl px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* Logo Section */}
          <div className='footer-bottom'>
            <div className='logo'>LFT</div>
          </div>

          {/* Links Section */}
          <div className='footer-bottom'>
            <div className='footer-links'>
              <Link className='footer-links-bottom' href='/terms'>Terms</Link>
              <Link className='footer-links-bottom' href='/privacy'>Privacy</Link>
              <Link className='footer-links-bottom' href='/cookies'>Cookies</Link>
            </div>
          </div>

          {/* Social Section */}
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
      </div>
    </footer>
  );
};

export default Footer;
