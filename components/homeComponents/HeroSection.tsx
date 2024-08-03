

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
    <section className="w-full      ">

      <div className="pt-[100px] h-[565px] sm:h-[686px] lg:h-[700px] lg: bg-homeHeroD bg-cover flex">

   

      <div className=" my-auto px-5 lg:px-10 2xl:px-20 text-white flex flex-col lg:max-w-[60%]  ">
        
          <BlurMotion classname="">
            <h1 className="h1 mb-7    ">{heroTitle}</h1>
          </BlurMotion>

          <div className="">
            <FadeIn delay={0.2}>
              <h3 className="  mb-10  text-xl lg:text-2xl ">
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
</div>
    
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
