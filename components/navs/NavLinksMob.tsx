import Link from "next/link";
import { links } from "@/lib/data";
import { usePathname } from "next/navigation";

const NavLinksMob = () => {
  const pathname = usePathname();
  // console.log(pathname)

  {
    /* <a href="#" className="group text-sky-600 transition duration-300">
              Link
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </a> */
  }

  return (
    <nav>
      <ul className="flex flex-col text-dark1  border-t border-gray-400   ">
        {links.map((item, index) => {
          return (
            <li key={index} className="flex ">
              <Link
                className={`  text-sm  uppercase   font-semibold tracking-wider 
                      border-b border-b-gray-400   w-full  py-4
                    `}
                href={item.hash}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavLinksMob;
