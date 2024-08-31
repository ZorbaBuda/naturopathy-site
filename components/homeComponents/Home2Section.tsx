import Image from "next/image";
import GreenButton from "../parts/GreenButton";
import { BlurMotion } from "../framer/BlurMotion";
import FadeIn from "../framer/FadeIn";
import { useTranslations } from "next-intl";
import parser from "html-react-parser"

export default function Home2Section() {
  const t = useTranslations("home")
  return (
    <section id="intro" className=" bg-cream1  lg:section-light">
      <div className="flex-flex-col mx-auto ">
        <div className="subcontainerXl flex flex-col-reverse items-center lg:flex-row gap-10 ">
          <div className="basis-1/2  ">
            {/* <motion.div style={{y}} className="relative"> */}
            <Image
              className="  w-full  "
              src="/assets/home1.jpg"
              alt="home1"
              width={962}
              height={1139}
            />
            {/* </motion.div> */}
          </div>
          <div className=" flex flex-col basis-1/2  py-10 lg:py-0  ">
            <BlurMotion>
              {" "}
              <h1 className="h3 text-green2 mb-8">{t("home2.title")} </h1>
            </BlurMotion>
            <FadeIn>
              {" "}
              <div className="flex flex-col  prose-custom">
                <div className="">{parser(t.raw("home2.text"))}</div>
               
              </div>
            </FadeIn>
            <GreenButton text={t("home2.linkText")} href={'/services'} />
          </div>
        </div>
      </div>
    </section>
  );
}
