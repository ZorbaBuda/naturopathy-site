'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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

const HeaderTest = () => {
  // destructure header data
  const { logo } = headerData;
  // header state
  // const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(true)

  

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log("scrooly: ", scrollY.get())
    // console.log("scrollyprogress: ", scrollYProgress.get())
    // console.log(scrollYProgress.get() > 0.99)
    // if (latest > previous && latest > 100 ) {
      if (latest > previous  ) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest < 150){
      setTransparent(true) 
      console.log(transparent)
    } else {
      setTransparent(false)
    }
    if(scrollYProgress.get() > 0.99){
      setHidden(false)
    }

  });

 

  const closeMobileMenu = () => {
    setNavMobile(false); // Function to close the mobile menu
  };

  return (
    <motion.nav
    variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
    animate={hidden ? "hidden" : "visible"}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className={`z-20 fixed top-0 h-28 flex w-full items-center 
      transition-all duration-700
      ${ transparent ? "bg-transparent" : "bg-gris_claro"}
`}
    // className={`
    //           {${ transparent ? "bg-transparent" : "bg-gris_claro"}
    // fixed  left-0 right-0 z-20 min-w-max w-full mx-auto   
    // transform ease-in-out bg-gris_claro
     
    // `}
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
        2xl:pl-[180px] 2xl:pr-[180px]  min-w-max w-full '>
        {/* logo */}
      
        <Link href='/practice' className='p-5    '>
         <div className='flex items-center'>
         <Image
            // className='w-[188px] h-[90px]'
             className='  '
            
            src={logo}
            alt='logo'
            width={88}
            height={90}
          /> 
          <div className={`${ transparent ? "text-white" : "text-black"}`}>CHRISTIAN CONSTANSEU</div>
         </div>
         
          {/* <Image
            // className='w-[188px] h-[90px]'
             className='h-[50px]  '
            
            src={logo}
            alt='logo'
            width={188}
            height={90}
          /> */}
        </Link>
       
        {/* nav - initially hidden, show on desktop */}
        <div className='hidden lg:flex mx-auto  '>
          <NavLinks transparent={transparent} />
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
            !hidden
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile closeMobileMenu={closeMobileMenu} />
        </div>
        {/* social icons - initially hidden - show on desktop */}
        <div className='hidden lg:flex  '>
          <div className={`${ transparent ? "text-white" : "text-black"}`}>
            RESERVAR CITA
          </div>
          {/* <Socials /> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default HeaderTest;

