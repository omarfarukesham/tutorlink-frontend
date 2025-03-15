// src/layouts/StudentLayout.tsx

import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
// import StudentNav from '@/components/student/StudentNav';

type Props = {
  children: ReactNode;
};

export default function StudentLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
}
