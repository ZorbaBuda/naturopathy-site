import Link from 'next/link';
import { links } from '@/lib/data';
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import {NavigationLinkNavbar} from '../NavigationLink';

const NavLinks = () => {
  // console.log("where I log")
  const pathname = usePathname();
  const t = useTranslations("Navbar")
  


  
  return (
    <nav>
      <ul
        className='flex gap-x-[48px] md:gap-x-[48px] items-center   '
      >
     <NavigationLinkNavbar href="/">{t("links.home")} <span className="underlineAnim" /></NavigationLinkNavbar>
     <NavigationLinkNavbar href="/about">{t("links.about")} <span className="underlineAnim" /></NavigationLinkNavbar>
     <NavigationLinkNavbar href="/services">{t("links.services")} <span className="underlineAnim" /></NavigationLinkNavbar>
     <NavigationLinkNavbar href="/contact">{t("links.contact")} <span className="underlineAnim" /></NavigationLinkNavbar>
      </ul>

  
    </nav>
  );
};

export default NavLinks;

// <ul
// className='flex gap-x-[48px] md:gap-x-[48px] items-center   '
// >
// {links.map((item, index) => {
//   return (
//     <li key={index}>
//       <Link
//         className=  {`  ${item.hash === pathname ? "text-green2" : "text-dark1"}  text-base hover:text-green2  group capitalize   font-semibold tracking-widest `}
//         href={item.hash}
//       >
//         {item.name}
//         <span className={`  block  max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-green2`}></span>
//       </Link>
//     </li>
//   );
// })}

// </ul>