// src/layouts/StudentLayout.tsx

// src/layouts/AdminLayout.tsx

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store';
import Navbar from '@/components/client/Navbar';
import NotFoundPage from '@/pages/not-found';
import StudentSidebar from '@/components/student/studentSidebar';
// import LoadingPage from '@/pages/loading';

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  
 

  useEffect(() => {
    if (!user || user.role !== 'student') {
      router.push('/client/login');
    }
  }, [user, router]);
 

  if (!user || user.role !== 'student') {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-green-50">
    <Navbar />
    <div className="flex">
      <StudentSidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  </div>
  );
};


export default StudentLayout;



