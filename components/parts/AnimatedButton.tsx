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
  text-white font-semibold hover:bg-white bg-green2 hover:text-green2 rounded-3xl border border-green2"
  >{text}</Link>
  //   <Link
  //   href={href}
  //   className="  text-base  uppercase px-8 py-3 transition-all duration-500 flex items-center max-w-fit
  // text-green2 font-semibold hover:bg-[#DEF9C4] hover:text-white rounded-3xl border border-green2"
  // >{text}</Link>
   
  );
}
