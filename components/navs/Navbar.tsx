"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { headerData, links } from "@/lib/data";
import NavLinks from "../NavLinks";
import MobileNav from "./MobileNav";

export default function Header() {
  const { logo } = headerData;
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
    <nav
    className={`${
      isActive ? 'h-[80px] lg:h-[100px] shadow-lg' : 'h-[120px] lg:h-[140px]'
    } fixed bg-white left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500 flex items-center`}
  >
      <div className="  flex w-full items-center mx-auto justify-between subcontainerXl ">
        {/* logo */}
        <Link href="/" className="z-20 ">
          <div className="flex items-center gap-x-3">
            <Image
              className="h-16 w-16 lg:h-20 lg:w-20  "
              src={logo}
              alt="logo"
              width={250}
              height={250}
            />
            <div
              className={`${
                transparent ? "text-black" : "text-black"
              } font-medium flex flex-col gap-0 lg:text-3xl text-2xl `}
            >
              <div className="text-[#40961D] font-logo font-semibold ">
                Christian Constanseu
              </div>

              <div className="lg:text-sm text-sm font-semibold text-green2 font-jakarta  ">NATUROPATIA</div>
            </div>
          </div>
        </Link>
    

      <div className="flex flex-row ">
        <div className="hidden lg:flex">
          <NavLinks />
        </div>
        <MobileNav />
      </div>
        </div>
    </nav>
  );
}
