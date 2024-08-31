
import DirectionSection from "@/components/contactComponents/DirectionSection";
import ContactFormSection from "@/components/contactComponents/ContactFormSection";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

// reuse of home metadata
export async function generateMetadata({params} : Params) {
  const locale = params.locale
  const t = await getTranslations({locale, namespace: 'home'});
 
  return {
    title: t('metadata.title'),
    description: t('metadata.description')
  };
}
export default function ContactPage( {params: {locale}} :  {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
 
  return (
    <main className="w-full ">
     
      <DirectionSection />
      <ContactFormSection />

    </main>
    // <>
    //   <section className="section  bg-[#EEEDEB] ">
    //     <div className="container mx-auto   ">
    //       <div className="flex flex-col xl:flex-row gap-y-16">
    //         <div className="flex-1">
    //           <div className="h2 max-w-[490px]">Contacte</div>
    //           <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
    //             <div>Ens trobem a </div>
    //             <div>Mataro cami de 33343</div>
    //             <div>Telefon...</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <div className="flex items-center mx-auto w-max-[900px]">
    //     <div className="flex flex-col items-center gap-4">
    //       {/* <!-- Avatar with Gradient Shadow --> */}
    //       <div className="relative my-4">
    //         <div className="absolute -inset-2">
    //           <div className="w-28 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
    //         </div>
    //         <img
    //           src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c"
    //           className="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl"
    //         />
    //       </div>

    //       <p className="text-2xl font-bold">Prajwal Hallale</p>

    //       <div className="text-gray-400">Member since 4 years</div>
    //     </div>
        

    //     <ContactForm />
    //   </div>
    //   {/* <div className='mt-[200px]'>
    // <ContactForm /> 
    // </div>
    //   <iframe
    //   className="border-none mt-10 w-full"
    //     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11946.280575635323!2d2.441932!3d41.535251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b5714a20b33b%3A0x43d960681ead0590!2sdale%20steakhouse!5e0!3m2!1ses!2sus!4v1720305632406!5m2!1ses!2sus"
    //     width="600"
    //     height="450"
        
    //     loading="lazy"
       
    //   ></iframe> */}
    // </>
  );
}
