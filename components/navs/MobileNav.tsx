'use client'

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

  return (
    <>
      <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-[6px] relative z-10  lg:hidden"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 7.5,
              },
            }}
            className={` ${
              mobileNav ? "bg-black" : "bg-black"
            }  h-[2px] block w-10 font-bold`}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className={` ${
              mobileNav ? "bg-black" : "bg-black"
            }  h-[2px] block w-10`}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -7.5,
              },
            }}
            className={` ${
              mobileNav ? "bg-black" : "bg-black"
            }  h-[2px]  w-10`}
          ></motion.span>
        </motion.button>
    {mobileNav && (
        <div className="fixed inset-0 bg-[#274EA9] min-h-screen  flex flex-col    lg:hidden">
          {/* <Link href="/site3" className="pr-10 mt-[31px]">
            <Image src={LogoWhite} alt="logo" width={150} height={28} />
          </Link> */}

          <div className="flex flex-col justify-center space-y-16 ">
            <ul className="flex flex-col text-white">
              {links.map((link) => (
                <Link
                  className=" text-4xl border-b-[0.5px] border-c"
                  href={link.hash}
                  key={link.hash}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
     
      )}
      </>
      
  )
}
