import car from '/app/components/blog/car.png';

const Hero = () => {
    return (
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">eLearning & Training Providers</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Click Me!
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
        <img src={car} alt="Car Image" className="max-w-xs md:max-w-sm" />
                </div>
      </div>
    );
  };
  
  export default Hero;
