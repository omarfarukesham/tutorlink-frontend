'use client'
import Image from 'next/image'
import React from 'react'
import math from '../../assets/subjects/math.png'
import avator from  '../../assets/avator.png'
import { BookUpIcon, RadioTowerIcon, TimerIcon } from 'lucide-react'

const featureSubjects = [
  {
    id: 1,
    title: 'Math',
    price: '$14.00',
    description: 'This is Modern books for learning math from zero to advance',
    author: 'Kevin Gilbert',
    authorImg: avator,
    rating: '5.0 (23456)',
    students: '265.6k Students',
    level: 'Beginner',
    duration: '6 hours',
    image: math,
  },
  {
    id: 2,
    title: 'Physics',
    price: '$18.00',
    description: 'Learn the fundamentals of physics with practical examples',
    author: 'Sarah Johnson',
    authorImg: avator,
    rating: '4.8 (19876)',
    students: '150.3k Students',
    level: 'Intermediate',
    duration: '8 hours',
    image: math,
  },
  {
    id: 3,
    title: 'Chemistry',
    price: '$12.00',
    description: 'Master chemistry concepts with easy-to-follow guides',
    author: 'Michael Brown',
    authorImg: avator,
    rating: '4.9 (15678)',
    students: '200.1k Students',
    level: 'Beginner',
    duration: '5 hours',
    image: math,
  },
  {
    id: 4,
    title: 'Biology',
    price: '$16.00',
    description: 'Explore the wonders of biology with interactive lessons',
    author: 'Emily Davis',
    authorImg: avator,
    rating: '4.7 (12345)',
    students: '180.4k Students',
    level: 'Advanced',
    duration: '7 hours',
    image: math,
  },
];

export default function FeatureSubject() {
  return (
    <div className='my-8'>
      <h1 className="text-3xl font-bold text-center mb-10">Popular Subjects</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {featureSubjects.map(subject => (
          <div key={subject.id} className='flex gap-4 flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-md'>
            <Image 
                src={subject.image} 
                alt={subject.title} 
                className='w-full h-48 object-fit md:w-56 md:h-auto'
              />
            <div className='p-4 flex-1 flex-col justify-between'>
              <div>
                <div className='flex justify-between items-center mb-2'>
                  <button className='bg-green-100 text-sm px-3 py-1 rounded'>{subject.title}</button>
                  <p className='text-xl font-bold'>{subject.price}</p>
                </div>
                <p className='text-sm text-gray-700'>{subject.description.slice(0, 40)}...</p>
              </div>

              <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center gap-2'>
                  <Image 
                    src={subject?.authorImg} 
                    alt='author_img' 
                    className='w-8 h-8 rounded-full object-cover'
                  />
                  <p className='text-sm text-gray-600'>{subject.author}</p>
                </div>
                <p className='text-sm font-bold flex items-center gap-1'>
                  <span className='text-yellow-400'>⭐</span>
                  {subject.rating}
                </p>
              </div>

              <hr className='my-4 border-gray-300'/>

              <div className='flex  justify-between flex-wrap gap-4 text-gray-600 text-sm'>
                <span className='flex items-center gap-1'>
                  <BookUpIcon className='text-purple-800' size={16}/>
                  {subject.students}
                </span>
                <span className='flex items-center gap-1'>
                  <RadioTowerIcon className='text-purple-800' size={16}/>
                  {subject.level}
                </span>
                <span className='flex items-center gap-1'>
                  <TimerIcon className='text-purple-800' size={16}/>
                  {subject.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
