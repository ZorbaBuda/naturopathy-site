import HeroBanner from "@/components/HeroBanner";
import ServConsSection from "@/components/servicesComponents/ServConsSection";
import ServHeroSection from "@/components/servicesComponents/ServHeroSection";
import { servicesHero } from "@/lib/data";
import picture from "@/public/assets/services-hero.jpg"



export default function page() {
  return (
    <main>
        <HeroBanner title={servicesHero.title} image={picture}/>
      <ServHeroSection />
      <ServConsSection />
    </main>
  )
}
