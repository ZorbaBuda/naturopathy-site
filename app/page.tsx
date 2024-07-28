
'use client'
import HeroSection from "@/components/homeComponents/HeroSection";
import ContactSection from "@/components/homeComponents/ContactSection";
import BannerSection from "@/components/homeComponents/BannerSection";
import { homeBanner } from "@/lib/data";
import IntroSection from "@/components/homeComponents/IntroSection";
import Intro2Section from "@/components/homeComponents/Intro2Section";
import ImgListSection from "@/components/homeComponents/ImgListSection";
import { useLenis } from "@studio-freight/react-lenis";

export default function Home() {
 
  return (
    <main className="w-full  bg-white">
    
     <HeroSection />
     <IntroSection />
     <BannerSection text={homeBanner} />
     <Intro2Section />
     <ImgListSection />
     <ContactSection />
      
     
    </main>
  );
}
