import HeroSection from "@/components/homeComponents/HeroSection";
import ContactSection from "@/components/homeComponents/ContactSection";
import IntroSection from "@/components/homeComponents/IntroSection";
import Intro2Section from "@/components/homeComponents/Intro2Section";
import ImgListSection from "@/components/homeComponents/ImgListSection";
import DirectionSection from "@/components/contactComponents/DirectionSection";
import ContactFormSection from "@/components/contactComponents/ContactFormSection";

export default function Home() {
  return (
    <main className="  bg-white">
      <HeroSection />
      <Intro2Section />
      <IntroSection />
      <ImgListSection />
      <DirectionSection />
      <ContactFormSection />
    </main>
  );
}
