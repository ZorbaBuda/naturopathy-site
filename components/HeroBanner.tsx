import Image, { StaticImageData } from "next/image"

const HeroBanner = ({image, title}: {image: StaticImageData, title: string}) => {
  return (
    // <div className="mt-[80px] lg:mt-[145px] ">
    <div className="mt-[80px] lg:mt-[145px] ">

        
    <Image 
      src={image}
      alt={title}
      className="  lg:h-[500px] h-[297px] w-full object-cover object-right "
      />
      <div className="h1  subcontainer text-dark1">{title}</div>
    </div>
  )
}

export default HeroBanner