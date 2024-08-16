import { servicesDetail } from "@/lib/data"
import Image from "next/image"

export default function ServOfferingsSection() {
  return (
    <section className="">
        <div className="subcontainerXl flex flex-col  gap-x-5">
            {servicesDetail.map((service,i) => (
                <div id={service.id} key={i} className="pt-[85px] lg:pt-[105px]  flex flex-col-reverse gap-10 items-center lg:flex-row lg:even:flex-row-reverse">
                    <div className="basis-1/2 md:p-16 ">
                     <Image 
                        src={service.image}
                        alt={service.title}
                        className="  rounded-3xl"
                     /> </div>
                    <div className="basis-1/2 max-w-fit">
                    <div  className="h4 flex flex-wrap font-semibold  text-orange2 max-w-fit mb-5">{service.title}</div>
                     <div className="prose-custom">
                      {service.texts.map((text, i) => (
                         <p key={i}>{text}</p>
                      ))}
                     </div>
                </div>
                </div>
            ))}
        </div>
    </section>
  )
}
