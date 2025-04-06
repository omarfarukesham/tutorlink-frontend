// src/pages/index.tsx

import BestTutor from '@/components/client/BestTutor';
import BeTutor from '@/components/client/BeTutor';
import FeatureSubject from '@/components/client/FeatureSubject';
import Subscribe from '@/components/client/Subscribe';
import BrowseCategory from '@/components/client/TopCategory';
import UtilityBar from '@/components/client/UtilityBar';
import Hero from '@/components/Hero';
import TestimonialPage from '@/components/Testimonial';
import ClientLayout from '@/layouts/ClientLayout';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the TutorLink!',
};

export default function Home() {
  return (
    <> 
      <Head>
        <title>TutorLink | Home</title>
        <meta name="description" content="Welcome to TutorLink, your gateway to personalized learning and expert tutoring." />
      </Head>
    <ClientLayout>
        <div className="lg:w-[90%] mx-auto  min-h-screen">
          <UtilityBar />
          <Hero />
          <BrowseCategory />
          <BestTutor />
          <TestimonialPage />
          <FeatureSubject />
          <BeTutor />
          <Subscribe />
        </div>
    </ClientLayout>
    </>
  );
}
