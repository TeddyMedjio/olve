import Image from "next/image";
import React from "react";

const logos = [{}];

export default function Logos() {
  return (
    <div className="mb-10 md:mb-20">
      <p className="uppercase text-center md:mb-10 text-[#8C8F9D] font-medium">
        already won against big players
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="relative w-[200px] h-[50px]">
          <Image
            src="/amazon.svg"
            fill={true}
            alt="logos"
            className="absolute object-contain"
          />
        </div>
        <div className="relative w-[200px] h-[50px]">
          <Image
            src="/mckesson.svg"
            fill={true}
            alt="logos"
            className="absolute object-contain"
          />
        </div>
        <div className="relative w-[200px] h-[50px]">
          <Image
            src="/johnson.svg"
            fill={true}
            alt="logos"
            className="absolute object-contain"
          />
        </div>
        <div className="relative w-[50px] h-[50px]">
          <Image
            src="/dell.svg"
            fill={true}
            alt="logos"
            className="absolute object-contain"
          />
        </div>
        <div className="relative w-[200px] h-[50px]">
          <Image
            src="/merck.svg"
            fill={true}
            alt="logos"
            className="absolute object-contain"
          />
        </div>
      </div>
    </div>
  );
}
