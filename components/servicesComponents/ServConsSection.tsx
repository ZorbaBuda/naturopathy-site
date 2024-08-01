import  Image  from "next/image";
import Link from "next/link";
import { servicesCons } from "@/lib/data";
import GreenButton from "../parts/GreenButton";





export default function ServConsSection() {
 
  return (
    <section id="intro" className="section bg-white  ">
      <div className="flex-flex-col mx-auto ">
       
        <div className="flex flex-col items-center lg:flex-row-reverse gap-y-10 ">
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
           <h1 className="h2 mb-8">{servicesCons.title1} </h1>
           <h3 className="h4 mb-8">{servicesCons.title2} </h3>
           <div className="flex flex-col  prose-custom">
            <div className="mb-6">{servicesCons.text}</div>
            </div>
        </div>
      
        </div>
        </div>

    </section>
  )
}
