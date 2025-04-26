import React from "react";
import Button from "./Button";

export default function Subscribe() {
  return (
    <div className="space-y-2">
      <p className="text-darkBlue">Userful Links</p>
      <p className="text-black font-light">
        Join our community to receive updates
      </p>
      <form className="mt-4">
        <input
          type="email"
          name="Enter your email"
          placeholder="Enter your email"
          className="bg-[#E2EDF9] pl-4 py-2 rounded-full placeholder:font-light placeholder:text-sm placeholder:text-[#7E9EC0] mr-2"
        />
        <Button text="Subscribe" />
      </form>
      <span className="text-xs font-light">
        By subscribing you agree to our Privacy Policy
      </span>
    </div>
  );
}
