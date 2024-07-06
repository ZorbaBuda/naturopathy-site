"use client";
// https://www.youtube.com/watch?v=qc2kQcicNNc
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Socials from "../../Socials";
import NavLinks from "../../NavLinks";

export default function AnimatedNavbar() {

  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(true)

  

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log("scrooly: ", scrollY.get())
    // console.log("scrollyprogress: ", scrollYProgress.get())
    // console.log(scrollYProgress.get() > 0.99)
    // if (latest > previous && latest > 100 ) {
      if (latest > previous  ) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest < 150){
      setTransparent(true) 
      console.log(transparent)
    } else {
      setTransparent(false)
    }
    if(scrollYProgress.get() > 0.99){
      setHidden(false)
    }

  });
  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.40, ease: "easeInOut" }}
      className={`z-20 fixed top-0 h-28 flex w-full items-center justify-between 
                 transition-all duration-700
                 ${ transparent ? "bg-transparent" : "bg-gris_claro"}
        `}
    >
      <div className="flex items-center gap-2 mx-auto">
        <NavLinks />
      </div>
      <Socials />
    </motion.nav>
  );
}
