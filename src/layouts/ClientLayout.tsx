// src/layouts/ClientLayout.tsx

import Footer from '@/components/client/Footer';
import Navbar from '@/components/client/Navbar';
import { ReactNode } from 'react';
// import Header from '@/components/common/Header';
// import Footer from '@/components/common/Footer';

type Props = {
  children: ReactNode;
};

export default function ClientLayout({ children }: Props) {
  return (
    <div className=" lg:w-[90%] mx-auto sm:w-full  min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
