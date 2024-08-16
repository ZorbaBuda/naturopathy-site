"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import footer data
import { footerData } from "@/lib/data";
import { Separator } from "./ui/separator";

// import motion

export default function Footer() {
  // destructure footer data
  const { services, contact, links,  termes} = footerData;
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className=" bg-grey2 text-sm lg:text-base text-footerText  w-full">
      <div className="section-light flex flex-col gap-y-10 mx-auto   max-w-[1400px] px-10 2xl:px-0 ">
     
      

        <div className=" flex flex-col lg:flex-row justify-around  gap-y-14 ">
      
          {/* Services  */}
          <div className=" flex flex-col gap-y-6">
            <div>
              <div className=" text-lg uppercase  mb-6">
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
            <div className="text-lg uppercase ">
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
              <div className=" text-lg uppercase  mb-6">
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
   
    <section className="flex space-x-3 justify-center mx-auto py-5">
        <p className="">
        &copy; {currentYear}<span> Naturopatia Mataro</span>
        </p>
        <Separator orientation="vertical" className="text-red-600"/>
        <Link href={termes.privacy.href} className="hover:underline">{termes.privacy.name}</Link>
      </section>
       </footer>
    
  );
}


