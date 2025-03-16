// src/pages/index.tsx

import UtilityBar from '@/components/client/UtilityBar';
import Hero from '@/components/Hero';
import ClientLayout from '@/layouts/ClientLayout';
// import { Metadata } from 'next';

// const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to the Platform!',
// };

export default function Home() {
  return (
    <ClientLayout>
        <div className="container mx-auto bg-gray-100 ">
          <UtilityBar />
          <Hero />
        </div>
    </ClientLayout>
  );
}
