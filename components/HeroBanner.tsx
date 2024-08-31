'use client'
import { motion,useScroll, useTransform } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { BlurMotion } from "./framer/BlurMotion"

const HeroBanner = ({image, title}: {image: StaticImageData, title: string}) => {

  const { scrollYProgress} = useScroll()

  const t = useTransform(scrollYProgress, [0,1], [1, 2])
  return (
    // <div className="mt-[80px] lg:mt-[145px] ">
    <div  className="  ">
       <div className=" lg:h-[500px] h-[297px] overflow-hidden">
        <motion.div style={{scale: t}} className=" ">
    <Image 
      src={image}
      alt={title}
      loading="eager"
      className="  lg:h-[500px] h-[297px] w-full object-cover  object-right-top "
      /> </motion.div></div>
     <BlurMotion> <div className=" h3  flex justify-center lg:justify-start subcontainerXl text-green2">{title}</div></BlurMotion>
    </div>
  )
}

export default HeroBanner