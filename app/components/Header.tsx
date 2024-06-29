'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import header data
import { headerData } from '@/lib/data';
// import components
import NavLinks from './NavLinks';
import NavMobile from './NavMobile';
import Socials from './Socials';
// import icons
// import { TiThMenuOutline } from 'react-icons/ti';
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

   //nabvar visible on scroll up
   const [prevScrollPos, setPrevScrollPos] = useState(0);
   const [visible, setVisible] = useState(true);

   const [transparent, setTransparent] = useState(false)
 
   const handleScroll = () => {
     const currentScrollPos = window.scrollY;
  console.log(currentScrollPos)
     if (currentScrollPos > prevScrollPos) {
      // console.log(visible)
       setVisible(false);
     } else {
       setVisible(true);
     }
     setTransparent(currentScrollPos == 0)
    //  if (currentScrollPos == 0){
    //   setTransparent(true);
    //  } else {
    //   setTransparent(false)
    //  }
     console.log (currentScrollPos == 0)
     console.log("transparent ", transparent)
 
     setPrevScrollPos(currentScrollPos);
   };
 
   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
 
     return () => window.removeEventListener("scroll", handleScroll);
   });

   //detecting scroll bottom / not working
   useEffect(() => {
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight === scrolledTo;
      if (isReachBottom) {
        setVisible(true)
        console.log(visible)
      }
    }
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);
 

  // scroll event
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsActive(true);
  //     } else {
  //       setIsActive(false);
  //     }
  //   };

  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', handleScroll);
  //   }

  //   return () => {
  //     if (typeof window !== 'undefined') {
  //       window.removeEventListener('scroll', handleScroll);
  //     }
  //   };
  // }, []);

  const closeMobileMenu = () => {
    setNavMobile(false); // Function to close the mobile menu
  };

  return (
    <header
    className={`${ !visible ? "hidden" : "visible"}
              {${ transparent ? "bg-transparent" : "bg-gris_claro"}
    fixed  left-0 right-0 z-20 min-w-max w-full mx-auto   duration-5000
    transform ease-in-out bg-gris_claro
     
    `}
  >
     {/* <header
      className={`${
        isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[110px] lg:h-[110px]'
      } fixed bg-gris_claro left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500`}
    > */}

    {/* <header
    className={`${
      !visible ? "hidden" : ""
    } bg-transparent h-[100px] lg:h-[110px]  fixed bg-gris_claro left-0 right-0 z-50 min-w-max w-full 
    mx-auto transition-all duration-500 text-amarillo_claro`}
  > */}
      <div className='flex items-center justify-between h-full pl-[70px] pr-[70px]
       md:pr-[80px] md:pl-[80px] lg:pl-[90px] lg:pr-[90px] xl:pl-[120px] xl:pr-[120px]
        2xl:pl-[180px] 2xl:pr-[180px]  '>
        {/* logo */}
      
        <Link href='/practice' className='p-5 border-2 border-black sm:relative sm:mx-auto relative mx-auto  '>
          <Image
            // className='w-[188px] h-[90px]'
             className='h-[50px]  '
            
            src={logo}
            alt='logo'
            width={188}
            height={90}
          />
        </Link>
       
        {/* nav - initially hidden, show on desktop */}
        <div className='hidden lg:flex mx-auto  '>
          <NavLinks />
        </div>
        {/* hamburger menu icon = showing by default, hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden absolute right-[5%]  text-black p-2  cursor-pointer'
        >
          <HiMenuAlt2 className='text-4xl ' />
        </div>
        {/* nav mobile - showing by default, hidden on desktop */}
        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile closeMobileMenu={closeMobileMenu} />
        </div>
        {/* social icons - initially hidden - show on desktop */}
        <div className='hidden lg:flex  '>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

// the code below works well. There is no reference to 'window' object made, yet the code returns an error.

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useWindowScroll } from 'react-use'; // Correct import statement
// // import header data
// import { headerData } from '../data';
// // import components
// import NavLinks from './NavLinks';
// import NavMobile from './NavMobile';
// import Socials from './Socials';
// // import icons
// import { TiThMenuOutline } from 'react-icons/ti';
// import Link from 'next/link';

// const Header = () => {
//   // destructure header data
//   const { logo } = headerData;
//   // header state
//   const [isActive, setIsActive] = useState(false);
//   // nav mobile state
//   const [navMobile, setNavMobile] = useState(false);

//   // scroll event
//   const { y } = useWindowScroll();

//   useEffect(() => {
//     if (y > 50) {
//       setIsActive(true);
//     } else {
//       setIsActive(false);
//     }
//   }, [y]);

//   const closeMobileMenu = () => {
//     setNavMobile(false); // Function to close the mobile menu
//   };

//   return (
//     <header
//       className={`${
//         isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'
//       } fixed bg-white left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500`}
//     >
//       <div className='flex items-center justify-between h-full pl-[50px] pr-[60px] md:pr-[80px] md:pl-[80px] lg:pl-[100px] lg:pr-[100px] xl:pl-[140px] xl:pr-[140px] 2xl:pl-[180px] 2xl:pr-[180px]'>
//         {/* logo */}
//         <Link href='/'>
//           <Image
//             className='w-[188px] h-[90px]'
//             src={logo}
//             alt='logo'
//             width={188}
//             height={90}
//           />
//         </Link>
//         {/* nav - initially hidden, show on desktop */}
//         <div className='hidden lg:flex mx-auto'>
//           <NavLinks />
//         </div>
//         {/* hamburger menu icon - showing by default, hidden on desktop mode */}
//         <div
//           onClick={() => setNavMobile(!navMobile)}
//           className='lg:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'
//         >
//           <TiThMenuOutline className='text-2xl' />
//         </div>
//         {/* nav mobile - showing by default, hidden on desktop */}
//         <div
//           className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${
//             isActive
//               ? 'top-[100px] lg:top-[110px]'
//               : 'top-[120px] lg:top-[150px]'
//           } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
//         >
//           <NavMobile closeMobileMenu={closeMobileMenu} />
//         </div>
//         {/* social icons - initially hidden - show on desktop */}
//         <div className='hidden lg:flex'>
//           <Socials />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
