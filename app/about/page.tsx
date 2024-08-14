
import AboutHistorySection from "@/components/aboutComponents/AboutHistorySection"
import AboutHeroSection from "@/components/aboutComponents/AboutHeroSection";
import AboutCurriculumSection from "@/components/aboutComponents/AboutCurriculumSection";
import HeroBanner from "@/components/HeroBanner";
import picture from "@/public/assets/about-hero.jpg"
import AboutSection from "@/components/aboutComponents/AboutSection";

// https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code


export default function page() {
  return (
    <main className="">
    <HeroBanner title="La meva història" image={picture} /> 
     {/* <AboutHeroSection /> */}
     <AboutSection />
     <AboutHistorySection />
     <AboutCurriculumSection />
    </main>
  );
}
