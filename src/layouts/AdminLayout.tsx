// src/layouts/AdminLayout.tsx

// src/layouts/StudentLayout.tsx

// src/layouts/AdminLayout.tsx

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store';
import Navbar from '@/components/client/Navbar';
import Sidebar from '@/components/Sidebar';
import NotFoundPage from '@/pages/not-found';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/client/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'admin') {
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







export default AdminLayout;


