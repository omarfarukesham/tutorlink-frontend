
// src/pages/admin/index.tsx

import StudentLayout from '@/layouts/StudentLayout';

export default function StudentDashboard() {
  return (
    <StudentLayout>
      <h1 className="text-2xl font-bold">Student Dashboard</h1>
      <p>Welcome to the admin panel!</p>
    </StudentLayout>
  );
}
