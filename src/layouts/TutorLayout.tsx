import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const TutorLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  console.log(user)
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
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default TutorLayout;