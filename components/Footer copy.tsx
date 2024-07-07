"use client";

import React from "react";
import Link from "next/link";
// import footer data
import { footerData } from "@/lib/data";
// import motion

export default function Footer() {
  // destructure footer data
  const { services, contact, links, program } = footerData;

  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        {/* grid */}

        <div className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          {/* Services  */}
          <div className="flex-1 flex flex-col gap-y-6">
            <div>
              <div className=" text-xl uppercase tracking-[0.08em] mb-6">
                {services.title}
              </div>
              <ul className="font-thin flex flex-col gap-y-4 text-[#dbdbdb]">
                {services.items.map((item, index) => {
                  // destructure item
                  const { name } = item;
                  return (
                    <li key={index} className="hover:text-white transition">
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* title */}
            <div className="text-xl uppercase tracking-[0.08em]">
              {contact.title}
            </div>

            {/* address, phone & email */}
            <div className="flex flex-col gap-y-4 font-medium text-[#dbdbdb]">
              {/* address */}
              <div className="flex items-center gap-x-[10px]">
                <div>{contact.address.icon}</div>
                <div>{contact.address.name}</div>
              </div>
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <div>{contact.phone.icon}</div>
                <div>{contact.phone.number}</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <div>{contact.email.icon}</div>
                <div>{contact.email.address}</div>
              </div>
            </div>
          </div>
          {/* Useful Links */}
          <div className="flex-1 flex flex-col gap-y-6">
            <div>
              <div className=" text-xl uppercase tracking-[0.08em] mb-6">
                {links.title}
              </div>
              <ul className="font-thin flex flex-col gap-y-4 text-[#dbdbdb]">
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <Link href={href} className="hover:text-white transition">
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Working Time */}
          <div className="flex-1">
            <div className=" text-xl uppercase tracking-[0.08em] mb-6">
              {program.title}
            </div>
            <ul className="font-thin flex flex-col gap-y-4 text-[#dbdbdb]">
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
