// src/layouts/StudentLayout.tsx

// src/layouts/AdminLayout.tsx

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import NotFoundPage from '@/pages/not-found';
// import LoadingPage from '@/pages/loading';

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  console.log(user);
  
 

  useEffect(() => {
    if (!user || user.role !== 'student') {
      router.push('/client/login');
    }
  }, [user, router]);
 

  if (!user || user.role !== 'student') {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};


export default StudentLayout;



