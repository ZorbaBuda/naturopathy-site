import Link from 'next/link';
import React from 'react';
// import nav data
// import { navLinksData, links } from '@/lib/data';
import { links } from '@/lib/data';
// import components
import Socials from './Socials';

const NavMobile = ({ closeMobileMenu }) => {
  // destructure nav data
  // const { items } = navLinksData;
  return (
    <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
      <ul className='flex flex-col items-center justify-center gap-y-6 py-6 mb-8'>
        {links.map((item : Link, index) => {
          return (
            <li key={index}>
              <Link
                className='text-2xl font-oswald '
                href={item.hash}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className='text-2xl'>
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
