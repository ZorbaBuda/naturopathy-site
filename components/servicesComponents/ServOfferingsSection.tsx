import { serviceImages } from "@/lib/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import parser from "html-react-parser"
import slugify from "slugify"


export default function ServOfferingsSection() {
  const t = useTranslations("therapies");
  const keys = [
    "therapies.t1",
    "therapies.t2",
    "therapies.t3",
    "therapies.t4",
    "therapies.t5",
  ] as const;
  // const slug = slugify(t("therapies.t1.title"), { lower: true });
 
  return (
    <section className="">
      <div className="subcontainerXl flex flex-col  gap-x-5">
        {keys.map((key, i) => (
          <div
            id={slugify(t(`${key}.title`), {lower:true})}
            key={i}
            className="pt-[85px] lg:pt-[105px]  flex flex-col-reverse gap-10 items-center lg:flex-row lg:even:flex-row-reverse"
          >
            <div className="basis-1/2 md:p-16 ">
              <Image
                src={serviceImages[i]}
                alt={t(`${key}.title`)}
                className="  rounded-3xl"
              />{" "}
            </div>
            <div className="basis-1/2 max-w-fit">
              <div className="h4 flex flex-wrap font-semibold  text-orange2 max-w-fit mb-5">
                {i === 2 ? "PNIE" : t(`${key}.title`)}
              </div>
              <div className="prose-custom">
              {parser(t.raw(`${key}.text`))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
