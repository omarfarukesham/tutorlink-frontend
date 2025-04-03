// components/TutorCard.tsx
import React from 'react';
import { Tutor } from '@/types/tutor';

interface TutorCardProps {
  tutor: Tutor;
  onClick: () => void;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
       
        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {tutor.earnings} ★
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{tutor?.user?.name}</h3>
        <p className="text-gray-600 text-sm mb-2">7 years experience</p>
        <p className="text-gray-700 mb-3 line-clamp-2">{tutor.bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tutor.subjects.slice(0, 3).map((subject, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
              {String(subject)}
            </span>
          ))}
          {tutor.subjects.length > 3 && (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              +{tutor.subjects.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-purple-600">${tutor.hourlyRate}/hr</span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;