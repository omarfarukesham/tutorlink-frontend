import Image from 'next/image';
import profileImg from '@/assets/hero.png'
import {  useRouter } from 'next/router';

const Hero = () => {
 const router = useRouter();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  bg-gray-50 py-5 p-2">
      {/* Left Side: Text */}
      <div className="md:w-1/3 lg:w-1/2 space-y-6 lg:ml-10">
        <h1 className="text-4xl font-bold text-gray-900">
        Learn with expert <br />
        anytime anywhere
        </h1>
        <p className="text-lg text-gray-600">
        Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
        </p>
        <button onClick={() => router.push('/client/register')} className="bg-gradient-to-br from-gray-800 to-purple-600 hover:opacity-90 hover:shadow-lg transform hover:scale-[1.04] transition-all duration-200 p-2 text-white rounded-md">
          Create Account
        </button>
      </div>

      <div className="hidden lg:block  lg:w-1/2">
        <Image
          src={profileImg} 
          alt="Your Name"
          width={600}
          height={400}
          className=""
        />
    </div>
    </section>
  );
};

export default Hero;