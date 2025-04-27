import Link from "next/link";
import React from "react";
import Userful from "./Userful";
import Career from "./Career";
import Resources from "./Resources";
import Subscribe from "./Subscribe";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto px-5 container max-w-[1285px] mb-10">
      <div className="border-b border-[#8c8f9d61] flex flex-wrap items-start justify-between pb-20">
        {/* userful Links */}
        <Userful />
        {/* Career*/}
        <Career />
        {/* Resources */}
        <Resources />
        {/* Subscribe */}
        <Subscribe />
      </div>
      <div className=" py-8 border-b border-[#8c8f9d61] flex items-center justify-between mb-10">
        <Link href="/" className="mr-10">
          <Image src="/Olve.svg" height={42} width={112} alt="logo Olve" />
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">
              <Image src="/facebook.svg" height={22} width={22} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/instagram.svg" height={20} width={20} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/linkedin.svg" height={20} width={20} alt="logo" />
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/">
              <Image src="/youtube.svg" height={20} width={25} alt="logo" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-4 text-sm text-[#8C8F9D]">
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Terms of Service</Link>
          </li>
          <li>
            <Link href="/">Cookie Policy</Link>
          </li>
        </ul>
        <span className="text-sm font-light">
          © 2025 Design by James Alonso & Develop by{" "}
          <span className="text-blue font-medium">
            <Link href="https://www.medjio.me">medjio.me</Link>
          </span>
        </span>
      </div>
    </footer>
  );
}
