import Image from "next/image";
import {  Contact, Hero, HeroTest} from "@/components"
import HeroSection from "@/components/homeComponents/HeroSection";
import ContactSection from "@/components/homeComponents/ContactSection";
import BannerSection from "@/components/homeComponents/BannerSection";
import { homeBanner } from "@/lib/data";
import IntroSection from "@/components/homeComponents/IntroSection";

export default function Home() {
  return (
    <main className="w-full  bg-white">
    
     <HeroSection />
     <IntroSection />
     <BannerSection text={homeBanner} />
     <ContactSection />
      
     
    </main>
  );
}
