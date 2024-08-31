"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavLinksMob from "./NavLinksMob";
import LogoCustom from "../LogoCustom";
import { footerData } from "@/lib/data";
import { FaWhatsappSquare } from "react-icons/fa";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslations } from "next-intl";
import ContactInfoSimple from "../parts/ContactInfoSimple";

export default function MobileNav() {
  const [mobileNav, setMobileNav] = useState(false);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { contact } = footerData;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

      <Sheet open={open} onOpenChange={() => setOpen(!open)}>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent className="bg-white w-[260px] border-2 flex flex-col justify-between  ">
          <div>
            <SheetHeader className="py-10">
              <LogoCustom />
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <NavLinksMob />
          </div>
          <LocaleSwitcher bg="bg-white" text="text-black" />
          <div className="text-sm flex flex-col gap-y-4 pb-20 ">
            <ContactInfoSimple />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
