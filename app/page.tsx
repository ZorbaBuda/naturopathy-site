import Image from "next/image";
import {  Contact, Hero, HeroTest} from "@/components"
import Homepage from "@/components/homeComponents/Homepage";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="w-full max-w-full mx-auto overflow-hidden bg-white">
    
     <Homepage />
     <ContactForm />
      
     
    </main>
  );
}
