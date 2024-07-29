import Link from 'next/link';
import { links } from '@/lib/data';
import { usePathname } from "next/navigation";

const NavLinks = ({ transparent}: { transparent : boolean}) => {
  const pathname = usePathname();
  console.log(pathname)
  
  return (
    <nav>
      <ul
        className='flex gap-x-[48px] md:gap-x-[48px] md:p-5 text-lg  '
      >
        {links.map((item : Link , index) => {
          return (
            <li key={index}>
              <Link
                className=  {` ${transparent ? "text-footerText" : "text-footerText"}
                  text-black hover:border-b hover:border-dark transition duration-300  
                 h3`}
                href={item.hash}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;

// slightly more complex version where links were nested
// import React from 'react';
// import Link from 'next/link';
// import { navLinksData } from '../../data';

// const NavLinks = () => {
//   // destructure nav data
//   const { items } = navLinksData;

//   return (
//     <nav>
//       <ul
//         className='flex gap-x-[4
//         8px] md:gap-x-[28px] md:p-5 text-sm'
//       >
//         {items.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 className='link hover:border-b hover:border-dark transition duration-300'
//                 href={item.href}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default NavLinks;
