import Link from "next/link";
import React from "react";

export default function Resources() {
  return (
    <div className="flex items-start gap-3">
      <p className="text-darkBlue">Resources</p>
      <ul className="space-y-2">
        <li>
          {" "}
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Community
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Social Media
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Newsletter
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:underline transition-all duration-500 text-[#8C8F9D]"
          >
            Subscribe
          </Link>
        </li>
      </ul>
    </div>
  );
}
