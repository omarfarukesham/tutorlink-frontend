import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaCheckCircle } from 'react-icons/fa';
import tutor1 from '@/assets/tutor4.jpg';
import tutor2 from '@/assets/tutor5.jpg';
import tutor3 from '@/assets/tutor3.jpg';
import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Hero = () => {
  const router = useRouter();

  const benefits = [
    "Find Expert Tutors in Minutes",
    "Secure & Transparent Payments",
    "Verified Professional Profiles",
    "Flexible Learning Schedule"
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });

  // Auto-play functionality
  const autoplay = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    const timer = setInterval(autoplay, 3000);
    return () => clearInterval(timer);
  }, [autoplay]);

  return (
    <section className="min-h-[65vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 space-y-8 px-12">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why TutorLink? 
            <span className="text-purple-600 ml-2">🎓</span>
          </h1>
        </div>

        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center space-x-3">
              <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-purple-600" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <button 
            onClick={() => router.push('/client/register')} 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            Get Started Now
            <svg 
              className="ml-2 -mr-1 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

        {/* Right Side: Image Carousel */}
        <div className="hidden lg:block lg:w-1/2 mt-10 md:mt-0">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[tutor1, tutor2, tutor3].map((image, index) => (
              <div 
                key={index} 
                className="relative flex-[0_0_80%] min-w-0 p-2"
              >
                <div className="absolute -inset-4  opacity-20"></div>
                <Image
                  src={image}
                  alt={`TutorLink Platform Preview ${index + 1}`}
                  width={600}
                  height={400}
                  className="relative rounded-md  transition-transform duration-300"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;