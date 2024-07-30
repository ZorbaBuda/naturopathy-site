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
import AnimatedButton from "../parts/AnimatedButton";
import { BlurMotion } from "../framer/BlurMotion";
import FadeUp from "../framer/FadeUp";
import FadeIn from "../framer/FadeIn";
import HorizontalScrollImage from "../framer/HorizontalScrollImage";


export default function HeroSection() {
  const { heroTitle, heroSubtitle, linkText, linkHref } = homeData;

  return (
    <section className="w-full h-screen bg-heroBg bg-cover bg-right-top       flex">
      <div className=" pt-[100px] flex flex-col gap-y-10 lg:flex-row items-center subcontainerXl m-auto  ">
      
        <div className="flex flex-col  gap-y-10 basis-1/2    ">

       
        <BlurMotion classname="basis-1/2">  <h1 className="h1 text-white lg:text-dark1  ">{heroTitle}</h1></BlurMotion>
          <div className="basis-1/2">
          <FadeIn delay={0.2}   >
          <h3 className="  mb-10 prose-custom text-white lg:text-dark1 ">{heroSubtitle}</h3></FadeIn>
          <FadeIn delay={0.4}><AnimatedButton text={linkText} href={linkHref} /></FadeIn>
          </div>
        </div>
        <div className="lg:w-[383px] lg:h-[542px] basis-1/2">
       <Image 
         src="/assets/hero-pic.jpg"
         width={383}
         height={542}
         alt="hero-img"
         className="w-full h-full object-contain max-h-fit   "
         />
         </div>
      </div>
    </section>
  );
}
