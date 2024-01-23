import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/global/Footer/Footer';
import Navbar from './components/global/Navbar/Navbar';
import Spacer from './components/global/Spacer/Spacer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'eLearn',
  description: 'The best eLearning platform on earth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='app'>
          <Navbar />
          <Spacer />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
