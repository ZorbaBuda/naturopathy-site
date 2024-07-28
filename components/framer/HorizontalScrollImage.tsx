'use scroll'
import Image from "next/image"
import {motion, useTransform, useScroll} from "framer-motion"
import { useRef } from "react"

export default function HorizontalScrollImage() {
    // const targetRef = useRef<HTMLImageElement | null>(null)
    // const { scrollYProgress} = useScroll({target: targetRef})
  const {scrollYProgress} = useScroll()
  const y = useTransform(scrollYProgress, [0,1], [0,600])
    // const x = useTransform(scrollYProgress, [0,1], ["1%", "-95%"])
    // const x = useTransform(scrollYProgress, [0,1], ["40%", "-50%"])
  

  return (
    <motion.div 
    className=" flex grow    "
  
     style={{top: y}}
    >
    <Image
        //  ref={targetRef}
       
         src="/assets/hero-crop.png"
         alt="hero-image"
         height={817}
         width={2000}
         className="h-full  object-cover object-center  "
         /></motion.div>
  )
}
