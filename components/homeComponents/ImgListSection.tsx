import FadeIn from "../framer/FadeIn";
import Image from "next/image";
import { howCanHelp } from "@/lib/data";
import { TbPointFilled } from "react-icons/tb";
import GreenButton from "../parts/GreenButton";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M25 14.333c0 .454-.37 1.108-1.514 1.707-1.097.575-2.681.96-4.486.96-1.805 0-3.389-.385-4.486-.96C13.37 15.441 13 14.787 13 14.333c0-.396.274-.942 1.136-1.489l-1.071-1.688c-1.138.72-2.065 1.801-2.065 3.177 0 1.571 1.197 2.751 2.586 3.479C15.023 18.564 16.94 19 19 19c2.061 0 3.977-.436 5.414-1.188 1.39-.728 2.586-1.908 2.586-3.479 0-1.376-.927-2.456-2.064-3.178l-1.072 1.69c.862.546 1.136 1.092 1.136 1.488Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 15.5c0 2.976 1.873 5.632 4.803 7.374-4.474 2.662-6.511 7.517-4.551 10.912 1.981 3.432 7.297 4.072 11.873 1.43 4.434-2.56 6.546-7.262 4.87-10.673C28.22 23.31 32 19.728 32 15.5 32 10.253 26.18 6 19 6S6 10.253 6 15.5Zm21.012 5.103C28.99 19.158 30 17.33 30 15.5c0-1.83-1.01-3.658-2.988-5.103C25.037 8.954 22.212 8 19 8c-3.21 0-6.037.954-8.012 2.397C9.01 11.842 8 13.67 8 15.5c0 1.83 1.011 3.658 2.988 5.103C12.963 22.046 15.789 23 19 23c3.211 0 6.037-.954 8.012-2.397Zm-10.446 4.23c.713.1 1.448.156 2.198.165.197.186.372.402.516.652.644 1.115.41 2.41-.167 3.47-.587 1.077-1.603 2.083-2.88 2.82-1.277.737-2.656 1.114-3.882 1.083-1.207-.03-2.445-.474-3.088-1.589-.563-.974-.453-2.094-.035-3.056l1.835.797c-.26.596-.212 1.01-.068 1.259.163.283.584.57 1.406.59.801.02 1.82-.232 2.832-.816 1.011-.584 1.74-1.34 2.123-2.045.393-.722.356-1.23.192-1.513-.144-.25-.478-.497-1.124-.57l.142-1.246Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M35.836 24.764c2.395.642 4.726-.294 5.208-2.09.48-1.796-1.07-3.773-3.466-4.414-2.395-.642-4.726.294-5.208 2.09-.48 1.796 1.07 3.773 3.466 4.414Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M42.245 36.457c-1.071 3.998-6.261 6.081-11.592 4.653-5.331-1.428-8.784-5.828-7.713-9.826 1.071-3.998 6.261-6.081 11.592-4.653 5.331 1.429 8.785 5.828 7.713 9.826Zm-6.938-1.082c.832-.245 1.196-.655 1.29-1.006.082-.309.01-.753-.417-1.291l1.565-1.245c.677.85 1.083 1.937.784 3.054-.343 1.278-1.455 2.053-2.656 2.407-1.22.36-2.705.353-4.186-.044-1.48-.397-2.77-1.133-3.647-2.055-.863-.907-1.438-2.134-1.096-3.412.3-1.117 1.194-1.855 2.206-2.253l.733 1.86c-.64.252-.924.601-1.007.91-.094.35.015.888.613 1.517.584.613 1.531 1.184 2.716 1.501 1.184.318 2.29.297 3.102.057Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ImgListSection() {
  return (
    <section className="section-light flex flex-col ">
      <div className="subcontainerXl flex flex-col  w-full">
        <div className="text-center mx-auto h2 mb-8 ">{howCanHelp.title}</div>
        <div className=" w-full flex flex-col-reverse items-center lg:flex-row lg:gap-x-10 gap-y-10  mx-auto ">
          <Image
            className="   h-[600px] object-cover object-top basis-1/2   "
            src="/assets/hero-pic.jpg"
            alt="logo"
            width={510}
            height={809}
          />
          <div className="basis-1/2 px-5">
            <ul className="h4  text-white flex flex-col justify-around gap-y-5  ">
              {howCanHelp.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-row items-center gap-x-5 bg-primary py-5 px-3 rounded-xl "
                >
                  {/* https://codepen.io/sosuke/pen/Pjoqqp */}
                  <div    >
                  <Image
                   
                    src={item.svg}
                    alt={item.label}
                    height={36}
                    width={36}
                    className="text-white "
                  /></div>

                  <div>{item.label}</div>
                </div>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <GreenButton text={howCanHelp.linkText} href={howCanHelp.link} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
