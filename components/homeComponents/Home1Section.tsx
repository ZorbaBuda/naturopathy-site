import { homeIntro1 } from "@/lib/data"
import GreenButton from "../parts/GreenButton"
import FadeUp from "../framer/FadeUp"
import FadeIn from "../framer/FadeIn"
import { BlurMotion } from "../framer/BlurMotion"


export default function Home1Section() {
  return (
    <div className="section-light bg-white">
      <div className="subcontainer-md flex-col-reverse lg:flex-row">
      
        <div className=" flex flex-col  ">
         
          <BlurMotion> <h1 className="h3 text-green2">{homeIntro1.title}</h1></BlurMotion>  
            
         <div className="prose-custom-xl text-[#292929]">
          
                <FadeIn >    <p >{homeIntro1.text1}</p> </FadeIn>
          <FadeIn >    <p className="font-semibold">{homeIntro1.text2}</p></FadeIn>
          
            </div>
            <FadeIn >  <GreenButton text={homeIntro1.linkText} href={homeIntro1.link} /></FadeIn> 
        </div>
        </div>
    </div>
  )
}
