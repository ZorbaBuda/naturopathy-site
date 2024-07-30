import Image from "next/image"
import { servicesHero } from "@/lib/data"

export default function ServHeroSection() {
  return (
   <section className="relative w-full  pt-[80px] lg:pt-[100px] flex flex-col">
    
    <div className="relative">
    <Image 
      src="/assets/services-hero.jpg"
      height={2800}
      width={1200}
      alt="services"
      className="  h-[450px] w-full object-cover"
      />
      <div className="h1 absolute bottom-20  subcontainer max-w-[60%]">{servicesHero.title}</div>
    </div>
    <div className="mx-auto max-w-4xl prose-custom px-5 lg:px-0">
        <p>{servicesHero.text1}</p>
        <p>{servicesHero.text2}</p>
        <h4 className="h3">{servicesHero.titleText3}</h4>
        <p>{servicesHero.text3}</p>
        <h4 className="h3">{servicesHero.titleText4}</h4>
        <p>{servicesHero.text4}</p>
      
    </div>
   </section>
  )
}
