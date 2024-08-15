import { homeIntro1 } from "@/lib/data"
import GreenButton from "../parts/GreenButton"


export default function Home1Section() {
  return (
    <div className="section-light bg-white">
      <div className="subcontainer-md flex-col-reverse lg:flex-row">
      
        <div className=" flex flex-col  ">
            <h1 className="h3 text-green2">{homeIntro1.title}</h1>
            <div className="prose-custom-xl text-[#292929]">
          
                <p >{homeIntro1.text1}</p>
                <p className="font-semibold">{homeIntro1.text2}</p>
          
            </div>
            <GreenButton text={homeIntro1.linkText} href={homeIntro1.link} />
        </div>
        </div>
    </div>
  )
}
