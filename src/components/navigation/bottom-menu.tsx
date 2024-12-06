'use client';
import { House, Palette, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function BottomMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className='mx-auto flex w-[90%] justify-between rounded-2xl bg-red-100 p-1 px-16 text-[8px] text-red-800 md:w-[80%] md:p-2 md:px-24 md:text-xs'>
      <div>
        <Link
          href='/'
          className={`flex flex-col items-center rounded-md p-1 ${
            isActive('/') ? 'text-red-500' : 'hover:text-red-500'
          }`}
        >
          <House />
          <div>Beranda</div>
        </Link>
      </div>
      <div>
        <Link
          href='/tema-undangan'
          className={`flex flex-col items-center rounded-md p-1 ${
            isActive('/tema-undangan') ? 'text-red-500' : 'hover:text-red-500'
          }`}
        >
          <Palette />
          <div>Tema Undangan</div>
        </Link>
      </div>
      <div>
        <Link
          href='/filter'
          className={`flex flex-col items-center rounded-md p-1 ${
            isActive('/filter') ? 'text-red-500' : 'hover:text-red-500'
          }`}
        >
          <Sparkles />
          <div>Filter</div>
        </Link>
      </div>
    </div>
  );
}
