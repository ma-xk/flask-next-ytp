import car from '../blog/car.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center p-6'>
      <div className='md:w-5/12 space-y-4 mb-4'>
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
      <div className='md:w-7/12 flex justify-center'>
        <Image
          src={car}
          alt='Car Image'
          width={500} // Adjust the width to match your design
          height={300} // Adjust the height to match your design
          layout="responsive"
          className='max-w-xs md:max-w-sm'
        />
      </div>
    </div>
  );
};

export default Hero;