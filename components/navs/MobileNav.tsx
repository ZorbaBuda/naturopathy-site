'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { links } from "@/lib/data";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNav() {
    const [mobileNav, setMobileNav] = useState(false);
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    useEffect(() => {
     setMobileNav(false)
    }, [pathname])
    

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    const toggleSheetNav = () => {
      setOpen(!open);
  };

  return (
    <>
      <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleSheetNav}
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


        <Sheet open={open} onOpenChange={() => setOpen(!open)} >
  {/* <SheetTrigger>Open</SheetTrigger> */}
  <SheetContent className="bg-white w-[260px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


        {/* <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="  fixed inset-0 bg-[#26355D] bg-opacity-95 p-6 min-h-screen flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-10 mx-auto"
                >
                  {links.map((item: Link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className={`text-5xl font-semibold text-white `}
                          href={item.hash}
                          onClick={toggleMobileNav}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence> */}

    {/* {mobileNav && (
        <div className="fixed inset-0 bg-[#274EA9] min-h-screen  flex flex-col    lg:hidden"> */}
          {/* <Link href="/site3" className="pr-10 mt-[31px]">
            <Image src={LogoWhite} alt="logo" width={150} height={28} />
          </Link>

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
     
      )} */}
      </>
      
  )
}
