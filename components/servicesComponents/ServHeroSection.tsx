import Image from "next/image";
import { servicesHero } from "@/lib/data";
import HeroBanner from "../HeroBanner";

export default function ServHeroSection() {
  return (
    <section className=" w-full   flex flex-col">
    

      <div className="mx-auto max-w-4xl prose-custom px-5 lg:px-0">
        <p>{servicesHero.text1}</p>
        <p>{servicesHero.text2}</p>
        <h4 className="h4">{servicesHero.titleText3}</h4>
        <p>{servicesHero.text3}</p>
        <h4 className="h4">{servicesHero.titleText4}</h4>
        <p>{servicesHero.text4}</p>
      </div>
    </section>
  );
}
