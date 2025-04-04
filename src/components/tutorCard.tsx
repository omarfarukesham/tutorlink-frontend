// components/TutorCard.tsx
import { Availability, Tutor } from '@/types/tutor';
import React from 'react';





interface TutorCardProps {
  tutor: Tutor;
  onClick: () => void;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor, onClick }) => {
  const formatAvailability = (availability: Availability[]) => {
    if (!availability || availability.length === 0) return 'Not available';
    
    const days = availability.map(a => a.day.substring(0, 3));
    const uniqueDays = [...new Set(days)]; // Remove duplicates
    return `Available: ${uniqueDays.join(', ')}`;
  };

  // Calculate experience (placeholder - you might want to get this from tutor data)
  const calculateExperience = () => {
    const createdAt = new Date(tutor.createdAt);
    const now = new Date();
    const diffYears = now.getFullYear() - createdAt.getFullYear();
    return diffYears > 0 ? `${diffYears}+ years experience` : 'New tutor';
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {(tutor.user.name).toUpperCase()} 
            </h3>
            <p className="text-gray-500 text-sm mb-2">{calculateExperience()}</p>
          </div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            ${tutor.hourlyRate}/hr
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{(tutor.bio).slice(0,100)}...</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Teaches:</h4>
          <div className="flex flex-wrap gap-2">
            {tutor.subjects.slice(0, 3).map((subject) => (
              <span 
                key={subject._id}
                className="bg-green-50 text-gray-800 text-xs px-3 py-1 rounded-full"
              >
                {subject.name} ({subject.gradeLevel})
              </span>
            ))}
            {tutor.subjects.length > 3 && (
              <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                +{tutor.subjects.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Availability:</h4>
          <p className="text-gray-600 text-sm">{formatAvailability(tutor.availability)}</p>
          {tutor.availability.length > 0 && (
            <p className="text-gray-500 text-xs mt-1">
              {tutor.availability[0].startTime} - {tutor.availability[0].endTime}
            </p>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">
              ★ {tutor.earnings || 'New'}
            </span>
          </div>
          <button 
           className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;