import React from 'react'
import tutor from '../../assets/joinNow2.png'
import Image from 'next/image'
import Link from 'next/link';

export default function BeTutor() {
  const steps = [
    "Create your tutor profile by providing your qualifications and expertise",
    "Choose subjects you're passionate about and set your availability",
    "Create engaging course content and set your pricing",
    "Start teaching students and earn money on your schedule"
  ];

  return (
    <div className='w-full  mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 mb-10'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* Become Instructor Card */}
        <div className='flex flex-col md:flex-row bg-gradient-to-br from-gray-800 to-purple-700'>
            <div className='md:w-1/2 relative md:h-auto hidden md:block '>
              <Image 
                src={tutor} 
                alt="Happy teacher tutoring a student" 
                className="w-full h-full object-fit "
                priority
                
              />
            </div>
            <div className='md:w-1/2 p-6 md:p-8 flex flex-col justify-center'>
              <h2 className='text-2xl font-bold text-white mb-3'>Become an Instructor</h2>
              <p className='text-purple-100 mb-6'>
                Share your knowledge with students worldwide and earn money by teaching what you love.
              </p>
              <Link 
                href="/tutor-apply" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
              >
                Start Teaching Today
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
        </div>

        {/* Teaching Steps */}
        <div className='bg-white shadow-xl p-6 md:p-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2 text-center'>Your Teaching Journey</h2>
          <p className='text-gray-600 text-center mb-8'>Get started in just a few simple steps</p>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className='flex items-start gap-4'>
                <div className='flex-shrink-0 bg-purple-100 text-purple-700 rounded-full w-8 h-8 flex items-center justify-center font-medium'>
                  {index + 1}
                </div>
                <p className='text-gray-700'>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}