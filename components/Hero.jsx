import Image from "next/image";
import React from "react";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import { FadeUp } from "./FadeUp";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden ">
      <Image
        src="/BGline.svg"
        alt="pattern background"
        height={600}
        width={600}
        className="absolute right-0 -z-50"
      />
      <div className=" mt-40 lg:mt-20 mb-20 lg:mb-0 mx-auto px-5 container max-w-[1285px] flex items-center justify-between">
        <div className="max-w-[550px] space-y-4">
          <FadeUp delay={0.2} duration={0.7}>
            <h1 className="text-darkBlue">
              Navigating{" "}
              <span className="bg-gradient-to-r from-[#0103FF] to-[#01E4FF] text-transparent bg-clip-text">
                legal waters
              </span>
              , securing your tomorrow
            </h1>
          </FadeUp>
          <FadeUp delay={0.3} duration={0.7}>
            <p>
              We advocate for consumers and underrepresented parties, amplifying
              their voices and safeguarding their rights.
            </p>
          </FadeUp>
          <FadeUp delay={0.4} duration={0.7}>
            <div className="mt-10 space-x-4">
              <Button text="Get Started" />
              <ButtonSecondary text="About Us" />
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} duration={0.7}>
          <Image
            src="/woman.png"
            alt="pattern background"
            height={725}
            width={484}
            className="hidden lg:block"
          />
        </FadeUp>
      </div>
    </section>
  );
}
