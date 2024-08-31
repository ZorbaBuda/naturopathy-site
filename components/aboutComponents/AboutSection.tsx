import Image from "next/image";
import parser from "html-react-parser";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");
  return (
    <section className="section-light w-full">
      <div className="subcontainerXl flex flex-col gap-5">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <div className="prose-custom">{parser(t.raw("text1"))}</div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="basis-1/2 prose-custom-xl">
            {parser(t.raw("text2"))}
          </div>
          <div className="basis-1/2">
            <Image
              src="/assets/about-history.jpg"
              alt="plant"
              width={750}
              height={1000}
              className="p-16"
            />
          </div>
        </div>

        <div className="prose-custom">{parser(t.raw("text3"))}</div>

        <div className="prose-custom">{parser(t.raw("text4"))}</div>

        <div className="prose-custom">{parser(t.raw("text5"))}</div>
      </div>
    </section>
  );
}
