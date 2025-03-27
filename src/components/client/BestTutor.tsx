import Image from 'next/image';
import React from 'react';
import teacher1 from '../../assets/teacher2.png'; 
import teacher from '../../assets/teacher.png'; 
// import { Router } from 'next/router';

// Fake data for tutors
const tutors = [
  {
    id: 1,
    name: 'John Doe',
    subject: 'Math and Physics',
    rating: 4.5,
    impact: '250k students',
    price: '$30/hour',
    image: teacher1,
    expertise: 'Science',
  },
  {
    id: 2,
    name: 'Jane Smith',
    subject: 'Chemistry and Biology',
    rating: 4.8,
    impact: '180k students',
    price: '$35/hour',
    image: teacher, // Replace with appropriate image
    expertise: 'Science',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    subject: 'Computer Science',
    rating: 4.7,
    impact: '300k students',
    price: '$40/hour',
    image: teacher1, // Replace with appropriate image
    expertise: 'Technology',
  },
  {
    id: 4,
    name: 'Michael Brown',
    subject: 'English Literature',
    rating: 4.6,
    impact: '150k students',
    price: '$25/hour',
    image: teacher, // Replace with appropriate image
    expertise: 'Humanities',
  },
  {
    id: 5,
    name: 'Michael Brown',
    subject: 'English Literature',
    rating: 4.6,
    impact: '150k students',
    price: '$25/hour',
    image: teacher, // Replace with appropriate image
    expertise: 'Humanities',
  },
  {
    id: 6,
    name: 'Michael Brown',
    subject: 'English Literature',
    rating: 4.6,
    impact: '150k students',
    price: '$25/hour',
    image: teacher, // Replace with appropriate image
    expertise: 'Humanities',
  },
];

const BestTutor = () => {

const handleTutor=(id: number) =>{
     console.log(id);

  }
  return (
    <div className="mx-auto  mb-10">
      <h1 className="text-3xl font-bold text-center mb-10">Best Tutors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="bg-gray-50 text-white  overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4"
          >
            <div className="">
              <Image
                src={tutor.image}
                alt={tutor.name}
                className='object-cover w-full h-full'
              />
            </div>
            <div className="p-4">
            <div className="flex justify-between items-center">
              <button className="bg-purple-100 text-black  text-sm font-semibold py-1 px-3 rounded">
                {tutor.expertise}
              </button>
              <p className="font-bold text-purple-500">{tutor.price}</p>
            </div>
            <h2 className="text-lg font-bold text-center">{tutor.subject}</h2>
            <div className="text-sm text-gray-600 flex justify-between pb-4">
              <p>Rating: {tutor.rating}</p>
              <p>Impact: {tutor.impact}</p>
            </div>
            <div className="flex justify-between items-center gap-5">
              <button className="text-xs underline text-purple-500 font-blod">
                See Bio
              </button>
              <button onClick={()=>handleTutor(tutor.id)} className="text-white bg-gray-800 px-4 py-1 rounded hover:bg-gradient-to-br from-gray-800 to-purple-600 hover:text-white">
                Booking
              </button>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestTutor;