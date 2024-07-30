import React from 'react'
// import { Contact  } from '@/components'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link';

export default function page() {
  return (
    <>
   
    <section className='section  bg-[#EEEDEB] '>
      <div className='container mx-auto   '>
      <div className='flex flex-col xl:flex-row gap-y-16'>
      <div
            className='flex-1'
          >
        <div className='h2 max-w-[490px]'>Contacte</div>
        <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
          <div>Ens trobem a </div>
          <div>Mataro cami de 33343</div>
          <div>Telefon...</div>
        </div>
      </div>
      </div>
      
      </div>
    </section>
      <div className='flex items-center mx-auto w-max-[900px]'>
       <ContactForm/></div>
    {/* <div className='mt-[200px]'>
    <ContactForm /> 
    </div>
      <iframe
      className="border-none mt-10 w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11946.280575635323!2d2.441932!3d41.535251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b5714a20b33b%3A0x43d960681ead0590!2sdale%20steakhouse!5e0!3m2!1ses!2sus!4v1720305632406!5m2!1ses!2sus"
        width="600"
        height="450"
        
        loading="lazy"
       
      ></iframe> */}
  
    </>
  )
}
