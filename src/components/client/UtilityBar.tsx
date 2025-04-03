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
      <div className='flex justify-between items-center bg-gradient-to-br from-gray-800 to-purple-600 p-4 text-white'>
        {/* Left Section */}
        <div className="flex gap-4 items-center">
          {/* Browser Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:bg-white/10 px-3 py-2 rounded-lg transition-all">
              <span>{selectedFilter}</span>
              <RiArrowDropDownLine className="text-xl" />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-48 z-10">
              <ul className="py-2">
                {['Tutor', 'Subject'].map((item) => (
                  <li 
                    key={item}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleFilterSelect(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder={`Search ${selectedFilter.toLowerCase()}...`}
              className="px-3 py-2 lg:w-[400px] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <FaSearch 
              className="absolute left-3 top-3 text-gray-500 cursor-pointer" 
              onClick={handleSearch}
              onMouseEnter={handleSearch}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='flex gap-4 sm:gap-6 items-center'>
          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <FaBell className="text-xl hover:text-purple-200 transition-all" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </div>

          {/* Favorite Icon */}
          <div className="cursor-pointer">
            <FaHeart className="text-xl hover:text-purple-200 transition-all" />
          </div>

          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-xl hover:text-purple-200 transition-all" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">5</span>
          </div>
        </div>
      </div>
    );
};

export default UtilityBar;