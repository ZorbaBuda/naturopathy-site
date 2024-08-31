import GreenButton from "../parts/GreenButton";
import FadeUp from "../framer/FadeUp";
import FadeIn from "../framer/FadeIn";
import { BlurMotion } from "../framer/BlurMotion";
import { useTranslations } from "next-intl";
import parser from "html-react-parser";

export default function Home1Section() {
  const t = useTranslations("home");
  return (
    <div className="section-light bg-white">
      <div className="subcontainer-md flex-col-reverse lg:flex-row">
        <div className=" flex flex-col  ">
          <BlurMotion>
            {" "}
            <h1 className="h3 text-green2">{t("home1.title")}</h1>
          </BlurMotion>

          <div className="prose-custom-xl text-[#292929]">
            <FadeIn>
              {" "}
              <div>{parser(t.raw("home1.text"))}</div>
            </FadeIn>
          </div>
          <FadeIn>
            {" "}
            <GreenButton text={t("home1.linkText")} href={"/about"} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
