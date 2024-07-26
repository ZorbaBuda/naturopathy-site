'use scroll'
import Image from "next/image"
import {motion, useTransform, useScroll} from "framer-motion"
import { useRef } from "react"

export default function HorizontalScrollImage() {
    const targetRef = useRef<HTMLImageElement | null>(null)
    const { scrollYProgress} = useScroll({target: targetRef})

    const x = useTransform(scrollYProgress, [0,1], ["1%", "-95%"])
    console.log(x)

  return (
    <motion.div style={{x}}>
    <Image
         ref={targetRef}
         src="/assets/hero-crop.png"
         alt="hero-image"
         height={817}
         width={2000}
         className=""
         /></motion.div>
  )
}
