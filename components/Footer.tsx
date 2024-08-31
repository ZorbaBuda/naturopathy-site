"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import footer data
import { footerData } from "@/lib/data";
import { Separator } from "./ui/separator";
import { useTranslations } from "next-intl";
import { NavigationLink } from "./NavigationLink";
import LocaleSwitcher from "./LocaleSwitcher";

// import motion

export default function Footer() {
  const t = useTranslations();
  // destructure footer data
  const { services, contact, links, termes } = footerData;
  const currentYear = new Date().getFullYear();

  const servicesKeys = [
    "therapies.therapies.t1",
    "therapies.therapies.t2",
    "therapies.therapies.t3",
    "therapies.therapies.t4",
    "therapies.therapies.t5",
  ] as const;

  return (
    <footer className=" bg-grey2 text-sm lg:text-base text-footerText  w-full">
      <div className="section-light flex flex-col gap-y-10 mx-auto   max-w-[1400px] px-10 2xl:px-0 ">
        <div className=" flex flex-col lg:flex-row justify-around  gap-y-14 ">
          {/* Services  */}
          <div className=" flex flex-col gap-y-6 basis-1/4">
            <div>
              <div className=" text-lg uppercase  mb-6">{t("common.footer.servicesTitle")}</div>
              <ul className=" flex flex-col gap-y-3 ">
                {servicesKeys.map((key, index) => (
                  <li key={index} className="">
                    {t(`${key}.title`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* contacte */}
          <div className=" flex flex-col gap-y-6 basis-1/4">
            <div className="text-lg uppercase ">{t("common.footer.contactTitle")}</div>

            <div className="flex flex-col gap-y-4  ">
              <div className="flex items-center gap-x-[10px]">
                <div>{contact.address.icon}</div>
                <div>{`${t("contactData.address")} (BCN)`}</div>
              </div>

              <div className="flex items-center gap-x-[10px]">
                <div>{contact.phone.icon}</div>
                <div>{t("contactData.phoneTabuled")}</div>
              </div>

              <div className="flex items-center gap-x-[10px]">
                <div>{contact.email.icon}</div>
                <div>{t("contactData.email")}</div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className=" flex flex-col gap-y-6 basis-1/4">
            <div>
              <div className=" text-lg uppercase  mb-6">{t("common.footer.linksTitle")}</div>
              <ul className=" flex flex-col gap-y-4 ">
                <NavigationLink className="px-0 py-0" href="/"> {t("Navbar.links.home")} </NavigationLink>
                <NavigationLink className="px-0 py-0" href="/about"> {t("Navbar.links.about")} </NavigationLink>
                <NavigationLink className="px-0 py-0" href="/services"> {t("Navbar.links.services")}</NavigationLink>
                <NavigationLink className="px-0 py-0" href="/contact"> {t("Navbar.links.contact")}</NavigationLink>
                <NavigationLink className="px-0 py-0" href="/privacy" >{t("Navbar.links.privacy")}</NavigationLink>

              </ul>
            </div>
          </div>

          {/* disclaimer and locale selector */}
          <div className=" flex flex-col gap-y-6 basis-1/4">
           <p>{t("common.footer.disclaimer")} </p>
           <LocaleSwitcher bg="bg-grey2" text="text-footerText" />
            </div>

          {/* <div className=" flex flex-col gap-y-6">
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
          </div> */}
        </div>
      </div>

      <section className="flex space-x-3 justify-center mx-auto py-5">
        <p className="">
          &copy; {currentYear}
          <span> Christian Constanseu</span>
        </p>
        {/* <Separator orientation="vertical" className="text-red-600" />
        <Link href={termes.privacy.href} className="hover:underline">
          {termes.privacy.name}
        </Link> */}
      </section>
    </footer>
  );
}
