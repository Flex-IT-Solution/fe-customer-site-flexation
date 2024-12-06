'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import LogoFlexation from '~/svg/LogoFlexation.svg';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <NavigationMenu className='flex min-w-full items-center justify-between bg-red-50 px-5 py-3 text-sm text-red-900 lg:px-28 xl:px-28 2xl:px-32'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/'>
            <LogoFlexation className='w-8' />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className='hidden gap-4 lg:flex'>
        <NavigationMenuItem>
          <Link
            href='/'
            className={`p-2 font-medium hover:border-b-2 hover:border-red-400 hover:text-red-400 ${isActive('/') ? 'text-red-400' : ''}`}
          >
            Beranda
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href='/tema-undangan'
            className={`p-2 font-medium hover:border-b-2 hover:border-red-400 hover:text-red-400 ${isActive('/tema-undangan') ? 'text-red-400' : ''}`}
          >
            Tema Undangan
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href='/filter'
            className={`p-2 font-medium hover:border-b-2 hover:border-red-400 hover:text-red-400 ${isActive('/filter') ? 'text-red-400' : ''}`}
          >
            Filter
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href='/login'
            className='rounded-full border-2 border-red-200 bg-red-200 p-2 px-4 text-xs font-medium hover:border-red-400 hover:text-red-400 md:text-sm'
          >
            Login
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
