
import AboutHistorySection from "@/components/aboutComponents/AboutHistorySection"
import AboutHeroSection from "@/components/aboutComponents/AboutHeroSection";
import AboutCurriculumSection from "@/components/aboutComponents/AboutCurriculumSection";
import HeroBanner from "@/components/HeroBanner";

// https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code


export default function page() {
  return (
    <main>
    <HeroBanner title="La meva història" image="/assets/about-hero.jpg" /> 
     <AboutHeroSection />
     <AboutHistorySection />
     <AboutCurriculumSection />
    </main>
  );
}
