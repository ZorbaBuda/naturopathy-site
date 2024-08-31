import HeroBanner from "@/components/HeroBanner";
import picture from "@/public/assets/about-hero.jpg"
import AboutSection from "@/components/aboutComponents/AboutSection";
import DirectionSection from "@/components/contactComponents/DirectionSection";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({params} : Params) {
  const locale = params.locale
  const t = await getTranslations({locale, namespace: 'about'});
 
  return {
    title: t('metadata.title'),
    description: t('metadata.description')
  };
}


export default function AboutPage( {params: {locale}} :  {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("common")
  return (
    <main className="">
    <HeroBanner title={t("aboutHeader")} image={picture} /> 
     <AboutSection />
     <DirectionSection />
    </main>
  );
}
