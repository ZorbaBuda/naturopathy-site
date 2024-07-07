'use client'

import React from 'react';
import Link from 'next/link';
// import footer data
import { footerData } from '@/lib/data';
// import motion


export default function Footer()  {
  // destructure footer data
  const { about, links, program, newsletter } = footerData;

  return (
    <footer className='section bg-dark'>
      <div className='container mx-auto'>
        {/* grid */}

        <div
        
          className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'
        >
          {/* About Void Tattoo */}
          <div
            className='flex-1 flex flex-col gap-y-6'
          >
            {/* title */}
            <div className='font-oswald text-xl uppercase tracking-[0.08em]'>
              {about.title}
            </div>
            {/* subtitle */}
            <div className='font-thin leading-relaxed text-[#dbdbdb]'>
              {about.subtitle}
            </div>
            {/* address, phone & email */}
            <div className='flex flex-col gap-y-4 font-medium text-[#dbdbdb]'>
              {/* address */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              {/* phone */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              {/* email */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </div>
          {/* Useful Links */}
          <div
            className='flex-1 flex flex-col gap-y-6'
          >
            <div>
              <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
                {links.title}
              </div>
              <ul className='font-thin flex flex-col gap-y-4 text-[#dbdbdb]'>
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <Link href={href} className='hover:text-white transition'>
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Working Time */}
          <div  className='flex-1'>
            <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
              {program.title}
            </div>
            <ul className='font-thin flex flex-col gap-y-4 text-[#dbdbdb]'>
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
          {/* Newsletter */}
          <div  className='flex-1'>
            <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
              {newsletter.title}
            </div>
            <div className='font-thin leading-relaxed mb-9 text-[#dbdbdb]'>
              {newsletter.subtitle}
            </div>
            <form className='flex justify-between items-start border-b border-[#090707]'>
              <input
                className='font-thin outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2'
                placeholder={newsletter.form.placeholder}
                type='text'
              />
              <button className='text-2xl cursor-pointer' type='submit'>
                {newsletter.form.icon}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};


