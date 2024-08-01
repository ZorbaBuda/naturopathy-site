import { aboutHero } from "@/lib/data"
import Image from "next/image"
import HeroBanner from "../HeroBanner"

export default function AboutHeroSection() {
  return (
    <section className=" w-full  flex flex-col  ">
       <HeroBanner title="La meva història" image="/assets/about-hero.jpg" />

      <div className=" subcontainerXl section-light  flex flex-col-reverse lg:flex-row gap-y-10 gap-x-20 items-center  ">

<div className="basis-1/2 ">
        <Image 
          src="/assets/about-hero-2.jpg"
          alt="me"
          width={750}
          height={750}
          className="object-cover"
         />
         </div>
         <div className=" basis-1/2">
          <h2 className="h2 font-manrope">{aboutHero.title}</h2>
          <div className="prose-custom">
          <p>{aboutHero.text1}</p>
          <p>{aboutHero.text2}</p>
          </div>
         </div>
      </div>

    </section>
  )
}
