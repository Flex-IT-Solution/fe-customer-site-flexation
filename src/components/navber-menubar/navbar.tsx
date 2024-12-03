// import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

// const navigation : { title : string; href : string; icon? : React.ReactNode }[] = [
//   {
//     title: "Beranda",
//     href: "/",
//     // icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//   },
//   {
//     title : "Tema Undangan",
//     href : "/tema-undangan"
//   },
//   {
//     title : "Filter Instagram",
//     href : "/filter"
//   }
// ]

export function Navbar() {
  return (
    // <nav>
    //   <ul className="flex gap-2">
    //     {navigation.map((item, index) => (
    //       <li key={index}>
    //         <a href={item.herf}>{item.title}</a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <Link href={navigation}></Link> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
