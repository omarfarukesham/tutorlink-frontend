// src/pages/index.tsx

import ClientLayout from '@/layouts/ClientLayout';

export default function Home() {
  return (
    <ClientLayout>
      <h1 className="text-2xl font-bold">Welcome to the Platform!</h1>
      <p>Choose your role to continue:</p>
    </ClientLayout>
  );
}
