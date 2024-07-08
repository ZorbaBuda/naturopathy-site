import React from "react";
import Image from "next/image"
import pic from "@/public/img/gallery/8.png"
export default function page() {
  return (
    <div>
      <section className="section mt-[100px]">
        <div className=" flex flex-col lg:flex-row basis-1/2 justify-around ">
          <div className="max-w-[456px]  px-5  flex flex-col justify-center mx-auto  text-blue-900 ">
            <div className="mb-8 text-3xl md:text-4xl lg:text-5xl   ">KPNI / Clinical PNI: The next step in clinical practice</div>
            <p className="prose md:prose-lg">Clinical Psychoneuroimmunology (KPNI / Clinical PNI / cPNI) is an advanced and
               complete medicine that provides an integrative overview of patients’ health.
                <br />
               
               It examines interconnected body systems and their relationship with psychological,
                social and ecological aspects of the patient’s life.</p>
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
      <section className="section  min-h-[470px] bg-[#A0CDE5] flex items-center">
        
        <div className=" text-2xl text-center max-w-[950px] mx-auto">
          As the founders of KPNI, the Pruimboom Institute’s mission is to
          integrate this translational medical discipline into healthcare. Our
          final goal, to overcome disease and regain health.
        </div>
      </section>

      {/* https://unclebigbay.com/tailwind-flex-box-basics-a-comprehensive-guide */}
      <section className=" w-full my-10">
        <div className="mx-auto max-w-min flex gap-4 ">
          <div className="h-20 w-20 bg-orange-400 text-center text-slate-200">
            1
          </div>
          <div className="h-20 w-20 bg-orange-400 text-center text-slate-200">
            2
          </div>
          <div className="h-20 w-20 bg-orange-400 text-center text-slate-200">
            3
          </div>
          <div className="h-20 w-20 bg-orange-400 text-center text-slate-200">
            4
          </div>
        </div>
      </section>

      <section className=" w-full my-10">
        <div className="mx-auto w-full flex gap-4 ">
          <div className="h-20 w-20 bg-orange-400 text-center text-slate-200">
            1
          </div>
          <div className="h-20 grow bg-orange-400 text-center text-slate-200">
            2
          </div>
          <div className="h-20 w-20 bg-orange-400 text-center text-slate-200">
            3
          </div>
        </div>
      </section>

      <section className=" w-full my-10">
        <div className="mx-auto w-full flex gap-4 ">
          <div className="basis-1/12 bg-orange-400 text-center text-slate-200">
            1
          </div>
          <div className="basis-1/12 grow bg-orange-400 text-center text-slate-200">
            2
          </div>
          <div className="basis-10/12 bg-orange-400 text-center text-slate-200">
            3
          </div>
        </div>
      </section>

      <section className=" w-full my-10">
        <div className=" w-full flex gap-4 bg-black ">
          <div className="shrink h-14 w-48  bg-orange-400 text-center text-slate-200">
            1
          </div>
          <div className="h-14 w-32  bg-orange-400 text-center text-slate-200">
            2
          </div>
          <div className="h-14 w-32 bg-orange-400 text-center text-slate-200">
            3
          </div>
        </div>
      </section>
    </div>
  );
}
