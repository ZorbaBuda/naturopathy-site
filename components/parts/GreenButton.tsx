import Link from "next/link";
import { NavigationLink } from "../NavigationLink";

export default function GreenButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
   
    <NavigationLink
    href={href}
    className="text-dark1  border bg-orange1 border-green2  hover:bg-orange2 rounded-xl
      px-5 py-2  transition-all  duration-300 text-lg font-semibold
     
          max-w-fit no-underline
      "
  >
  {text}
  </NavigationLink>
  
  );
}
