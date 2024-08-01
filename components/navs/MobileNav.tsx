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
import {  motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavLinksMob from "./NavLinksMob";
import LogoCustom from "../LogoCustom";
import { footerData } from "@/lib/data";
import { FaWhatsappSquare } from "react-icons/fa";

export default function MobileNav() {
    const [mobileNav, setMobileNav] = useState(false);
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const { contact} = footerData

    useEffect(() => {
     setOpen(false)
    }, [pathname])
    

    const toggleSheetNav = () => {
      setOpen(!open);
  };

  return (
    <>
      <button
      
          onClick={toggleSheetNav}
          className="flex flex-col space-y-[7px] relative   lg:hidden"
        >
          <span className="bg-black h-[2px] block w-8 font-bold "></span>
          <span className="bg-black h-[2px] block w-8 font-bold "></span>
          <span className="bg-black h-[2px] block w-8 font-bold "></span>
        </button>


        <Sheet open={open} onOpenChange={() => setOpen(!open)} >
  {/* <SheetTrigger>Open</SheetTrigger> */}
  <SheetContent className="bg-white w-[260px] border-2 flex flex-col justify-between  ">
    <div>
    <SheetHeader className="py-10">
      <LogoCustom />
      {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription> */}
    </SheetHeader>
    
    <NavLinksMob />
    </div>
    <div className="text-sm flex flex-col gap-y-4 pb-20 ">
             
             <div className="flex items-center gap-x-[10px]">
               <div>{contact.address.icon}</div>
               <div>{contact.address.name}</div>
             
             </div>
           
             <div className="flex items-center gap-x-[10px]">
               <div>{contact.phone.icon}</div>
               <div>{contact.phone.number}</div>
                 <FaWhatsappSquare className="text-lg" />
             </div>
           
             <div className="flex items-center gap-x-[10px]">
               <div>{contact.email.icon}</div>
               <div>{contact.email.address}</div>
             </div>
           </div>
         
  </SheetContent>
</Sheet>

      </>
      
  )
}
