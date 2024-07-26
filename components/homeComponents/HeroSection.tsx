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
    <section className="   ">
      <div className="pt-[150px] lg:pt-[175px] flex flex-col h-screen lg:h-auto">
        <div className="flex flex-col lg:flex-row gap-y-9 gap-x-[150px] items-center subcontainerXl  ">

        <BlurMotion classname="basis-1/2">  <h1 className="h1 text-green2  ">{heroTitle}</h1></BlurMotion>
          <div className="basis-1/2">
          <FadeIn delay={0.2}   >
          <h3 className="h3 text-dark2 mb-5 ">{heroSubtitle}</h3></FadeIn>
          <FadeIn delay={0.4}><AnimatedButton text={linkText} href={linkHref} /></FadeIn>
          </div>
        </div>
       <HorizontalScrollImage />
      </div>
    </section>
  );
}
