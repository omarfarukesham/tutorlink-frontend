// src/layouts/TutorLayout.tsx

import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
// import TutorSidebar from '@/components/tutor/TutorSidebar';

type Props = {
  children: ReactNode;
};

export default function TutorLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 p-4 bg-gray-50">{children}</div>
    </div>
  );
}
