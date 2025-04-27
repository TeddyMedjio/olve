import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import Link from "next/link";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="mx-auto px-5 container max-w-[1285px] mb-20">
      <div className=" relative bg-gradient-to-r from-[#0103FF] to-[#01E4FF] rounded-4xl p-10">
        <Image
          src="/persons.png"
          width={490}
          height={308}
          alt="arrow icon"
          className="absolute -top-12 right-0 hidden lg:block"
        />
        <h3 className="text-white font-medium">
          Contact Us for Legal Assistance
        </h3>
        <p className="text-white mt-5">
          Experience lawyers to fight for your rights.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-5">
          <ButtonSecondary text="Our areas of Law" />
          <Link href="/" className="flex items-center gap-2 group text-white">
            New successes{" "}
            <span className="group-hover:rotate-45 transition-transform duration-500">
              <Image
                src="/arrow.svg"
                width={10}
                height={10}
                alt="arrow icon"
                className="invert"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
