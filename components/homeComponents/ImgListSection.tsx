import Link from "next/link";
import React from "react";
import NumTextCard from "../NumTextCard";
import PH2Heading from "../PH2Heading";
import FadeIn from "../framer/FadeIn";
import Image from "next/image";
import { howCanHelp } from "@/lib/data";
import AnimatedButton from "../parts/AnimatedButton";

export default function ImgListSection() {
  return (
    <section className="section-light flex flex-col px-5">
      <div className="text-center md:text-xl flex mx-auto  mb-[30px] ">
        {howCanHelp.heading.p}
      </div>

      <div className="text-center mx-auto h1 mb-8 ">
        {howCanHelp.heading.h2}
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-y-10 max-w-7xl mx-auto ">
        <Image
          className=" mx-auto h-[570px] w-full object-cover object-top md:p-10    "
          src={howCanHelp.image}
          alt="logo"
          width={510}
          height={809}
        />
<div>
        <ul className="  p-5  flex flex-col justify-around md:gap-y-0 gap-y-10 ">
          {howCanHelp.items.map((item) => (
            <NumTextCard key={item.num} num={item.num} text={item.text} />
          ))}
        </ul>
       <AnimatedButton text={howCanHelp.linkText} href={howCanHelp.link} />
        </div>
      </div>
    </section>
  );
}
