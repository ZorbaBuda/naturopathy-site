

export default function BannerSection({text} : {text : string} ) {
  return (
    <section className="section-light bg-verde_claro  ">
   
    <div className=" h3c text-center max-w-[950px] px-5 mx-auto font-alata ">
     {text}
    </div>  
  </section>
  )
}
