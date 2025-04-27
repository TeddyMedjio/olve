import React from "react";

export default function Subscribe() {
  return (
    <div className="space-y-2 mt-10 md:mt-0">
      <p className="text-darkBlue font-medium">Subscribe</p>
      <p className="text-black ">Join our community to receive updates</p>
      <form className="mt-4" method="get">
        <input
          type="email"
          id="email"
          pattern=".+@example\.com"
          name="Enter your email"
          placeholder="Enter your email"
          className="bg-[#E2EDF9] pl-4 py-2 rounded-full placeholder:text-sm placeholder:text-[#7E9EC0] mr-2 w-full md:w-fit text-center md:text-start"
          required
        />
        <input
          type="submit"
          value="Subscribe"
          className="py-[10px] px-6 hover:bg-darkBlue font-medium bg-blue text-[#ECF3FF] rounded-full transition duration-300 w-full md:w-fit mt-3 md:mt-0 cursor-pointer"
        />
      </form>
      <span className="text-xs text-[#8C8F9D]">
        By subscribing you agree to our Privacy Policy
      </span>
    </div>
  );
}
