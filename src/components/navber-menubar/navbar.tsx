import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export function Navbar() {
  return (
    <NavigationMenu className='flex min-w-full items-center justify-between py-3 lg:px-28 xl:px-28 2xl:px-32'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/'>Logo</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className='flex gap-4'>
        <NavigationMenuItem>
          <Link href='/'>Beranda</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/tema-undangan'>Tema Undangan</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/filter'>Filter</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/login'>Login</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
