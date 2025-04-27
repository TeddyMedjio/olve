import React from "react";
import Link from "next/link";

export default function Subscribe() {
  return (
    <div className="space-y-2 mt-10 md:mt-0">
      <p className="text-darkBlue">Subscribe</p>
      <p className="text-black font-light">
        Join our community to receive updates
      </p>
      <form className="mt-4">
        <input
          type="email"
          name="Enter your email"
          placeholder="Enter your email"
          className="bg-[#E2EDF9] pl-4 py-2 rounded-full placeholder:font-light placeholder:text-sm placeholder:text-[#7E9EC0] mr-2 w-full md:w-fit text-center md:text-start"
        />

        <button className="py-[10px] px-6 hover:bg-darkBlue font-medium bg-blue text-[#ECF3FF] rounded-full transition duration-300 w-full md:w-fit mt-3 md:mt-0">
          <Link href="/">Subscribe</Link>
        </button>
      </form>
      <span className="text-xs font-light">
        By subscribing you agree to our Privacy Policy
      </span>
    </div>
  );
}
