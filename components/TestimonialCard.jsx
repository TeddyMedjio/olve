import Image from "next/image";
import React from "react";

export default function TestimonialCard({ description, image, name, tittle }) {
  return (
    <div className="bg-gradient-to-r from-[#E9F2FF] to-[#f8fafc] p-10 w-[498px] rounded-4xl space-y-10">
      <div className="bg-white py-1 px-4 w-fit rounded-full flex items-center ">
        <div className="flex items-center gap-1 mr-2">
          <Image src="/stars.svg" width={17} height={16} alt="avatar" />
          <Image src="/stars.svg" width={17} height={16} alt="avatar" />
          <Image src="/stars.svg" width={17} height={16} alt="avatar" />
          <Image src="/stars.svg" width={17} height={16} alt="avatar" />
          <Image src="/stars.svg" width={17} height={16} alt="avatar" />
        </div>
        <p className="">4.9</p>
      </div>
      <p className="text-darkBlue subtitle max-w-[390px]">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={image} width={55} height={55} alt="avatar" />
          <div>
            <p className="text-darkBlue">{name}</p>
            <p>{tittle}</p>
          </div>
        </div>
        <Image src="icon2.svg" width={26} height={20} alt="avatar" />
      </div>
    </div>
  );
}
