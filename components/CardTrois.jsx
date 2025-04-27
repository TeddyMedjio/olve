import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function CardTrois() {
  return (
    <div className="mt-20 lg:mt-10 rounded-4xl flex flex-col items-center md:flex-row md:justify-between">
      {/* paragraph left */}
      <div className="space-y-5 flex-1">
        <div className="flex items-center gap-2">
          <Image
            src="/trophet.svg"
            width={16.67}
            height={16.67}
            alt="icon trophet"
          />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0103FF] to-[#01E4FF]">
            Vitories
          </p>
        </div>
        <div className="max-w-[500px]">
          <h2 className="text-darkBlue mb-5 font-medium">
            Olve victorious Legal cases
          </h2>
          <p>
            Discover the impressive case studies of our successful legal
            battles, where we have fought for constumers and smaller parties
            against large organizations.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button text="Our areas of Law" />
          <Link
            href="/"
            className="flex items-center gap-2 group text-darkBlue"
          >
            New successes{" "}
            <span className="group-hover:rotate-45 transition-transform duration-500">
              <Image src="/arrow.svg" width={10} height={10} alt="arrow icon" />
            </span>
          </Link>
        </div>
      </div>

      {/* images */}
      <div className="flex-1 relative hidden lg:block">
        {/* badge */}
        <div className="absolute bg-white z-10 w-[200px] rounded-3xl p-5 -left-20 top-10 ">
          <Image
            src="/User2.png"
            width={167}
            height={119}
            alt="image"
            className="absolute mb-5 -top-4 -right-5 "
          />
          <p className=" mt-24 light text-transparent bg-clip-text bg-gradient-to-r from-[#0103FF] to-[#01E4FF] font-medium">
            We fight for consumers
          </p>
        </div>
        {/* price */}
        <div className="flex items-center bg-white p-5 z-10 absolute bottom-40 right-3 rounded-full gap-4">
          <div className="relative bg-gradient-to-b from-[#0103FF] to-[#01E4FF] p-5 rounded-full">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#5B99FA] z-10"></span>
            <Image
              src="/Vector.svg"
              width={20}
              height={20}
              alt="image"
              className=""
            />
          </div>
          <div>
            <h3 className=" text-darkBlue font-normal">+ 6.202.203,00 €</h3>
            <span className="text-base text-blue font-light ml-10">
              in compensation claimed for our clients.
            </span>
          </div>
        </div>
        <div className="relative h-[752px] w-auto overflow-hidden rounded-4xl">
          <Image
            src="/Woman2.png"
            fill={true}
            alt="arrow icon"
            className="absolute object-cover"
          />
        </div>
      </div>
    </div>
  );
}
