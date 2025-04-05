import ClientLayout from '@/layouts/ClientLayout'
import { useRouter } from 'next/router';
import React from 'react'
import { useGetSingleTutorQuery } from '@/services/tutorService';
import Image from 'next/image';
import Loader from '@/pages/tutor/isLoading';
import avator from '@/assets/avator.png';
import { FaBook, FaClock, FaDollarSign, FaEnvelope } from 'react-icons/fa';
import { BoxIcon } from 'lucide-react';

export default function TutorDetailsPage() {
    const router = useRouter();
    const { tutorId } = router.query;

    const {
        data: tutor,
        isLoading,
        error
    } = useGetSingleTutorQuery(tutorId as string);

    if (isLoading) return <Loader />;
    if (error) return <div>Error loading tutor details</div>;
    if (!tutor) return <div>No tutor found</div>;

    return (
        <ClientLayout>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-purple-600 to-gray-800 p-6 text-white">
                        <div className="flex items-center space-x-6">
                            <div className="relative h-24 w-24 rounded-full border-4 border-white overflow-hidden">
                                <Image 
                                    src={avator}
                                    alt={tutor.user.name} 
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold">{(tutor.user.name).toUpperCase()}</h1>
                                <p className="text-white mt-1 font-bold text-lg">Expert in {tutor?.subjects[0]?.name}</p>
                                <div className="flex items-center mt-2">
                                    <FaDollarSign className="mr-1" />
                                    <span className="font-semibold">{tutor.hourlyRate}/hour</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                        {/* details Bio Info */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <BoxIcon className="mr-2 text-purple-600" />
                                Details Bio Info
                            </h2>
                            <div className="bg-gray-50 p-4 rounded-lg">
                    
                                <p className="text-gray-500 mt-1">{tutor.bio}</p>
                               
                            </div>
                        </div>
                               {/* Contact Info */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <FaEnvelope className="mr-2 text-purple-600" />
                                Contact Information
                            </h2>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700">
                                    <span className="font-medium">Email:</span> {tutor.user.email}
                                </p>
                            </div>
                        </div>

                        {/* Subjects Taught */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <FaBook className="mr-2 text-purple-600" />
                                Subjects Taught
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {tutor.subjects.map((subject) => (
                                    <div key={subject._id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                                        <h3 className="font-semibold text-gray-800">{subject.name}</h3>
                                        <p className="text-sm text-gray-600">{subject.gradeLevel} • {subject.category}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <FaClock className="mr-2 text-purple-600" />
                                Availability
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tutor.availability.map((slot) => (
                                    <div key={slot._id} className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-800">{slot.day}</h3>
                                        <p className="text-gray-600">{slot.startTime} - {slot.endTime}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button className="bg-gradient-to-r from-purple-600 to-gray-800 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                                Book a Session
                            </button>
                            <button className="border border-purple-600 text-gray-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition duration-200">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    )
}