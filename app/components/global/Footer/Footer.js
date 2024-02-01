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
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {/* Product Section */}
          <div className='flex flex-col'>
            <h5 className='text-gray-600 mb-4'>Product</h5>
            <ul>
              <li>
                <Link href='/courses'>Courses</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/support'>Support</Link>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className='flex flex-col'>
            <h5 className='text-gray-600 mb-4'>Information</h5>
            <ul>
              <li>
                <Link href='/faq'>FAQ</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/support'>Support</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className='flex flex-col'>
            <h5 className='text-gray-600 mb-4'>Company</h5>
            <ul>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
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
            <div className='flex '>
              <Link href='/terms' className='text-white hover:text-yellow-500 ml-0 mr-4'>Terms</Link>
              <Link href='/privacy' className='text-white hover:text-yellow-500 ml-0 mr-4'>Privacy</Link>
              <Link href='/cookies' className='text-white hover:text-yellow-500 ml-0 mr-4'>Cookies</Link>
            </div>
          </div>

          {/* Social Section */}
          <div className='flex items-center '>
            <Link href='https://reddit.com'>
              <Image className='w-12' src={reddit} alt='Reddit Icon' />
            </Link>
            <Link href='https://facebook.com'>
              <Image className='w-12' src={facebook} alt='Facebook Icon' />
            </Link>
            <Link href='https://twitter.com'>
              <Image className='w-12' src={twitter} alt='Twitter Icon' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
