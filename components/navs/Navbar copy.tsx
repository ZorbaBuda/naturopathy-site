"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
// import header data
import { headerData, links } from "@/lib/data";
// import components
import NavLinks from "../NavLinks";
import NavMobile from "../NavMobile";
// import Socials from './Socials';
// import icons
import { HiMenuAlt2 } from "react-icons/hi";
import AnimatedButton from "../parts/AnimatedButton";
import AnimatedButtonSq from "../parts/AnimatedButtonSq";
import MobileNav from "./MobileNav";
// https://www.youtube.com/watch?v=9mgMJDlOn8M

export default function Header() {
  const { logo } = headerData;
  // header state
  // const [isActive, setIsActive] = useState(false);
  // nav mobile state

  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log(scrollYProgress.get())
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest < 150) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
    // if (scrollYProgress.get() > 0.99) {
    //   setHidden(false);
    // }
  });

  //   const closeMobileMenu = () => {
  //     setNavMobile(false); // Function to close the mobile menu
  //   };
  // backdrop-blur-xl
  // bg-gradient-to-b from-white to-transparent
  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${transparent ? " bg-white " : "bg-white shadow-lg"}
     

       lg:h-[100px] h-[80px]  fixed top-0   z-20 min-w-max w-full  flex  mx-auto transition-all duration-500`}
    >
      <div className="  flex w-full items-center mx-auto justify-between subcontainerXl ">
        {/* logo */}
        <Link href="/" className="z-20 ">
          <div className="flex items-center gap-x-3">
            <Image
              className="  "
              src={logo}
              alt="logo"
              width={50}
              height={50}
            />
            <div
              className={`${
                transparent ? "text-black" : "text-black"
              } font-medium flex flex-col gap-0 lg:text-3xl text-2xl `}
            >
              <div className="text-[#40961D] font-logo ">
                Christian Constanseu
              </div>

              <div className="lg:text-sm text-sm ">NATUROPATA</div>
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
    </motion.nav>
  );
}
