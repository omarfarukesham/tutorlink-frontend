// src/layouts/AdminLayout.tsx

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ReactNode } from 'react';


type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

