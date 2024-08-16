import HomeHeroSection from "@/components/homeComponents/HomeHeroSection";
import DirectionSection from "@/components/contactComponents/DirectionSection";
import ContactFormSection from "@/components/contactComponents/ContactFormSection";
import Home1Section from "@/components/homeComponents/Home1Section";
import Home2Section from "@/components/homeComponents/Home2Section";
import Home3Section from "@/components/homeComponents/Home3Section";

export default function Home() {
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
