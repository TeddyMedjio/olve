import React from "react";
import Caroussel from "./Caroussel";
import CarousselTwo from "./CarousselTwo";

export default function Satisfied() {
  return (
    <div className="mb-30 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-darkBlue mb-5">Satisfied Clients</h2>
        <p className="max-w-[500px]">
          Discover the valuable feedback and testimonials from our satisfied
          clients about their experiences with us.
        </p>
      </div>
      {/* caroussel */}
      <Caroussel />
      <CarousselTwo />
    </div>
  );
}
