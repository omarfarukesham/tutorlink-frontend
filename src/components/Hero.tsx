import Image from 'next/image';
import profileImg from '@/assets/devOmar.png'

const Hero = () => {
  return (
    <section className=" w-full mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-gray-50">
      {/* Left Side: Text */}
      <div className="md:w-1/3 space-y-6 lg:ml-20">
        <h1 className="text-4xl font-bold text-gray-900">
          Assalamu Alaikum, Im Omar Faruk
        </h1>
        <p className="text-lg text-gray-600">
          Im a passionate web and mobile developer with expertise in building modern, responsive, and user-friendly applications. I love turning ideas into reality through code.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          View My Work
        </button>
      </div>

      {/* Right Side: Image */}
      {/* <div className="md:w-1/3 mt-8 md:mt-0">
        <Image
          src={profileImg} 
          alt="Your Name"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div> */}


      <div className="relative lg:w-96 lg:h-96 dark:bg-[#B0C4DE] rounded-lg shadow-lg lg:mr-20">
        {/* Frame */}
        {/* <div className="absolute inset-0 bg-gray-300 transform -rotate-6 rounded-lg shadow-lg border-4 border-gray-900"></div> */}
        
        {/* Image */}
        <div className="absolute inset-3 transform hover:scale-105 duration-300 -rotate-6 overflow-hidden rounded-lg border-2 border-gray-900 bg-gray-100">
        <Image
          src={profileImg} 
          alt="Your Name"
          width={400}
          height={350}
          className="rounded-lg shadow-lg"
        />
        </div>
    </div>
    </section>
  );
};

export default Hero;