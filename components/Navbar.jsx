import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import NavMobile from "./NavMobile";

const navigation = [
  {
    name: "Our Services",
    href: "/",
  },
  {
    name: "About Us",
    href: "/",
  },
  {
    name: "Contact Us",
    href: "/",
  },
  {
    name: "More",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 mx-auto px-5 container max-w-[1285px] flex items-center justify-between mt-10">
      <div className="flex items-center">
        <Link href="/" className="mr-10">
          <Image src="/Olve.svg" height={42} width={112} alt="logo Olve" />
        </Link>
        <ul className="hidden lg:flex items-center gap-4 text-darkBlue">
          {navigation.map((nav, indx) => (
            <li key={indx}>
              <Link
                href={nav.href}
                className="hover:text-blue transition-all duration-500 delay-100"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-x-4 hidden md:block">
        <Link
          href="/"
          className="text-darkBlue inline-flex items-center gap-2 group"
        >
          Sign Up
          <span className="border border-darkBlue p-3 rounded-full group-hover:rotate-45 transition-transform duration-500">
            <Image src="/arrow.svg" width={10} height={10} alt="arrow icon" />
          </span>
        </Link>

        <Button text="Call us" />
      </div>
      <NavMobile />
    </nav>
  );
}
