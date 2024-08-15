import { homeHero } from "@/lib/data";
import { BlurMotion } from "../framer/BlurMotion";
import HeroButton from "../parts/HeroButton";

export default function HomeHeroSection() {
  const { heroTitle, heroSubtitle, linkText, linkHref } = homeHero;

  return (
    // <section className="w-full h-screen bg-homeHeroD bg-cover flex items-center pt-[100px]  ">
    //   <div className="2xl:pl-[290px]   text-white flex  flex-col  px-5 lg:px-14 xl:px-10 xl:max-w-[1400px]   ">

    //     <div className="">

    //       <FadeIn delay={0.2}>
    //         <h3 className="  mb-5  text-xl lg:text-2xl md:max-w-[48ch] ">{heroSubtitle}</h3>
    //       </FadeIn>
    //        <BlurMotion classname="">
    //       <h1 className="h1c mb-16 md:max-w-[12ch] text-[#FDFFAB]   ">{heroTitle}</h1>
    //     </BlurMotion>

    //        </div>
    //       <FadeIn delay={0.4}>
    //         <HeroButton text={linkText} href={linkHref} />
    //       </FadeIn>

    //       {/* <a href="#" className="group text-sky-600 transition duration-300">
    //         Link
    //         <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
    //       </a> */}

    //   </div>
    // </section>
    <section className="    h-[565px] sm:h-[686px] bg-right lg:object-center lg:h-[700px] bg-homeHeroD bg-cover flex  ">
      <div className=" w-full  my-auto subcontainerXl  text-white flex flex-col  ">
        <div className="lg:max-w-[60%] ">
          <BlurMotion classname="">
          
            
            <h1 className="h1 mb-5 text-cream1   ">{heroTitle}</h1>
            
           
          </BlurMotion>
        
          
          <h3 className="italic font-semibold  mb-16 text-xl lg:text-2xl ">{heroSubtitle}</h3>
         
         
          

          <HeroButton text={linkText} href={linkHref} />
        </div>
        {/* <a href="#" className="group text-sky-600 transition duration-300">
                  Link
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </a> */}
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
