import { servicesDetail } from "@/lib/data"
import Image from "next/image"

export default function ServOfferingsSection() {
  return (
    <section className="section-light">
        <div className="subcontainerXl flex flex-col  gap-5">
            {servicesDetail.map((service,i) => (
                <div  key={i} className="flex flex-col gap-10 items-center lg:flex-row lg:even:flex-row-reverse">
                    <div className="basis-1/2">
                     <Image 
                        src={service.image}
                        alt={service.title}
                        className=" md:p-16 p-0 "
                     /> </div>
                    <div className="basis-1/2">
                    <div  className="h4 flex flex-wrap font-semibold  text-green1 max-w-fit mb-5">{service.title}</div>
               
                      <p className="prose-custom">{service.text}</p>
                </div>
                </div>
            ))}
        </div>
    </section>
  )
}
