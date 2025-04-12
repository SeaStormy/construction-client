'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="relative">
      <Navbar />
      <div className="relative z-0">
        <div className={!isHomePage ? 'pt-20' : ''}>{children}</div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
