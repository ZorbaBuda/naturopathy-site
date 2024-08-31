// import { Oswald, Rozha_One, Playfair_Display} from 'next/font/google';
import "@/styles/globals.css";
// https://fonts.google.com/specimen/Raleway?query=raleway

import Footer from "@/components/Footer";
import TwSizeIndicator from "@/components/helpers/TwSizeIndicator";
import Navbar from "@/components/navs/Navbar";
import ScrollTop from "@/components/ScrollTop";
import SmoothScrolling from "@/components/helpers/SmoothScrolling";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl'
import {locales} from '@/config';
import {getMessages, getTranslations } from "next-intl/server";
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  children: React.ReactNode,
  params: {
    locale: 'ca' | 'es',
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

// export async function generateMetadata({
//   params: {locale}
// }: Omit<Props, 'children'>) {
//   const t = await getTranslations({locale, namespace: 'LocaleLayout'});

//   return {
//     title: t('title'),
//     description: t('description')
//   };
// }



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

// export const metadata : Metadata = {
//   title: {
//     default: "Naturopatia a Mataró",
//     template:"%s - Naturopatia a Mataró"
//   },
//   description: "Teràpia naturopatia, nutrició i dietètica, ortomolecular, PNIE, antiaging, microimmunoteràpia a Mataro (Barcelona)",
// };

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string}
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-jakarta">
       
        <TwSizeIndicator />
        <NextIntlClientProvider messages={messages}>
        <Navbar />
        <ScrollTop />
       <SmoothScrolling>  
      {children} 
       </SmoothScrolling> 
        <Footer />
        <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

//https://www.youtube.com/watch?v=vLN5yy2YET8

// https://github.com/darkroomengineering/lenis/discussions/244
//https://stackoverflow.com/questions/75274778/lenis-smooth-scroll-preventing-next-links-default-behaviour-of-scrolling-to-top?rq=2
//https://devdreaming.com/blogs/nextjs-smooth-scrolling-with-lenis-gsap
