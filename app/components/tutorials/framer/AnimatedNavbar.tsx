"use client";
// https://www.youtube.com/watch?v=qc2kQcicNNc
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Socials from "../../Socials";
import NavLinks from "../../NavLinks";

export default function AnimatedNavbar() {

  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);

  

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log("scrooly: ", scrollY.get())
    // console.log("scrollyprogress: ", scrollYProgress.get())
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.20, ease: "easeInOut" }}
      className="z-20 fixed top-0 h-48 flex w-full items-center justify-between border-2 bg-gris_claro"
    >
      <div className="flex items-center gap-2 mx-auto">
        <NavLinks />
      </div>
      <Socials />
    </motion.nav>
  );
}
