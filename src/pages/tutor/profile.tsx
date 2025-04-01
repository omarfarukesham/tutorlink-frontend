import TutorProfile from '@/components/tutor/tutorProfile';
import TutorLayout from '@/layouts/TutorLayout';

export default function ProfilePage() {
  return (
    <TutorLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <TutorProfile />
      </div>
    </TutorLayout>
  );
}