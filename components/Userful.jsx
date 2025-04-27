import Link from "next/link";
import React from "react";

export default function Userful() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-3">
      <p className="text-darkBlue">Userful Links</p>
      <ul className="space-y-2">
        <li>
          {" "}
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Terms of Service
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}
