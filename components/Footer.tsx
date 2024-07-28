"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import footer data
import { footerData, headerData } from "@/lib/data";

// import motion

export default function Footer() {
  // destructure footer data
  const { services, contact, links, program } = footerData;

  return (
    
    <footer className=" bg-[#B5C0D0] text-lg text-dark1  w-full">
      <div className="section-light flex flex-col gap-y-10 mx-auto   max-w-[1400px] px-10 2xl:px-0 ">
      <Logo />
      

        <div className=" flex flex-col lg:flex-row justify-around  gap-y-14 ">
      
          {/* Services  */}
          <div className=" flex flex-col gap-y-6">
            <div>
              <div className=" text-xl uppercase  mb-6">
                {services.title}
              </div>
              <ul className=" flex flex-col gap-y-3 ">
                {services.items.map((item, index) => {
                  // destructure item
                  const { name } = item;
                  return (
                    <li key={index} className="">
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            </div>

            {/* contacte */}
            <div className=" flex flex-col gap-y-6">
            <div className="text-xl uppercase ">
              {contact.title}
            </div>

           
            <div className="flex flex-col gap-y-4  ">
             
              <div className="flex items-center gap-x-[10px]">
                <div>{contact.address.icon}</div>
                <div>{contact.address.name}</div>
              </div>
            
              <div className="flex items-center gap-x-[10px]">
                <div>{contact.phone.icon}</div>
                <div>{contact.phone.number}</div>
              </div>
            
              <div className="flex items-center gap-x-[10px]">
                <div>{contact.email.icon}</div>
                <div>{contact.email.address}</div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className=" flex flex-col gap-y-6">
            <div>
              <div className=" text-xl uppercase  mb-6">
                {links.title}
              </div>
              <ul className=" flex flex-col gap-y-4 ">
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <Link href={href} className="">
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        
       
      </div>
      </div>
   
    <section className="flex">
        <p className="items-center mx-auto py-5">
          2024 Naturopatia Mataro
        </p>
      </section> </footer>
    
  );
}

const Logo = () => {
  const { logo } = headerData;
  return (
  <Link href="/" className=" ">
          <div className="flex items-center">
            <Image
              // className='w-[188px] h-[90px]'
              className="  "
              src={logo}
              alt="logo"
              width={88}
              height={90}
            />
            <div className={`text-white font-medium flex flex-col gap-0 font-logo lg:text-3xl text-2xl `}>
              <div className='text-[#40961D] '>Christian Constanseu</div> 
              {/* <div></div> */}
              <div className='lg:text-sm text-sm font-open_sans'>NATURÓPATA</div>
            </div>
          </div>

        </Link>
  )
}
