import Image from "next/image"
import Link from "next/link"

const LogoCustom = () => {
  return (
    <Link href="/" className=" ">
    <div className="flex items-center gap-x-3">
      <Image
        className="h-16 w-16 lg:h-20 lg:w-20  "
        src="/assets/newLogo.png"
        alt="logo"
        width={250}
        height={250}
      />
      <div
        className= "text-black font-medium flex flex-col gap-0 lg:text-3xl text-2xl "
      >
        <div className="text-[#40961D] font-logo leading-5  ">
          Christian Constanseu
        </div>

        <div className="lg:text-sm text-sm font-semibold text-green2 font-jakarta  ">NATUROPATIA</div>
      </div>
    </div>
  </Link>
  )
}

export default LogoCustom