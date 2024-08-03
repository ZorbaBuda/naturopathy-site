"use client";

import React, { useState, useEffect } from "react";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import LogoCustom from "../LogoCustom";
import { contactInfo } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  // header state
   const [isActive, setIsActive] = useState(false);
  // nav mobile state

  
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(true);

  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
    <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: "-33%" } }}
       animate={isActive ? "hidden" : "visible"}
       transition={{ duration: 0.01, ease: "easeInOut" }}
       className="fixed bg-white left-0 top-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500 flex flex-col " >
        <nav
    //  className={` ${isActive ? "hidden" : "lg:flex "}  h-[45px] bg-primary text-white justify-end items-center transition-all duration-500`}>
    className={` hidden lg:flex  h-[45px] bg-primary text-white   `}>
          <div className="subcontainerXl justify-end w-full items-center flex mx-auto gap-10 ">
          <Link href="/" className=" ">{contactInfo.phone}</Link>
          <Link href="/" className=" ">{contactInfo.email}</Link>
          </div>
    </nav>
    <nav
    className={`${
      isActive ? 'h-[80px] lg:h-[100px] top-0' : 'h-[80px] lg:h-[100px]'
    }  bg-white left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500 flex items-center`}
  >
      <div className="  flex w-full items-center mx-auto justify-between subcontainerXl ">
        {/* logo */}
      <LogoCustom />
    

      <div className="flex flex-row ">
        <div className="hidden lg:flex">
          <NavLinks />
        </div>
        <MobileNav />
      </div>
        </div>
        </nav>
    </motion.div>
    </>
  //   <>
  //   <motion.nav
  //      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
  //      animate={isActive ? "hidden" : "visible"}
  //      transition={{ duration: 0.1, ease: "easeInOut" }}
  //    className={`  h-[45px] bg-primary text-white lg:flex justify-end items-center transition-all duration-500`}>
  //     <Link href="/">{contactInfo.phone}</Link>
  //     <Link href="/">{contactInfo.email}</Link>
  //   </motion.nav>
  //   <motion.nav
  //   className={`${
  //     isActive ? 'h-[80px] lg:h-[100px] shadow-lg top-0' : 'h-[80px] lg:h-[100px]'
  //   } fixed bg-white left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500 flex items-center`}
  // >
  //     <div className="  flex w-full items-center mx-auto justify-between subcontainerXl ">
  //       {/* logo */}
  //     <LogoCustom />
    

  //     <div className="flex flex-row ">
  //       <div className="hidden lg:flex">
  //         <NavLinks />
  //       </div>
  //       <MobileNav />
  //     </div>
  //       </div>
  //   </motion.nav>
  //   </>
  //   <>
  //   <nav className={` ${isActive ? "hidden" : "block" }  h-[45px] bg-primary text-white lg:flex justify-end items-center transition-all duration-500`}>
  //     <Link href="/">{contactInfo.phone}</Link>
  //     <Link href="/">{contactInfo.email}</Link>
  //   </nav>
  //   <nav
  //   className={`${
  //     isActive ? 'h-[80px] lg:h-[100px] shadow-lg top-0' : 'h-[80px] lg:h-[100px]'
  //   } fixed bg-white left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500 flex items-center`}
  // >
  //     <div className="  flex w-full items-center mx-auto justify-between subcontainerXl ">
  //       {/* logo */}
  //     <LogoCustom />
    

  //     <div className="flex flex-row ">
  //       <div className="hidden lg:flex">
  //         <NavLinks />
  //       </div>
  //       <MobileNav />
  //     </div>
  //       </div>
  //   </nav>
  //   </>
  );
}
