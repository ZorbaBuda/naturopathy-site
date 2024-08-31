import DirectionSection from "@/components/contactComponents/DirectionSection";
import HeroBanner from "@/components/HeroBanner";
import ServOfferingsSection from "@/components/servicesComponents/ServOfferingsSection";
import picture from "@/public/assets/services-hero.jpg";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "therapies" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function TherapiesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("common");
  return (
    <main>
      <HeroBanner title={t("servicesHeader")} image={picture} />
      <ServOfferingsSection />
      <DirectionSection />
    </main>
  );
}
