import Link from "next/link";
import NumTextCard from "../NumTextCard";
import PH2Heading from "../PH2Heading";
import FadeIn from "../framer/FadeIn";
import Image from "next/image";
import { howCanHelp } from "@/lib/data";
import AnimatedButton from "../parts/AnimatedButton";
import { TbPointFilled } from "react-icons/tb";

export default function ImgListSection() {
  return (
    <section className="section-light flex flex-col px-5">
      <div className="text-center md:text-xl flex mx-auto  mb-[30px] ">
        {howCanHelp.heading.p}
      </div>

      <div className="text-center mx-auto h1 mb-8 ">
        {howCanHelp.heading.h2}
      </div>
      <div className=" flex flex-col items-center lg:flex-row lg:gap-x-10 gap-y-10 max-w-7xl mx-auto ">
        <Image
          className=" mx-auto h-[570px] w-full object-cover object-top md:p-10    "
          src={howCanHelp.image}
          alt="logo"
          width={510}
          height={809}
        />
<div>
        <ul className="  p-5  flex flex-col justify-around gap-y-10 ">
          {howCanHelp.items.map((item) => (
            <div key={item} className="flex flex-row items-center gap-x-3">
             <TbPointFilled  className="text-green-600 text-2xl"/>
              <div>{item}</div>
            </div>
          
          ))}
        </ul>
       <AnimatedButton text={howCanHelp.linkText} href={howCanHelp.link} />
        </div>
      </div>
    </section>
  );
}
