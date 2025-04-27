import Link from "next/link";
import React from "react";

export default function Career() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-3">
      <p className="text-darkBlue font-medium">Careers</p>
      <ul className="space-y-2">
        <li>
          {" "}
          <Link
            href="/"
            className="font-medium hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-medium hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Press
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-medium hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Partships
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-medium hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-medium hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Help Center
          </Link>
        </li>
      </ul>
    </div>
  );
}
