import Image from "next/image";
import React from "react";
import { FadeUp } from "./FadeUp";

export default function Scrool() {
  return (
    <section className="lg:-mt-6 overflow-hidden mb-20 w-full pl-5 lg:px-0">
      <div className="flex items-center lg:justify-center flex-nowrap gap-x-4 overflow-x-scroll lg:overflow-hidden w-full">
        <FadeUp delay={0.2} duration={2}>
          <div className="relative min-w-[390px] h-[541px] flex-1 overflow-hidden rounded-4xl">
            <Image
              src="/IMG3.png"
              alt="picture"
              fill={true}
              className="absolute object-cover"
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.3} duration={2}>
          <div className="relative min-w-[390px] h-[541px] flex-1 overflow-hidden flex flex-col justify-between">
            <div className=" h-3/5 relative bg-[#ECF3FF] rounded-4xl">
              <Image
                src="/IMG4.png"
                alt="picture"
                fill={true}
                className="absolute object-contain"
              />
            </div>
            <h3 className="bg-gradient-to-r from-[#0103FF] to-[#01E4FF] text-transparent bg-clip-text font-medium max-w-[390px]">
              Defending Your Rights, Crafting Your Victory.
            </h3>
          </div>
        </FadeUp>
        <FadeUp delay={0.4} duration={2}>
          <div className="relative min-w-[390px] h-[541px] flex-1 overflow-hidden rounded-4xl">
            <Image
              src="/IMG2.png"
              alt="picture"
              fill={true}
              className="absolute object-cover"
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.5} duration={2}>
          <div className="relative min-w-[390px] h-[541px] flex-1 overflow-hidden rounded-4xl">
            <Image
              src="/IMG.png"
              alt="picture"
              fill={true}
              className="absolute object-cover"
            />
          </div>
        </FadeUp>
      </div>
      <p className=" max-w-[639px] lg:ml-[22%] mt-10">
        At Olve, We excel in advocating for consumers and smaller entities in
        legal battles against corporate giants. Our focus areas encompass cases
        involving emission scandals, data breaches, online gambling
        establishments, and broader consumer rights issues.
      </p>
    </section>
  );
}
