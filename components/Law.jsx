import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardTrois from "./CardTrois";

export default function Law() {
  return (
    <section className="mb-30 mx-auto p-5 md:p-10 container max-w-[1285px] bg-[#f3f3f3] md:rounded-4xl">
      <div className="flex flex-col lg:flex-row  gap-5">
        {/* card1 */}
        <div className="flex-2 bg-white p-10 rounded-2xl w-full">
          <div className="relative h-[250px] w-full mb-5">
            <Image
              src="/FP.svg"
              fill={true}
              alt="icon"
              className="absolute object-contain object-bottom-right"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="space-y-2 max-w-[400px]">
              <p className="titleCard text-darkBlue capitalize">
                estate planning and probate
              </p>
              <p className="mb-5">
                Our focus areas encompass cases involving emission scandals,
                data breaches, online gambling establishments.
              </p>
            </div>
            <Link
              href="/"
              className="text-nowrap p-3 hover:bg-blue hover:text-white transition duration-400 text-darkBlue border-darkBlue border rounded-full w-fit"
            >
              Check affectedness now
            </Link>
          </div>
        </div>
        {/* card2 */}
        <div className="flex-1 bg-white p-10 rounded-2xl flex flex-col justify-center w-full">
          <div className="relative h-[250px] max-w-[400px] mb-5">
            <Image
              src="/FP2.svg"
              fill={true}
              alt="icon"
              className="absolute object-contain"
            />
          </div>
          <div className="space-y-2 mb-5 lg:mb-10">
            <p className="titleCard text-darkBlue capitalize">
              immigration law
            </p>
            <p>We excel in advocating for consumers and smaller entities.</p>
          </div>
          <Link
            href="/"
            className="text-nowrap p-3 hover:bg-blue hover:text-white transition duration-400 text-darkBlue border-darkBlue border rounded-full w-fit"
          >
            Check affectedness now
          </Link>
        </div>
      </div>
      {/* card3 */}
      <CardTrois />
    </section>
  );
}
