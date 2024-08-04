'use client'
import { motion,useScroll, useTransform } from "framer-motion"
import Image, { StaticImageData } from "next/image"

const HeroBanner = ({image, title}: {image: StaticImageData, title: string}) => {

  const { scrollYProgress} = useScroll()

  const t = useTransform(scrollYProgress, [0,1], [1, 2])
  return (
    // <div className="mt-[80px] lg:mt-[145px] ">
    <div  className="mt-[80px] lg:mt-[145px]  ">
       <div className=" lg:h-[500px] h-[297px] w-full">
        <motion.div style={{scale: t}} className="overflow-hidden ">
    <Image 
      src={image}
      alt={title}
      className="  lg:h-[500px] h-[297px] w-full object-cover  object-right "
      /> </motion.div></div>
      <div className=" h1  flex justify-center lg:justify-start subcontainerXl text-primary">{title}</div>
    </div>
  )
}

export default HeroBanner