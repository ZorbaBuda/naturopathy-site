"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contactInfo } from "@/lib/data";
import { MdKeyboardArrowUp } from "react-icons/md";
import { TelegramLink, WhatsappLink } from "./parts/ContactLinks";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <div className={` fixed md:bottom-32 bottom-20 right-5   gap-10 ${show ? 'md:flex' : 'md:hidden'}`}>
      <div className='flex flex-col gap-3 md:gap-5 text-lg md:text-2xl text-white'>
     
        <Link href={contactInfo.whatsappHref}   className='bg-[#25D366] rounded-full p-2 md:p-3 border-2 border-slate-600'>{contactInfo.whatsappIcon}</Link>
      </div>
    </div> */}

      {/* scroll button */}
      <div
        className={`flex flex-col gap-5 z-30 fixed bottom-10 right-5 md:right-7 text-lg md:text-2xl text-white  ${
          show ? "md:flex" : "md:hidden"
        }`}
      >
        <WhatsappLink />

        <TelegramLink />
      </div>
    </>
  );
};

export default ScrollTop;
