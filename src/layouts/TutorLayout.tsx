import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store';
import Navbar from '@/components/client/Navbar';
import TutorSidebar from '@/components/tutor/tutorSidebar';

const TutorLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is not logged in or does not have the correct role
    if (!user || (user.role !== 'tutor' && user.role !== 'admin')) {
      router.push('/client/login');
    }
  }, [user, router]);

  // If the user is not logged in or does not have the correct role, return null
  if (!user || (user.role !== 'tutor' && user.role !== 'admin')) {
    return null;
  }

  return (
    <> 
    <head>
      <title>Tutor || Dashboard</title>
      <meta name="description" content="Tutor Dashboard" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <TutorSidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
    </>
   
  );
};

export default TutorLayout;