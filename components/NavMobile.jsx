"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

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

export default function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon width={30} height={30} color="#0a0b5c" />
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader className="mt-7">
          <SheetTitle>
            <Link href="/" className="mr-10">
              <Image src="/Olve.svg" height={42} width={112} alt="logo Olve" />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ul className="ml-5 space-y-3 text-darkBlue">
          {navigation.map((nav, indx) => (
            <li key={indx}>
              <Link
                href={nav.href}
                className="hover:text-blue transition-all duration-500 delay-100 text-3xl"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-x-4 inline-block px-5 mt-8 ">
          <Link
            href="/"
            className="text-darkBlue inline-flex items-center gap-2 text-lg "
          >
            Sign Up
            <span className=" rotate-45">
              <Image src="/arrow.svg" width={10} height={10} alt="arrow icon" />
            </span>
          </Link>

          <Button text="Call us" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
