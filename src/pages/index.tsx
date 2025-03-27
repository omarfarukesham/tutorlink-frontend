// src/pages/index.tsx

import BestTutor from '@/components/client/BestTutor';
import FeatureSubject from '@/components/client/FeatureSubject';
import BrowseCategory from '@/components/client/TopCategory';
import UtilityBar from '@/components/client/UtilityBar';
import Hero from '@/components/Hero';
import ClientLayout from '@/layouts/ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the TutorLink!',
};

export default function Home() {
  return (
    <ClientLayout>
        <div className="lg:w-[90%] mx-auto  min-h-screen">
          <UtilityBar />
          <Hero />
          <BrowseCategory />
          <BestTutor />
          <FeatureSubject />
        </div>
    </ClientLayout>
  );
}
