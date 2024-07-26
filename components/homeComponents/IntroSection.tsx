import { StaticImageData } from "next/image";
import  Image  from "next/image";
import Link from "next/link";
import { homeIntro } from "@/lib/data";

type ContentProps = {
    title: string;
    label: string;
    text: string;
    linkText: string;
    link: string;
    image: StaticImageData
}

export default function IntroSection() {
  return (
    <section className="section bg-white  ">
      <div className="flex-flex-col mx-auto 2xl:max-w-7xl lg:max-w-[70%] 
      px-5 md:px-[110px] lg:px-0">
        <div className="h2c mb-8">{homeIntro.title} </div>
        <div className="flex flex-col-reverse lg:flex-row gap-y-16 gap-x-32">
      <div className="lg:w-[50%]">
       <Image
        
          className=" w-full  "
          src={homeIntro.image}
          alt="logo"
          width={558}
          height={671}
        />
        </div>
        <div className="flex flex-col lg:w-[50%]">
            <div className="mb-6">{homeIntro.label}</div>
            <div className="h3c mb-6">{homeIntro.text}</div>
           <Link className="border-black border-b-2 max-w-fit tracking-tight " href={homeIntro.link} >{homeIntro.linkText}</Link>
        </div>
      
        </div>
        </div>

    </section>
  )
}
