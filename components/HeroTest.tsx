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
import TextReveal from "./tutorials/framer/TextReveal";

const container = {
  hidden: { display: "" },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const HeroTest = () => {
  // destructure heroData
  const {
    title,
    subtitle,
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
      <section
        // className='bg-hero_img bg-cover bg-center min-h-[40vh] lg:h-[848px] xl:h-[948px] 2xl:h-[1048px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'
        // className='bg-hero_img bg-cover bg-center min-h-[40vh] lg:h-[848px] xl:h-[948px] 2xl:h-[1048px] bg-no-repeat relative mt-[110px] '
        className=" bg-hero_img bg-cover bg-center h-screen bg-no-repeat flex items-center   "
      >
        <div
          className="
        text-white px-7   flex flex-col space-y-9  "
        >
          <p
            // variants={fadeIn('left')}
            className="text-xl  max-w-lg leading-relaxed"
          >
            {subtitle}
          </p>

          <TextReveal text={title} />

          <Link href="/serveis">
            <button
              className="btn btn-lg  font-normal"
              aria-label="Reveal More Text"
            >
              {btnText}
            </button>
          </Link>
        </div>
      </section>

      {/* block 1 */}
      <section className="lg:py-4 mt-4 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
            {/* text */}
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

            {/* image */}
            <div className="flex flex-col lg:flex-row flex-1">
              <Image
                src={Logo}
                alt={"logo"}
                height="0"
                width="0"
                className=" h-fit mb-4  mx-auto"
                unoptimized
              />

              {/* <div className='text-[360px] xl:text-[620px] 2xl:text-[720px] leading-none font-rozha lg:-tracking-[0.055em] bg-about_img bg-no-repeat bg-right bg-clip-text text-transparent'>
        01
      </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* block 2 */}
      <section className="lg:py-4 mt-4 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
            {/* image */}
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

              {/* <div className='text-[360px] xl:text-[620px] 2xl:text-[720px] leading-none font-rozha lg:-tracking-[0.055em] bg-about_img bg-no-repeat bg-right bg-clip-text text-transparent'>
        01
      </div> */}
            </motion.div>
            {/* text */}
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              // className='flex-1 h-full xl:mt-48'
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
      </section>

      {/* block 3 contact */}
    </>
  );
};

export default HeroTest;
