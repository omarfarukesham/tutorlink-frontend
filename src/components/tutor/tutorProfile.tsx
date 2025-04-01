import React from 'react';


const TutorProfile = () => {

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Profile Information</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 block mb-1">Full Name</label>
          </div>
          <div>
            <label className="text-gray-600 block mb-1">Email</label>
          </div>
          <div>
            <label className="text-gray-600 block mb-1">Role</label>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 block mb-1">Subjects</label>
            <p className="font-medium">Mathematics, Physics</p>
          </div>
          <div>
            <label className="text-gray-600 block mb-1">Experience</label>
            <p className="font-medium">5 years</p>
          </div>
          <div>
            <label className="text-gray-600 block mb-1">Status</label>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;