import React from "react"
import Image from "next/image"

const TestHeader = () => {
  return (
   <section className="pt-[200px] relative">
    <div className="relative">
        <div className="ml-8 relative bg-slate-400">
            <div className="relative  top-0 left-[5vw] w-[100%] h-[100%] overflow-hidden ">
             <Image
              src="/assets/who-hero-01.jpg"
              alt="igm"
              width={1223}
              height={601}
              className="w-[1223px] h-[601px]" 
             />
             <div>jijoijio</div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default TestHeader