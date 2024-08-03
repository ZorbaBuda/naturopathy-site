"use client";

import React, { useState, useEffect } from "react";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import LogoCustom from "../LogoCustom";
import { contactInfo } from "@/lib/data";
import Link from "next/link";

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
    <nav className={` ${isActive ? "hidden" : "block" } hidden h-[45px] bg-green text-white lg:flex justify-end items-center`}>
      <Link href="/">{contactInfo.phone}</Link>
      <Link href="/">{contactInfo.email}</Link>
    </nav>
    <nav
    className={`${
      isActive ? 'h-[80px] lg:h-[100px] shadow-lg' : 'h-[80px] lg:h-[100px]'
    } fixed bg-white left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500 flex items-center`}
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
    </>
  );
}
