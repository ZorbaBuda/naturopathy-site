"use client";

import React, { useState, useEffect } from "react";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import LogoCustom from "../LogoCustom";
import { contactInfo } from "@/lib/data";
import Link from "next/link";
import ExternalLink from "../parts/ExternalLink";
import LocaleSwitcher from "../LocaleSwitcher";
import { ContactInfoNavbar } from "../parts/ContactInfo";

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
        className={` hidden lg:flex  h-[45px] bg-green2 text-white  `}
      >
        <div className="subcontainerXl justify-end w-full items-center flex mx-auto gap-10 ">
          <ContactInfoNavbar />
          {/* <p className=" ">
            {contactInfo.phone}
          </p>
          <ExternalLink href={contactInfo.emailHref} title={contactInfo.email}  /> */}
          <LocaleSwitcher bg={"bg-green2"} text={"text-white"} />
        </div>
      </nav>

      <nav
        className={`${
          isActive ? " shadow-lg " : "  "
        }   sticky top-0  left-0 right-0 z-20 min-w-max w-full mx-auto bg-white transition-all duration-300 flex  h-[80px] lg:h-[100px]`}
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
