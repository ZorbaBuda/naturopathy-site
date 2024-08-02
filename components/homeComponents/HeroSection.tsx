

import { homeData } from "@/lib/data";
import Image from "next/image";
import TextReveal from "../tutorials/framer/TextReveal";
import { BlurMotion } from "../framer/BlurMotion";
import FadeUp from "../framer/FadeUp";
import FadeIn from "../framer/FadeIn";
import GreenButton from "../parts/GreenButton";


export default function HeroSection() {
  const { heroTitle, heroSubtitle, linkText, linkHref } = homeData;

  return (
    <section className="w-full h-screen  relative ">

   

      <div className="lg:max-w-[40%] absolute 2xl:left-[15%] lg:top-[25%] mt-48 lg:mt-0  flex flex-col   px-5 lg:px-14 2xl:px-0    ">
        
          <BlurMotion classname="">
            <h1 className="h1 mb-7  text-dark1  ">{heroTitle}</h1>
          </BlurMotion>

          <div className="">
            <FadeIn delay={0.2}>
              <h3 className="  mb-10 prose-custom  lg:text-dark1 ">
                {heroSubtitle}
              </h3>
            </FadeIn>
            <FadeIn delay={0.4}>
              <GreenButton text={linkText} href={linkHref} />
            </FadeIn>

            {/* <a href="#" className="group text-sky-600 transition duration-300">
              Link
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </a> */}
        </div>
      </div>

       {/* <div className="h-full w-full border-2 border-red-500  "> */}
      <Image 
       src="/assets/home-hero-desktop.jpg"
       width={1280}
       height={800}
       alt="hero"
       className="  h-full w-full object-cover   "
       />
       {/* </div> */}
      
        {/* <div className="relative">
              <div className="mt-10 absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur"></div>
              <div className="relative flex h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300">
                Gradient shadow
              </div>
            </div> */}
    </section>
  );
}

// <section className="w-full h-screen bg-hero_bg_mob  lg:bg-hero_bg bg-cover lg:bg-right-top bg-top  flex">
// <div className="w-full   flex flex-col gap-y-10 lg:flex-row items-center subcontainerXl mt-52 lg:my-auto  ">
//   <div className="flex flex-col  gap-y-10 basis-1/2    ">
//     <BlurMotion classname="">
//       {" "}
//       <h1 className="h1  text-dark1  ">{heroTitle}</h1>
//     </BlurMotion>
//     <div className="">
//       <FadeIn delay={0.2}>
//         <h3 className="  mb-10 prose-custom  lg:text-dark1 ">
//           {heroSubtitle}
//         </h3>
//       </FadeIn>
//       <FadeIn delay={0.4}>
//         <AnimatedButton text={linkText} href={linkHref} />
//       </FadeIn>

//       {/* <a href="#" className="group text-sky-600 transition duration-300">
//         Link
//         <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
//       </a> */}

    
//     </div>
//   </div>
// </div>
//   {/* <div className="relative">
//         <div className="mt-10 absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur"></div>
//         <div className="relative flex h-64 w-64 items-center justify-center rounded-lg bg-slate-900 text-slate-300">
//           Gradient shadow
//         </div>
//       </div> */}
// </section>
