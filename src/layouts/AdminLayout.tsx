// src/layouts/AdminLayout.tsx

// src/layouts/StudentLayout.tsx

// src/layouts/AdminLayout.tsx

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store';
import Navbar from '@/components/client/Navbar';
import NotFoundPage from '@/pages/not-found';
import AdminSidebar from '@/components/admin/adminSidebar';

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
    <div className="min-h-screen bg-purple-50">
    <Navbar />
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  </div>
  );
};







export default AdminLayout;


