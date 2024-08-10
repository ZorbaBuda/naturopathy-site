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
  const [logoVisible, setLogoVisible] = useState(true);
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

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <nav
        //  className={` ${isActive ? "hidden" : "lg:flex "}  h-[45px] bg-primary text-white justify-end items-center transition-all duration-500`}>
        className={` hidden lg:flex  h-[45px] bg-primary text-white  `}
      >
        <div className="subcontainerXl justify-end w-full items-center flex mx-auto gap-10 ">
          <Link href="/" className=" ">
            {contactInfo.phone}
          </Link>
          <Link href="/" className=" ">
            {contactInfo.email}
          </Link>
        </div>
      </nav>

      <nav
        className={`${
          isActive ? "sticky top-0 shadow-xl backdrop-blur-md" : "sticky top-0 lg:block bg-white"
        }    left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-300 flex  h-[80px] lg:h-[100px]`}
      >
        <div className="  flex w-full mx-auto justify-between items-center subcontainerXl ">
          {/* logo */}
          <div className={` ${logoVisible ? "visible" : "invisible"}`}>
            <LogoCustom />
          </div>

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
