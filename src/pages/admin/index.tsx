// src/pages/admin/index.tsx

import AdminLayout from '@/layouts/AdminLayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin panel!</p>
    </AdminLayout>
  );
}
