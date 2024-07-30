import { aboutHero } from "@/lib/data"
import Image from "next/image"

export default function AboutHeroSection() {
  return (
    <section className=" w-full min-h-screen lg:h-screen flex">
      <div className="lg:m-auto subcontainerXl  m-0 flex flex-col lg:flex-row gap-x-20 items-center   pt-[80px] lg:pt-0">

<div className="basis-1/2">
        <Image 
          src="/assets/about-hero.jpg"
          alt="me"
          width={750}
          height={750}
          className=""
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
