
import AboutHistorySection from "@/components/aboutComponents/AboutHistorySection"
import AboutHeroSection from "@/components/aboutComponents/AboutHeroSection";
import AboutCurriculumSection from "@/components/aboutComponents/AboutCurriculumSection";
import HeroBanner from "@/components/HeroBanner";
import picture from "@/public/assets/about-hero.jpg"
import AboutSection from "@/components/aboutComponents/AboutSection";
import ContactFormSection from "@/components/contactComponents/ContactFormSection";
import DirectionSection from "@/components/contactComponents/DirectionSection";

// https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code


export default function page() {
  return (
    <main className="">
    <HeroBanner title="Sobre mi" image={picture} /> 
     {/* <AboutHeroSection /> */}
     <AboutSection />
     {/* <AboutHistorySection /> */}
     {/* <AboutCurriculumSection /> */}
     <DirectionSection />
      <ContactFormSection />
    </main>
  );
}
