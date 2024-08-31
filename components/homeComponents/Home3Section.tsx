import { BlurMotion } from "../framer/BlurMotion";
import MotionUp from "../framer/MotionUp";
import { useTranslations } from "next-intl";
import { NavigationLink } from "../NavigationLink";
import slugify from "slugify";


export default function Home3Section() {
  const t = useTranslations();
  const keys = [
    "therapies.therapies.t1",
    "therapies.therapies.t2",
    "therapies.therapies.t3",
    "therapies.therapies.t4",
    "therapies.therapies.t5",
  ] as const;
  return (
    <section className="section-light  bg-white ">
      <div className="subcontainer-md flex flex-col  w-full">
       <BlurMotion> <div className="text-center text-green2 mx-auto h3 mb-8 ">
          {t("common.therapyListHeader")}
        </div></BlurMotion>
        <div className=" w-full flex flex-col items-center  gap-y-10  mx-auto ">
         

          <ul className="prose-custom-xl  text-dark1 flex flex-col  gap-y-6  ">
            {keys.map((key, i) => (
            <MotionUp
               key={i} 
               delay={0 + 0.2*i}
               classname=""
               > 
            
               <NavigationLink
                href={`/services#${slugify(t(`${key}.title`), {lower:true})}`}
                className="group inline-flex w-full items-center gap-x-8  justify-between pl-5 pr-2 py-3 rounded-xl font-semibold  border-green2   hover:dark:text-white bg-orange1  hover:bg-orange2  transition-colors duration-300 ease-in-out"
              >
                {t(`${key}.title`)}
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                  />
                  <polyline
                    points="12 5 19 12 12 19"
                    className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                  />
                </svg>
              </NavigationLink></MotionUp> 
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
