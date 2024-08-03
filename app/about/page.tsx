
import AboutHistorySection from "@/components/aboutComponents/AboutHistorySection"
import AboutHeroSection from "@/components/aboutComponents/AboutHeroSection";
import AboutCurriculumSection from "@/components/aboutComponents/AboutCurriculumSection";
import HeroBanner from "@/components/HeroBanner";
import TestHeader from "@/components/aboutComponents/TestHeader";

// https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code


export default function page() {
  return (
    <main>
      <TestHeader />
      {/* <HeroBanner title="La meva història" image="/assets/about-hero.jpg" /> */}
     <AboutHeroSection />
     <AboutHistorySection />
     <AboutCurriculumSection />
    </main>
  );
}
