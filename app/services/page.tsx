import ContactFormSection from "@/components/contactComponents/ContactFormSection";
import DirectionSection from "@/components/contactComponents/DirectionSection";
import HeroBanner from "@/components/HeroBanner";
import ServConsSection from "@/components/servicesComponents/ServConsSection";
import ServFAQSection from "@/components/servicesComponents/ServFAQSection";
import ServFunctioningSection from "@/components/servicesComponents/ServFunctioningSection";
import ServHeroSection from "@/components/servicesComponents/ServHeroSection";
import ServOfferingsSection from "@/components/servicesComponents/ServOfferingsSection";
import { servicesHero } from "@/lib/data";
import picture from "@/public/assets/services-hero.jpg"



export default function page() {
  return (
    <main>
        <HeroBanner title={servicesHero.title} image={picture}/>
      <ServHeroSection />
      <ServOfferingsSection />
      <DirectionSection />
      <ContactFormSection />
      
    </main>
  )
}
