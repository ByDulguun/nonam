"use client";

import Image from "next/image";

export const Onon = () => {
  return (
    <div className="h-fit py-12 bg-[#222] w-full overflow-x-hidden">
      {/* Title */}
      <div className="lg:px-24 px-4 py-4">
        <p className="text-white text-4xl lg:text-6xl">TEAM LEADER</p>
        <div className="flex">
          <p className="text-white text-4xl lg:text-6xl textFont">
            Work Experience
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:pl-24 pl-0 flex">
        <div className="relative lg:h-screen lg:w-[80%] w-full h-[200px]">
          <Image
            src="https://res.cloudinary.com/dyg5xx89p/image/upload/v1757410277/ononegch_1_1_wdnkhy.png"
            alt="Onon Visual"
            fill
            className="object-contain"
            quality={85} // ✅ compress a bit, still sharp
            priority // ✅ load immediately (important hero image)
            loading="eager" // ✅ ensures it shows as soon as possible
          />
        </div>
      </div>
    </div>
  );
};
