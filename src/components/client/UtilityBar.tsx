import { useAppDispatch } from '@/hooks/hooks';
import { setFilters, setSearchQuery } from '@/services/tutorSlice';
import React, { useState } from 'react';
import { FaBell, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

const UtilityBar = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [searchInput, setSearchInput] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('Tutor');
    
    const handleSearch = () => {
        if (searchInput) {
          dispatch(setSearchQuery(searchInput));
          
          router.push({
            pathname: '/tutor-list',
            query: { 
              search: searchInput,
              category: selectedFilter === 'Subject' ? searchInput : undefined,
            },
          });
  
          // Update specific filters
          if (selectedFilter === 'Subject') {
            dispatch(setFilters({ category: searchInput }));
          }
        }
      };
    
      const handleFilterSelect = (filter: string) => {
        setSelectedFilter(filter);
        setSearchInput('');
        dispatch(setSearchQuery(''));
        
        if (filter !== 'Subject') {
          dispatch(setFilters({ category: '' }));
        }
      };

    return (
      <div className='flex flex-col sm:flex-row justify-between items-center bg-gradient-to-br from-gray-800 to-purple-600 p-4 space-y-4 sm:space-y-0 text-white'>
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          {/* Browser Dropdown */}
          <div className="relative group w-full sm:w-auto">
            <button className="flex items-center justify-center w-full sm:w-auto gap-1 hover:bg-white/10 px-3 py-2 rounded-lg transition-all">
              <span>{selectedFilter}</span>
              <RiArrowDropDownLine className="text-xl" />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-full sm:w-48 z-10">
              <ul className="py-2">
                {['Tutor', 'Subject'].map((item) => (
                  <li 
                    key={item}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center sm:text-left"
                    onClick={() => handleFilterSelect(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center w-full sm:w-auto">
            <input
              type="text"
              placeholder={`Search ${selectedFilter.toLowerCase()}...`}
              className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] px-3 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <FaSearch 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" 
              onClick={handleSearch}
              onMouseEnter={handleSearch}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='flex gap-6 items-center justify-center sm:justify-end mt-4 sm:mt-0'>
          {/* Icons for larger screens */}
          <div className="hidden sm:flex items-center gap-6">
            {/* Notification Icon */}
            <div className="relative cursor-pointer">
              <FaBell className="text-xl hover:text-purple-200 transition-all" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>

            {/* Favorite Icon */}
            <div className="cursor-pointer">
              <FaHeart className="text-xl hover:text-purple-200 transition-all" />
            </div>

            {/* Cart Icon */}
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-xl hover:text-purple-200 transition-all" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex sm:hidden items-center gap-4">
            <FaBell className="text-xl" />
            <FaHeart className="text-xl" />
            <FaShoppingCart className="text-xl" />
          </div>
        </div>
      </div>
    );
};

export default UtilityBar;