import { Heart, BookOpen, Users, Video, Feather, ShoppingCart } from 'lucide-react';
import React from 'react';

// Fake data for categories
const categories = [
  {
    id: 1,
    name: 'Teachers',
    count: '200+',
    icon: <Heart size={32} className="text-rose-500" />,
    bgColor: 'bg-rose-50',
  },
  {
    id: 2,
    name: 'Articles',
    count: '500+',
    icon: <BookOpen size={32} className="text-green-500" />,
    bgColor: 'bg-green-50',
  },
  {
    id: 3,
    name: 'Students',
    count: '10M+',
    icon: <Users size={32} className="text-blue-500" />,
    bgColor: 'bg-blue-50',
  },
  {
    id: 4,
    name: 'Videos',
    count: '1200+',
    icon: <Video size={32} className="text-purple-500" />,
    bgColor: 'bg-yellow-50',
  },
  {
    id: 5,
    name: 'Feedback',
    count: '10k+',
    icon: <Feather size={32} className="text-orange-500" />,
    bgColor: 'bg-orange-50',
  },
  {
    id: 6,
    name: 'Sales Course',
    count: '120k+',
    icon: <ShoppingCart size={32} className="text-bule-500" />,
    bgColor: 'bg-green-50',
  },
];

const BrowseCategory = () => {
  return (
    <div className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center my-10">Browse Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.bgColor} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4`}
          >
            <div className="flex-shrink-0">{category.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
              <p className="text-gray-600">{category.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCategory;