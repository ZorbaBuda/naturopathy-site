import Image from "next/image";
import {  Contact, Hero, HeroTest} from "@/app/components"

export default function Home() {
  return (
    <main className="w-full max-w-full mx-auto overflow-hidden bg-white">
     <HeroTest />
      <Contact />
      
     
    </main>
  );
}
