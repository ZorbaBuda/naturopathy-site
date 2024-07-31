
import React from 'react'
import Image from 'next/image'

export default function page() {
 
  return (
    <section className='w-full min-h-screen pt-[160px] text-xl  flex flex-col '>
     

   
     <div className='border-2 border-black  lg:h-screen  '>
      <Image 
        src="/assets/homeHero.jpg"
        width={1837}
        height={1001}
        alt="img"
        className='lg:h-full lg:w-full h-[50%] object-cover  border-2 border-red-500'
         />
      </div>

   {/* <div className='subcontainerXl flex flex-col gap-y-5'>

     <p> OBJECT-SCALE-DOWN</p>
     <div className='border-2 border-black w-[900px] h-[350px] '>
      <Image 
        src="/assets/home1.jpg"
        width={5000}
        height={4500}
        alt="img"
        className=' h-full w-full object-scale-down border-2 border-red-500'
         />
      </div>



     <p> OBJECT-FILL se adapta al contenedor</p>
     <div className='border-2 border-black w-[900px] h-[350px] '>
      <Image 
        src="/assets/home1.jpg"
        width={5000}
        height={4500}
        alt="img"
        className=' h-full w-full object-fill border-2 border-red-500'
         />
      </div>


     <p>imagen con h-full y w-full, y OBJECT-CONTAIN se adapta a la altura del contenedor, manteniendo aspect ratio</p>
     <div className='border-2 border-black w-[900px] h-[350px] '>
      <Image 
        src="/assets/home1.jpg"
        width={5000}
        height={4500}
        alt="img"
        className=' h-full w-full object-contain border-2 border-red-500'
         />
      </div>


     <p>imagen con h-full y w-full, y OBJECT-COVER se adapta al contenedor manteniendo el aspect ratio</p>
     <div className='border-2 border-black w-[900px] h-[350px] '>
      <Image 
        src="/assets/home1.jpg"
        width={5000}
        height={4500}
        alt="img"
        className=' h-full w-full object-cover border-2 border-red-500'
         />
      </div>

     <p>imagen con h-full y w-full, se adapta al contenedor</p>
     <div className='border-2 border-black w-[900px] h-[350px] '>
      <Image 
        src="/assets/home1.jpg"
        width={5000}
        height={4500}
        alt="img"
        className=' h-full w-full border-2 border-red-500'
         />
      </div>
      <p>Utilizamos imagen de 2288 x 2035</p>
      <Image 
        src="/assets/home1.jpg"
        width={2288}
        height={2035}
        alt="img"
        className=''
         />
         <p>misma imagen pero dando menos dimensiones al componente, 500 x 450</p>
      <Image 
        src="/assets/home1.jpg"
        width={500}
        height={450}
        alt="img"
        className=''
         />
         </div> */}
    </section>
  )
}
