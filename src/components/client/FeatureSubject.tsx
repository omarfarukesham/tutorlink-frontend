'use client'
import Image from 'next/image'
import React from 'react'
import math from '../../assets/subjects/math.png'
import { BookUpIcon, RadioTowerIcon, TimerIcon } from 'lucide-react'

const featureSubjects = [
  {
    id: 1,
    title: 'Math',
    price: '$14.00',
    description: 'This is Modern books for learning math from zero to advance',
    author: 'Kevin Gilbert',
    authorImg: '', // Replace with actual image path
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
    authorImg: '', // Replace with actual image path
    rating: '4.8 (19876)',
    students: '150.3k Students',
    level: 'Intermediate',
    duration: '8 hours',
    image: math, // Replace with actual image path
  },
  {
    id: 3,
    title: 'Chemistry',
    price: '$12.00',
    description: 'Master chemistry concepts with easy-to-follow guides',
    author: 'Michael Brown',
    authorImg: '', // Replace with actual image path
    rating: '4.9 (15678)',
    students: '200.1k Students',
    level: 'Beginner',
    duration: '5 hours',
    image: math, // Replace with actual image path
  },
  {
    id: 4,
    title: 'Biology',
    price: '$16.00',
    description: 'Explore the wonders of biology with interactive lessons',
    author: 'Emily Davis',
    authorImg: '', // Replace with actual image path
    rating: '4.7 (12345)',
    students: '180.4k Students',
    level: 'Advanced',
    duration: '7 hours',
    image: math, // Replace with actual image path
  },
];

export default function FeatureSubject() {
  return (
    <div className='my-8'>
        <h1>Feature Subject</h1>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2'>
          {featureSubjects.map(subject => (
            <div key={subject.id} className='flex gap-4 bg-slate-400 rounded-lg'>
                <Image src={subject.image} alt={subject.title} className='w-48 h-full object-fit'/>
                <div className='p-4'>
                   <div className='flex justify-between'>
                        <button className='bg-green-200 p-1'>{subject.title}</button>
                        <p>{subject.price}</p>
                   </div>
                   <p>{subject.description}</p>
                   <div className='flex justify-between'>
                      <div className='flex items-center gap-2'>
                        <Image src={subject?.authorImg} alt='author_img' className='w-8 h-8 rounded-full object-contain'/>
                        <p>{subject.author}</p>
                      </div>
                      <p>* {subject.rating}</p>
                   </div>
                   <br />
                   <div className='flex gap-4'>
                     <span className='flex gap-2'>
                        <BookUpIcon className='text-purple-800' size={16}/>
                        <p>{subject.students}</p>
                     </span>
                     <span className='flex gap-2'>
                        <RadioTowerIcon className='text-purple-800' size={16}/>
                        <p>{subject.level}</p>
                     </span>
                     <span className='flex gap-2'>
                        <TimerIcon className='text-purple-800' size={16}/>
                        <p>{subject.duration}</p>
                     </span>
                   </div>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}
