"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

const users = [
  {
    saying:
      '"Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended"',
    picture: "/Avatar.png",
    fullName: "Lynn Tanner",
    fonction: "CMO, JKL Company",
  },
  {
    saying:
      '"Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended"',
    picture: "/Avatar2.png",
    fullName: "Jonathan Hoggins",
    fonction: "CMO, JKL Company",
  },
  {
    saying:
      '"Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended"',
    picture: "/Avatar3.png",
    fullName: "DR. Bonnie Barstow",
    fonction: "CMO, JKL Company",
  },
  {
    saying:
      '"Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended"',
    picture: "/Avatar4.png",
    fullName: "Rick Wright",
    fonction: "CMO, JKL Company",
  },
  {
    saying:
      '"Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended"',
    picture: "/Avatar5.png",
    fullName: "Michael Knight",
    fonction: "CMO, JKL Company",
  },
  {
    saying:
      '"Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended"',
    picture: "/Avatar6.png",
    fullName: "Kate Tanner",
    fonction: "CMO, JKL Company",
  },
];
export function EmblaCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full relative"
    >
      {/* <span className="absolute bg-gradient-to-r from-white to-transparent h-full w-[50px] z-10" /> */}
      <span className="absolute right-0 bg-gradient-to-r from-transparent to-white h-full w-[50px] z-10" />
      <CarouselContent>
        {users.slice(0, 6).map((user, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 mr-5 lg:mr-10"
          >
            <div className="p-1">
              <TestimonialCard
                description={user.saying}
                image={user.picture}
                name={user.fullName}
                tittle={user.fonction}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
