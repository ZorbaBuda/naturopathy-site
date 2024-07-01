import React from "react";

export default function page() {
  return (
    <div className="mt-[150px] ">
      <section className=" mx-auto min-h-[470px] bg-[#A0CDE5] flex items-center">
        <div className="font-manrope_regular text-2xl text-center max-w-[950px] mx-auto">
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
