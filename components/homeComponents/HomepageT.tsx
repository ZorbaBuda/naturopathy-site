"use client";
import Link from "next/link";
// import hero data
import { homeData } from "@/lib/data";
// import motion
import { motion } from "framer-motion";
// import fadeIn
import { fadeIn, scaleUp } from "@/lib/variants";
import Logo from "@/public/img/about/newImage.jpg";
import Img3 from "@/public/img/home/image3.png";
import Image from "next/image";
import TextReveal from "../tutorials/framer/TextReveal";
import HeroImage from "@/public/img/home/img5.jpg";

const container = {
  hidden: { display: "" },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

export default function Homepage() {
  // destructure heroData
  const {
    heroTitle,
    heroSubtitle,
    section1Subtitle,
    section1Title,
    btnText,
    btnIcon,
    section2Title,
    section2Subtitle,
  } = homeData;

  return (
    <>
      {/* hero section */}
      {/* <section className="bg-hero_img bg-cover bg-center min-h-[40vh] lg:h-[848px] xl:h-[948px] 2xl:h-[1048px] bg-no-repeat relative flex "> */}
      <section className="bg-hero_img bg-cover bg-center h-screen bg-no-repeat  ">
       <div className="bg-gray-900 bg-opacity-20 flex h-screen relative">
        {/* <div className="   "> */}
          <div className="   my-auto flex flex-col gap-9 2xl:ml-[260px] xl:ml-[110px] ml-[38px]">
               <p className="text-white text-xl ">{heroTitle}</p>
               <div className="h1 max-w-[1080px]">{heroSubtitle}</div>
               <Link href="/serveis">
            <button
              className="btn btn-sm  font-normal"
            >
              {btnText}
            </button>
          </Link>
        </div>
        </div>
        {/* </div> */}
        
      </section>
      {/* <section
        // className='bg-hero_img bg-cover bg-center min-h-[40vh] lg:h-[848px] xl:h-[948px] 2xl:h-[1048px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'
        // className='bg-hero_img bg-cover bg-center min-h-[40vh] lg:h-[848px] xl:h-[948px] 2xl:h-[1048px] bg-no-repeat relative mt-[110px] '
        className=" bg-[#EAEDE6] bg-cover bg-center h-screen bg-no-repeat flex-col flex md:flex-row    "
      >
        <div className="basis-1/3">
        <div
          className="static
        text-black px-7   flex flex-col items-center space-y-9 border-2 border-black mt-[120px]  "
        >
          <p
          
            className="text-xl  max-w-lg leading-relaxed"
          >
            {subtitle}
          </p>

          <div className="absolute h1 overflow-visible font-medium font-roboto_regular">{title}</div>

          <Link href="/serveis">
            <button
              className="btn btn-lg  font-normal"
              aria-label="Reveal More Text"
            >
              {btnText}
            </button>
          </Link>
        </div>
        </div>
        <div className="basis-2/3">
        <Image
                src={HeroImage}
                alt={"logo"}
                height="0"
                width="0"
                className=" h-screen mb-4  mx-auto  w-[2/3] overflow-hidden"
                unoptimized
              />
              </div>
      </section> */}
     
      {/* <section */}
         {/* className='bg-hero_img bg-cover bg-center min-h-[40vh] lg:h-[848px] xl:h-[948px] 2xl:h-[1048px] bg-no-repeat relative mt-[120px] lg:mt-[150px]' */}
        {/* className='bg-hero_img bg-cover bg-center h-screen
         bg-no-repeat flex mt-[100px]' */}
         {/* className=" bg-[#EAEDE6] bg-cover bg-center h-screen bg-no-repeat flex-col flex md:flex-row    " */}
      {/* > */}
        {/* <div className="bg-black bg-opacity-30 h-screen w-screen">

        <div className="  border-black  w-1/3 mt-[120px] mx-auto ">
        <div
          className="border-2 border-black 
           
        text-black pl-7   flex flex-col  space-y-4    "
        >
          <p
           
            className="text-xl  max-w-lg leading-relaxed"
          >
            {subtitle}
          </p>

          <div className=" h1  font-medium ">{title}</div>

          <Link href="/serveis">
            <button
              className="btn btn-lg  font-normal"
              aria-label="Reveal More Text"
            >
              {btnText}
            </button>
          </Link>
        </div>
     
       </div>
       </div>
      </section>
      */}

   

      {/* block 1 */}
      {/* <section className="lg:py-4 mt-4 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
            
            <div className="flex-1 h-full ">
              <motion.h2
                variants={fadeIn("up")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h3 max-w-[370px] lg:mb-20"
              >
                {section1Title}
              </motion.h2>

              <div className="flex flex-col items-center">
                <div className="font-light max-w-[530px] text-grey">
                  <p className="mb-9">{section1Subtitle}</p>
                  <Link href="/serveis">
                    <button
                      className="btn btn-lg btn-link font-normal"
                      aria-label="Reveal More Text"
                    >
                      {btnText} <div className="text-xl">{btnIcon}</div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

           
            <div className="flex flex-col lg:flex-row flex-1">
              <Image
                src={Logo}
                alt={"logo"}
                height="0"
                width="0"
                className=" h-fit mb-4  mx-auto"
                unoptimized
              />

           
            </div>
          </div>
        </div>
      </section> */}

      {/* block 2 */}
      {/* <section className="lg:py-4 mt-4 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
           
            <motion.div
              variants={fadeIn("up")}
              // initial='visible'
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="flex flex-col lg:flex-row flex-1"
            >
              <Image
                src={Img3}
                alt={"logo"}
                height="0"
                width="0"
                className=" h-fit mb-4  mx-auto"
                unoptimized
              />

           
            </motion.div>
       
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
             
              className="flex-1 h-full "
            >
              <h3 className="h3">{section2Title}</h3>
              <div className="flex flex-col items-center">
                <div className="font-light max-w-[530px] text-grey">
                  <p className="mb-9 prose">{section2Subtitle}</p>
                  <Link href="/serveis">
                    <button
                      className="btn btn-lg btn-link font-normal"
                      aria-label="Reveal More Text"
                    >
                      {btnText} <div className="text-xl">{btnIcon}</div>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* block 3 contact */}
    </>
  );
};


