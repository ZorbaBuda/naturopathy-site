import React from "react";
import Image from "next/image";
import pic from "@/public/img/gallery/8.png";
import picKitchen from "@/public/img/gallery/kitchen.jpeg";
import { howCanHelp, disciplines } from "@/lib/prac1Data";

export default function page() {
  return (
    <div className="text-blue-900">
      {/* hero section */}
      <section className="section  lg:mt-0 mt-[100px]">
        <div className=" flex flex-col lg:flex-row basis-1/2 justify-around ">
          <div className="max-w-[456px]  px-5  flex flex-col justify-center mx-auto  text-blue-900 ">
            <div className="mb-8 text-3xl md:text-4xl lg:text-5xl   ">
              KPNI / Clinical PNI: The next step in clinical practice
            </div>
            <p className="prose md:prose-lg">
              Clinical Psychoneuroimmunology (KPNI / Clinical PNI / cPNI) is an
              advanced and complete medicine that provides an integrative
              overview of patients’ health.
              <br />
              It examines interconnected body systems and their relationship
              with psychological, social and ecological aspects of the patient’s
              life.
            </p>
          </div>
          <Image
            className="mx-auto w-full sm:max-w-screen-sm p-5 lg:p-20  basis-1/2   "
            src={pic}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </section>
      <section className="section    bg-[#A0CDE5] flex items-center">
        <div className=" text-2xl  md:text-3xl lg:text-4xl text-center max-w-[950px] px-5 mx-auto prose">
          As the founders of KPNI, the Pruimboom Institute’s mission is to
          integrate this translational medical discipline into healthcare. Our
          final goal, to overcome disease and regain health.
        </div>
      </section>

      <section className="section-light flex flex-col">
        <div className="text-center md:text-xl flex mx-auto mb-[30px]">
          {howCanHelp.line1}
        </div>
        <div className="text-center mx-auto md:text-4xl text-3xl mb-8 ">
          {howCanHelp.line2}
        </div>
        <div className="flex flex-col lg:flex-row ">
          <Image
            className="mx-auto w-full sm:max-w-screen-sm p-5 lg:p-20  basis-1/2   "
            src={picKitchen}
            alt="logo"
            width={100}
            height={100}
          />
          <ul className="prose p-5 lex flex-col space-y-10">
            {howCanHelp.items.map((item) => (
              <li key={item.num} className="flex ">
               
                <div className="text-5xl w-[60px] ">{`${item.num}.`}</div>
                <div className="ml-5">{item.text}</div>
               
              </li>
            ))}
            <button className="btn-prac">LEARN MORE</button>
          </ul>
        </div>
      </section>

      <section className="section-light bg-[#F5F1EE]">
        <div className="">
          Disciplines:
           {disciplines.map(item => (
            <span key={item} className="">{item}</span>
           ))}
        </div>
      </section>
    </div>
  );
}
