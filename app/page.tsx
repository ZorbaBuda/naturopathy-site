import HomeHeroSection from "@/components/homeComponents/HomeHeroSection";
import ImgListSection from "@/components/homeComponents/Home3Section";
import DirectionSection from "@/components/contactComponents/DirectionSection";
import ContactFormSection from "@/components/contactComponents/ContactFormSection";
import Home1Section from "@/components/homeComponents/Home1Section";
import Home2Section from "@/components/homeComponents/Home2Section";

export default function Home() {
  return (
    <main className="  bg-white">
      <HomeHeroSection />
      <Home1Section />
      <Home2Section />
      <ImgListSection />
      <DirectionSection />
      <ContactFormSection />
    </main>
  );
}
