import Image from "next/image";
import Link from "next/link";
import { homeIntro2 } from "@/lib/data";
import GreenButton from "../parts/GreenButton";

export default function Home2Section() {
  return (
    <section id="intro" className=" bg-cream1  lg:section-light">
      <div className="flex-flex-col mx-auto ">
        <div className="subcontainerXl flex flex-col-reverse items-center lg:flex-row gap-y-10 ">
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
          <div className=" flex flex-col basis-1/2 subcontainer py-10 lg:py-0  ">
            <h1 className="h3 text-green2 mb-8">{homeIntro2.title} </h1>
            <div className="flex flex-col  prose-custom">
              <div className=" mb-6">{homeIntro2.text1}</div>
              <div className=" mb-6">{homeIntro2.text2}</div>
              <div className=" mb-6">{homeIntro2.text3}</div>
            </div>
            <GreenButton text={homeIntro2.linkText} href={homeIntro2.link} />
          </div>
        </div>
      </div>
    </section>
  );
}
