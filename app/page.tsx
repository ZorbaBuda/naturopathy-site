
import HeroSection from "@/components/homeComponents/HeroSection";
import ContactSection from "@/components/homeComponents/ContactSection";
import IntroSection from "@/components/homeComponents/IntroSection";
import Intro2Section from "@/components/homeComponents/Intro2Section";
import ImgListSection from "@/components/homeComponents/ImgListSection";

export default function Home() {
 
  return (
    <main className="  bg-white">
    
     <HeroSection />
      <Intro2Section />
     <IntroSection />
      
   
     {/* <ImgListSection /> */}
     <ContactSection />
      
     
    </main>
  );
}
