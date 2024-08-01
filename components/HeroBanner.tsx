import Image from "next/image"

const HeroBanner = ({image, title}: {image: string, title: string}) => {
  return (
    <div className="relative mt-[100px] lg:mt-[140px]">
        <div className="bg-black">
    <Image 
      src={image}
      height={2800}
      width={1200}
      alt="services"
      className="  lg:h-[350px] w-full object-cover object-left opacity-70"
      /></div>
      <div className="h1 2xl:left-[15%] absolute top-[25%] 2xl:px-0 subcontainer text-white">{title}</div>
    </div>
  )
}

export default HeroBanner