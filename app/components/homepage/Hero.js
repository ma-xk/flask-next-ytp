import car from '../blog/car.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-6'>
      <div className='md:mr-6 space-y-4'>
        <h1 className='text-4xl font-bold'>eLearning & Training Providers</h1>
        <h2 className='text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
        </h2>
        <h3 className='text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
        </h3>
        <div className="mb-4"> {/* Added margin-bottom to this container */}
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'>
            Click Me!
          </button>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center'>
        <Image
          src={car}
          alt='Car Image'
          className='md:max-w-xs lg:max-w-md xl:max-w-lg hidden md:block'
        />
      </div>
    </div>
  );
};

export default Hero;