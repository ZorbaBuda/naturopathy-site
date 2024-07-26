import Image from "next/image";
import {  Contact, Hero, HeroTest} from "@/components"
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/homeComponents/HeroSection";

export default function Home() {
  return (
    <main className="w-full  bg-white">
    
     <HeroSection />
     <ContactForm />
      
     
    </main>
  );
}
