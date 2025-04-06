import ClientLayout from '@/layouts/ClientLayout';
import React from 'react';
import { useGetTutorsQuery } from '@/services/tutorService';
import { useRouter } from 'next/router';
import TutorCard from '@/components/tutorCard';
import Loader from './tutor/isLoading';
import Head from 'next/head';

export default function TutorListPage() {
  const router = useRouter();
  // const { searchQuery, filters } = useAppSelector((state) => state.tutor);
  const { search, filter } = router.query;

  const apiParams = {
    search: search as string,
    filter: filter as string,
  };
  const { data: tutors = [], isLoading, isError } = useGetTutorsQuery(apiParams);
  console.log(tutors)

  const handleTutorClick = (tutorId: string) => {
    router.push(`/tutor-details/${tutorId}`);
  };

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading tutors</div>;

  return (
    <> 
    <Head>
        <title>Tutor | TutorLink</title>
        <meta name="description" content="Browse our qualified tutors and find the perfect match for your learning needs" />
      </Head>
    <ClientLayout>
      <div className="container mx-auto px-4 py-8">
      {/* <FilterSidebar /> */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Tutor Results</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <TutorCard 
                key={tutor._id} 
                tutor={tutor} 
                onClick={() => handleTutorClick(tutor._id)}
              />
            ))}
          </div>
          
          {tutors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tutors found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </ClientLayout>
    </>
  );
}


