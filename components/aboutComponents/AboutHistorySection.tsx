import { aboutHistory } from "@/lib/data"
import Image from "next/image"


export default function AboutHistorySection() {
  return (
    <section className="bg-[#F6F6F6]">
   <div className="section-light flex flex-col gap-y-10 lg:flex-row items-center ">
     <div className="basis-2/3 px-5 lg:px-20 ">
        <h3 className="h3">{aboutHistory.title}</h3>
        <div className="prose-custom">
            <p>{aboutHistory.text1}</p>
            <p>{aboutHistory.text2}</p>
            <p>{aboutHistory.text3}</p>
        </div>
     </div>
     <div className=" lg:block basis-1/3">
        <Image 
         src="/assets/about-history.jpg"
         alt="plant"
         width={750}
         height={1000}
         className=""
        />
     </div>
   </div>
    </section>
  )
}
