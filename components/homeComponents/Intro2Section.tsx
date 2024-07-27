import { homeIntro2 } from "@/lib/data"
import AnimatedButton from "../parts/AnimatedButton"

export default function Intro2Section() {
  return (
    <div className="section-light">
        <div className="prose flex flex-col subcontainer font-ibm_plex_sans ">
            <h1>{homeIntro2.title}</h1>
            {homeIntro2.p.map((p, index) => (
                <p key={index}>{p}</p>
            ) )}
            <AnimatedButton text={homeIntro2.linkText} href={homeIntro2.link} />
        </div>
    </div>
  )
}
