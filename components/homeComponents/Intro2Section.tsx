import { homeIntro2 } from "@/lib/data"
import AnimatedButton from "../parts/AnimatedButton"
import Image from "next/image"


export default function Intro2Section() {
  return (
    <div className="section-light">
      <div className="subcontainerXl flex-col-reverse lg:flex-row">
        <Image
         src={homeIntro2.image}
         width={400}
         height={500}
         alt="monstera-deliciosa"
         className=""
        />
        <div className=" flex flex-col subcontainerXl ">
            <h1 className="h2">{homeIntro2.title}</h1>
            <div className="prose-custom">
            {homeIntro2.p.map((p, index) => (
                <p key={index}>{p}</p>
            ) )}
            </div>
            <AnimatedButton text={homeIntro2.linkText} href={homeIntro2.link} />
        </div>
        </div>
    </div>
  )
}
