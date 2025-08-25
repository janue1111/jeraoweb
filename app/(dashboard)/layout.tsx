'use client';

import Link from 'next/link';
// import { Button } from '@/components/ui/button'; // No longer needed
import { CircleIcon } from 'lucide-react';

function UserMenu() {
  // Ocultar los botones de Pricing y Sign Up
  return null;
}

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="https://i.imgur.com/hJbXFbo.png" alt="Logo" className="h-20 w-auto" />
        </Link>
        <div className="flex items-center space-x-4">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
