import HomeHeroSection from "@/components/homeComponents/HomeHeroSection";
import DirectionSection from "@/components/contactComponents/DirectionSection";
import ContactFormSection from "@/components/contactComponents/ContactFormSection";
import Home1Section from "@/components/homeComponents/Home1Section";
import Home2Section from "@/components/homeComponents/Home2Section";
import Home3Section from "@/components/homeComponents/Home3Section";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({params} : Params) {
  const locale = params.locale
  const t = await getTranslations({locale, namespace: 'home'});
 
  return {
    title: t('metadata.title'),
    description: t('metadata.description')
  };
}

export default function HomePage( {params: {locale}} :  {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="  bg-white">
      <HomeHeroSection />
      <Home1Section />
      <Home2Section />
      <Home3Section />
      <DirectionSection />
      <ContactFormSection />
    </main>
  );
}
