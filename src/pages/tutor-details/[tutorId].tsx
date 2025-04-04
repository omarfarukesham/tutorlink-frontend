import ClientLayout from '@/layouts/ClientLayout'
import { useRouter } from 'next/router';
import React from 'react'

export default function TutorDetailsPage() {
    const router = useRouter();
    const { tutorId } = router.query;

  return (
   <ClientLayout>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Tutor Details {tutorId}</h1>
            {/* Add your tutor details content here */}
            <p>This is the Tutor Details Page.</p>
        </div>
   </ClientLayout>
  )
}
