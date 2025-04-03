// components/FilterSidebar.tsx
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useGetTutorsQuery } from '@/services/tutorService';
import { setFilters } from '@/services/tutorSlice';
import React from 'react';


const FilterSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.tutor);
  const { data: tutors = [] } = useGetTutorsQuery({});
  
  // Get all unique subjects for filter options
  const allSubjects: string[] = [...new Set(tutors.flatMap(tutor => 
    tutor.subjects.map(subject => subject.name)
  ))].sort();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({
      [name]: name === 'minRate' || name === 'maxRate' ? Number(value) : value
    }));
  };

  return (
    <div className="w-full lg:w-64 bg-white p-4 rounded-lg shadow-md h-fit sticky top-4">
    <h2 className="text-xl font-bold mb-4">Filters</h2>
    
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
      <select
        name="subject"
        value={filters.subject}
        onChange={handleFilterChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Categories</option>
        {allSubjects.map((subject: string, index: number) => (
          <option key={index} value={subject}>{subject}</option>
        ))}
      </select>
    </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate ($)</label>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="number"
            name="minRate"
            placeholder="Min"
            value={filters.minRate}
            onChange={handleFilterChange}
            min="0"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <span>to</span>
          <input
            type="number"
            name="maxRate"
            placeholder="Max"
            value={filters.maxRate}
            onChange={handleFilterChange}
            min="0"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      <button
        onClick={() => {
          dispatch(setFilters({
            searchQuery: '',
            subject: '',
            minRate: 0,
            maxRate: 100
          }));
        }}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;