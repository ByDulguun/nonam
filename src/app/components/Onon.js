"use client";

import Image from "next/image";

export const Onon = () => {
  return (
    <div className=" h-fit py-12 bg-[#0a0a0a] w-full overflow-x-hidden">
      <div className="lg:px-24 px-4 py-4">
        <p className="text-white text-4xl lg:text-6xl">TEAM LEADER </p>
        <div className="flex">
          <p className="text-white text-4xl lg:text-6xl textFont">
            Work Experience
          </p>
        </div>
      </div>
      <div className="relative h-screen w-screen ">
        <Image
          src="https://res.cloudinary.com/dyg5xx89p/image/upload/v1757400404/ononegch_1_kanvw2.png"
          alt="Onon Visual"
          fill
          className="object-contain"
          quality={100}
        />
      </div>
    </div>
  );
};
