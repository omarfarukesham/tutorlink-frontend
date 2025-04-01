import React from 'react'
import tutor from '../../assets/tutor2.jpg'
import Image from 'next/image'


export default function BeTutor() {
  return (
    <div className='bg-white p-4 flex justify-between gap-6'>
        <div className='flex flex-col lg:flex-row gap-4 items-center justify-between bg-orange-600 text-white'>
                       
            <div className='flex items-center gap-2'>
            <Image src={tutor} alt="teacher" className="w-full h-64 object-cover"/> 
            </div>
            <div className='p-4'>
                <h1>Become an Instructor</h1>
                <p>Become a certified teacher in a few easy steps and earn money by teaching students.</p>
                <a href="/become-tutor" className="text-green-500 underline flex items-center gap-2 bg-white p-2 rounded">
                    Start Teaching
                </a>
            </div>
 
            
        </div>
        <div className='flex flex-col gap-6 items-center justify-between bg-gray-100 p-4'>
            <h1 className="text-3xl font-bold text-center ">Your Teaching and Earning Steps</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className='flex justify-between items-center gap-4'>
                    <p className='bg-purple-100 rounded-full p-2'>1</p>
                    <small>Choose a subject you are passionate about and create a personalized curriculum.</small>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <p className='bg-purple-100 rounded-full p-2'>2</p>
                    <small>Choose a subject you are passionate about and create a personalized curriculum.</small>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <p className='bg-purple-100 rounded-full p-2'>3</p>
                    <small>Choose a subject you are passionate about and create a personalized curriculum.</small>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <p className='bg-purple-100 rounded-full p-2'>4</p>
                    <small>Choose a subject you are passionate about and create a personalized curriculum.</small>
                </div>
            </div>
        </div>
    </div>
  )
}
