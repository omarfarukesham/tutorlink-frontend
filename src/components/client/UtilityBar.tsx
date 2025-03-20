import React from 'react';
import { FaBell, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

const UtilityBar = () => {
    return (
        <div className='flex  justify-between items-center bg-gradient-to-br from-gray-800 to-purple-600 p-4 text-white'>
            {/* Left Section */}
            <div className="flex gap-4 items-center">
                {/* Browser Dropdown */}
                <div className="relative group">
                    <button className="flex items-center gap-1 hover:bg-white/10 px-3 py-2 rounded-lg transition-all">
                        <span>Browser</span>
                        <RiArrowDropDownLine className="text-xl" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-48">
                        <ul className="py-2">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 1</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 2</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 3</li>
                        </ul>
                    </div>
                </div>

                {/* Search Bar (Visible only on lg screens and above) */}
                <div className="hidden lg:block">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-3 py-2 lg:w-[400px] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
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