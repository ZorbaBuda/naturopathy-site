'use client';

import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import type {pathnames} from '@/config';
import {Link} from '@/navigation';

export  function NavigationLink<
  Pathname extends keyof typeof pathnames
>({href, ...rest}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2 py-3 transition-colors',
         isActive ? 'text-green-700' : 'text-gray-400 hover:text-gray-200'
      )}
      href={href}
      {...rest}
    />
  );
}


  // <Link
  //   className=  {`  ${item.hash === pathname ? "text-green2" : "text-dark1"}  text-base hover:text-green2  group capitalize   font-semibold tracking-widest `}
  //   href={item.hash}
  // >
  //   {item.name}
  //   <span className={`  block  max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-green2`}></span>
  // </Link>

export  function NavigationLinkNavbar<
  Pathname extends keyof typeof pathnames
>({href, ...rest}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        ' text-base hover:text-green2  group capitalize    tracking-widest ',
         isActive ? 'text-green2 font-semibold' : 'text-black'
      )}
      href={href}
      {...rest}
      
    />
    
  );
}

// export  function NavigationLink<
//   Pathname extends keyof typeof pathnames
// >({href, ...rest}: ComponentProps<typeof Link<Pathname>>) {
//   const selectedLayoutSegment = useSelectedLayoutSegment();
//   const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
//   const isActive = pathname === href;

//   return (
//     <Link
//       aria-current={isActive ? 'page' : undefined}
//       className={clsx(
//         'inline-block px-2 py-3 transition-colors',
//          isActive ? 'text-green-700' : 'text-gray-400 hover:text-gray-200'
//       )}
//       href={href}
//       {...rest}
//     />
//   );
// }