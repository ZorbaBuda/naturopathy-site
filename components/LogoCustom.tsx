import Image from "next/image"
import Link from "next/link"

const LogoCustom = () => {
  return (
    <Link href="/" className=" ">
    <div className="flex items-center gap-x-3">
      <Image
        className="h-12 w-12 lg:h-16 lg:w-16  "
        src="/assets/icons/logopng.png"
        alt="logo"
        width={200}
        height={200}
      />
      <div
        className= " font-medium flex flex-col gap-0 lg:text-3xl text-2xl "
      >
        <div className="text-green2 font-logo leading-5  ">
          Christian Constanseu
        </div>

        <div className="lg:text-sm text-sm font-semibold text-orange2  font-jakarta  ">NATUROPATA</div>
      </div>
    </div>
  </Link>
  )
}

export default LogoCustom