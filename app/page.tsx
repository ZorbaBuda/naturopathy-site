import Image from "next/image";
import { Header, Footer, Hero} from "@/app/components"

export default function Home() {
  return (
    <main className="w-full max-w-full mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
