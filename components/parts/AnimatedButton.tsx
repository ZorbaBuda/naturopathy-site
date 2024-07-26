import Link from "next/link";
import React from "react";

export default function AnimatedButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
    href={href}
    className="  text-base  uppercase px-8 py-3 transition-all duration-500 flex items-center max-w-fit
  text-green2 font-semibold hover:bg-[#DEF9C4] hover:text-white rounded-3xl border border-green2"
  >{text}</Link>
    // <Link
    //   href={href}
    //   className="  text-lg  uppercase px-8 transition-all duration-500 flex items-center 
    // text-white hover:bg-[#DEF9C4] hover:text-botella rounded-md border-2 border-[#DEF9C4]"
    // ></Link>
  );
}
