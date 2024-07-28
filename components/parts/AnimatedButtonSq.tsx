import Link from "next/link";
import React from "react";

// EA5C2B before
// FF7F3F after
export default function AnimatedButtonSq({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    //   <Link
    //   href={href}
    //   className="  text-base  uppercase px-8 py-3 transition-all duration-500 flex items-center max-w-fit
    // text-white font-semibold hover:bg-white bg-green2 hover:text-green2 rounded-3xl border border-green2"
    // >{text}</Link>
    <Link
    href={href}
    className="text-white hover:before:bg-[#FF7F3F]  relative h-[50px]   overflow-hidden
     bg-[#EA5C2B] px-7 py-3  transition-all before:absolute 
     before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#FF7F3F]
      before:transition-all before:duration-700   hover:before:left-0 max-w-fit no-underline
       hover:before:w-full h3"
  >
    <span className="relative z-10">{text}</span>
  </Link>
    // <Link
    //   href={href}
    //   className="text-red hover:before:bg-redborder-red-500 relative h-[50px]  overflow-hidden
    //   border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute
    //    before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500
    //     before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0
    //      hover:before:w-full"
    // >
    //   <span className="relative z-10">{text}</span>
    // </Link>
  );
}

{
  /* <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
<span className="absolute inset-0 border-2 border-white rounded-full"></span>
</a> */
}

// <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
// <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
// <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
// </span>
// <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
// <span className="relative invisible">Button Text</span>
// </a>
