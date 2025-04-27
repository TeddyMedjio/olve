import React from "react";
import { EmblaCarousel } from "./EmblaCarousel";

export default function Satisfied() {
  return (
    <div className="mb-20 max-w-[1440px] mx-auto overflow-hidden">
      <div className="px-5 md:px-0 flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-darkBlue mb-5 font-medium">Satisfied Clients</h2>
        <p className="max-w-[500px]">
          Discover the valuable feedback and testimonials from our satisfied
          clients about their experiences with us.
        </p>
      </div>
      {/* caroussel */}
      <div className="">
        <EmblaCarousel />
      </div>
    </div>
  );
}
