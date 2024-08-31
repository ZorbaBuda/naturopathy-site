import { BlurMotion } from "../framer/BlurMotion";
import HeroButton from "../parts/HeroButton";
import { useTranslations } from "next-intl";

export default function HomeHeroSection() {
  const linkHref = "/services";
  const t = useTranslations("home");

  return (
    <section className="    h-[565px] sm:h-[686px] bg-right lg:object-center lg:h-[700px] bg-homeHeroD bg-cover flex  ">
      <div className=" w-full  my-auto subcontainerXl  text-white flex flex-col  ">
        <div className="lg:max-w-[60%] ">
          <BlurMotion classname="">
            <h1 className="h1 mb-5 text-cream1   ">
              <span>“</span>
              {t("hero.title")}
              <span>”</span>
            </h1>
          </BlurMotion>

          <h3 className="italic font-semibold  mb-16 text-xl lg:text-2xl ">
            {t("hero.subtitle")}
          </h3>

          <HeroButton text={t("hero.linkText")} href={linkHref} />
        </div>
      </div>
    </section>
  );
}
