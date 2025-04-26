import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

export default function CarousselTwo() {
  return (
    <div className="mt-4 w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-full max-w-lg">
          {users.slice(0, 6).map((user, index) => (
            <CarouselItem key={index}>
              <TestimonialCard
                description={user.saying}
                image={user.picture}
                name={user.fullName}
                tittle={user.fonction}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
