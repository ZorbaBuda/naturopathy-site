// import { Oswald, Rozha_One, Playfair_Display} from 'next/font/google';
import "@/styles/globals.css";
// https://fonts.google.com/specimen/Raleway?query=raleway

import Footer from "@/components/Footer";
import TwSizeIndicator from "@/components/helpers/TwSizeIndicator";
import Navbar from "@/components/navs/Navbar";
import ScrollTop from "@/components/ScrollTop";
import SmoothScrolling from "@/components/helpers/SmoothScrolling";

// const oswald = Oswald({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700'],
//   variable: '--font-oswald',
// });

// const rozha = Rozha_One({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-rozha',
// });

// const playfair_display = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-playfair-display',
// });

export const metadata = {
  title: "Naturopatia Mataro",
  description: "Estudio naturopatia en Mataro",
  // keywords: 'yoga, yoga classes, botanica, chisinau, moldova, studio',
  // author: '',
  // creator: 'v',
  // applicationName: 'Next.js',
  // date: '2024-06-17',
  // language: 'en-US',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="">
      <body className="font-ibm_plex_sans">
       
        <TwSizeIndicator />
        <Navbar />
        <ScrollTop />
       {/* <SmoothScrolling>   */}
      {children} 
       {/* </SmoothScrolling>  */}
        <Footer />
      
      </body>
    </html>
  );
}
