"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Brand = () => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageStyle = {
    transform: `rotateY(${scrollY * 0.1}deg)`,
    transition: "transform 0.1s ease-out",
  };

  return (
    <div className="h-fit overflow-hidden">
      <div className="grid gap-5 py-48  relative">
        <div className="text-center">
          <p className="text-white text-4xl lg:text-7xl">LET'S MAKE</p>
          <div className="flex justify-center gap-1">
            <p className="text-white text-4xl lg:text-7xl">YOUR</p>
            <p className="text-white text-4xl lg:text-7xl textFont">Brand</p>
          </div>
          <p className="text-white text-4xl lg:text-7xl">SHINE?</p>
        </div>
        <div
          onClick={() => router.push("/contact")}
          className="flex items-end gap-1  border-[#b3b3b3] border-b-1 w-fit m-auto "
        >
          <div className="flex items-center gap-2 group relative overflow-hidden  w-[124px] h-[30px] cursor-pointer">
            <IoIosArrowRoundForward
              color="white"
              className={`-rotate-45 text-xl absolute bottom-0 group-hover:-bottom-12 duration-700  left-0 group-hover:-left-12`}
            />
            <IoIosArrowRoundForward
              color="white"
              className={`-rotate-45 text-xl absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0 `}
            />
            <p className="text-sm text-white font-medium leading-[1] group-hover:-bottom-12 bottom-1 left-6 duration-700 absolute z-40">
              GET IN
            </p>
            <p className="text-sm text-white font-medium leading-[1] group-hover:-top-12 top-3 right-0 duration-700 absolute z-40">
              TOUCH
            </p>

            <p className=" text-sm text-white font-medium leading-[1] absolute group-hover:bottom-1 -bottom-12 left-6  duration-700 z-40">
              GET IN
            </p>
            <p className=" text-sm text-white font-medium leading-[1] absolute group-hover:top-3 -top-12 right-0  duration-700 z-40">
              TOUCH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
