import Image from "next/image";
import React from "react";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";

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
      <div className=" mt-40 md:mt-20 mb-20 lg:mb-0 mx-auto px-5 container max-w-[1285px] flex items-center justify-between">
        <div className="max-w-[550px] space-y-4">
          <h1 className="text-darkBlue">
            Navigating{" "}
            <span className="bg-gradient-to-r from-[#0103FF] to-[#01E4FF] text-transparent bg-clip-text">
              legal waters
            </span>
            , securing your tomorrow
          </h1>
          <p>
            We advocate for consumers and underrepresented parties, amplifying
            their voices and safeguarding their rights.
          </p>
          <div className="mt-10 space-x-4">
            <Button text="Get Started" />
            <ButtonSecondary text="About Us" />
          </div>
        </div>
        <Image
          src="/woman.png"
          alt="pattern background"
          height={725}
          width={484}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}
