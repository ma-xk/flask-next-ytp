import Image from 'next/image';
import Link from 'next/link';
import reddit from '../../../assets/images/reddit.png';
import twitter from '../../../assets/images/twitter.png';
import facebook from '../../../assets/images/facebook.png';
import SubscribeForm from '../../common/SubscribeForm';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white mt-auto py-8'>
      <div className='container mx-auto max-w-screen-xl px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {/* Product Section */}
          <div className='flex flex-col'>
            <h5 className='text-gray-600 mb-4'>Product</h5>
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
          <div className='flex flex-col'>
            <h5 className='text-gray-600 mb-4'>Information</h5>
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
          <div className='flex flex-col'>
            <h5 className='text-gray-600 mb-4'>Company</h5>
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
      <div className='container mx-auto max-w-screen-xl px-4 mt-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border-t-2 pt-2'>
          {/* Logo Section */}
          <div className='flex items-center md:col-span-1'>
            <div className='text-2xl font-bold'>LFT</div>
          </div>

          {/* Links Section */}
          <div className='flex items-center md:col-span-1'>
            <div className='flex space-x-4'>
              <Link href='/terms' className='text-white hover:text-yellow-500 md:ml-0 md:mr-4'>Terms</Link>
              <Link href='/privacy' className='text-white hover:text-yellow-500 md:ml-0 md:mr-4'>Privacy</Link>
              <Link href='/cookies' className='text-white hover:text-yellow-500 md:ml-0 md:mr-4'>Cookies</Link>
            </div>
          </div>

          {/* Social Section */}
          <div className='flex items-center space-x-4 md:col-span-1'>
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
    </footer>
  );
};

export default Footer;
