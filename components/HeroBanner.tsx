import Image from "next/image"

const HeroBanner = ({image, title}: {image: string, title: string}) => {
  return (
    <div className="mt-[125px] lg:mt-[145px]">
        
    <Image 
      src={image}
      height={1400}
      width={600}
      alt={title}
      className="  lg:h-[500px] h-[297px] w-full object-cover object-right"
      />
      <div className="h1  subcontainer text-dark1">{title}</div>
    </div>
  )
}

export default HeroBanner