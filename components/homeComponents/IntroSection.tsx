

import  Image  from "next/image";
import Link from "next/link";
import { homeIntro } from "@/lib/data";
import GreenButton from "../parts/GreenButton";





export default function IntroSection() {
 
  return (
    <section id="intro" className="section bg-white  ">
      <div className="flex-flex-col mx-auto ">
       
        <div className="flex flex-col-reverse items-center lg:flex-row gap-y-10 ">
          <div className="basis-1/2  ">
      {/* <motion.div style={{y}} className="relative"> */}
       <Image
       
          className="  w-full  "
          src="/assets/home1.jpg"
          alt="home1"
          width={962}
          height={1139}
        />
        {/* </motion.div> */}
        </div>
        <div className=" flex flex-col basis-1/2 subcontainer ">
           <h1 className="h2 text-[#590F03] mb-8">{homeIntro.title} </h1>
           <div className="flex flex-col  prose-custom">
            <div className="mb-6">{homeIntro.label}</div>
            <div className=" mb-6">{homeIntro.text1}</div>
            <div className=" mb-6">{homeIntro.text2}</div>
            </div>
           <GreenButton  text={homeIntro.linkText} href={homeIntro.link} />
        </div>
      
        </div>
        </div>

    </section>
  )
}
