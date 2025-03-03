"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import first from "../../../public/firsts.svg";
import second from "../../../public/seconds.svg";
import thirth from "../../../public/thirths.svg";
import fourth from "../../../public/fourths.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const Solutions = () => {
  const router = useRouter();
  return (
    <div className=" h-fit px-4 lg:px-24 ">
      <div className="mx-24 overflow-x-hidden ">
        <div className="scrolling-text text-white py-20  max-sm:hidden flex gap-20">
          <p className="text-[#b2b2b2]">sweden</p>
          <p className="text-[#b2b2b2]">umbrella</p>
          <p className="text-[#b2b2b2]">Delaware</p>
          <p className="text-[#b2b2b2]">Monaco</p>
          <p className="text-[#b2b2b2]">Springfeild</p>
        </div>
      </div>
      <div className="grid gap-6">
        <div>
          <p className="text-white text-4xl lg:text-6xl ">MARKETHING </p>
          <div className="flex">
            <p className="text-white text-4xl lg:text-6xl  textFont">
              Solutions
            </p>

            <p className="text-white text-4xl lg:text-6xl ">WE</p>
          </div>
          <p className="text-white text-4xl lg:text-6xl ">OFFER</p>
        </div>
        <div className="lg:flex lg:justify-end  ">
          <div className="flex items-end gap-1  border-[#b3b3b3] border-b-1 w-fit ">
            <div
              onClick={() => router.push("/services")}
              className="flex items-center gap-2 group relative overflow-hidden  w-[94px] h-[30px] cursor-pointer"
            >
              <IoIosArrowRoundForward
                color="white"
                className={`-rotate-45 absolute bottom-0 group-hover:-bottom-12 duration-700  left-0 group-hover:-left-12 text-xl`}
              />
              <IoIosArrowRoundForward
                color="white"
                className={`-rotate-45 absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0 `}
              />
              <p className="text-sm text-white font-medium leading-[1] group-hover:-bottom-12 bottom-1 left-6 duration-700 absolute z-40">
                WIEW
              </p>
              <p className="text-sm text-white font-medium leading-[1] group-hover:-top-12 top-3 right-0 duration-700 absolute z-40">
                ALL
              </p>

              <p className=" text-sm text-white font-medium leading-[1] absolute group-hover:bottom-1 -bottom-12 left-6  duration-700 z-40">
                WIEW
              </p>
              <p className=" text-sm text-white font-medium leading-[1] absolute group-hover:top-2.5 -top-12 right-0  duration-700 z-40">
                ALL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 grid gap-1 lg:flex relative ">
        <div className="bg-[#222] grid gap-16 p-10 lg:flex-1  ">
          <div className=" w-10 h-10 text-white">
            <Image src={first} alt="" width={34} height={34} />
          </div>
          <p className="text-white w-40 font-medium text-3xl">
            CONTENT MARKETHING
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#222] grid gap-16 p-10 lg:flex-1">
          <div className=" w-10 h-10 text-white">
            <Image src={second} alt="" width={34} height={34} />
          </div>
          <p className="text-white w-40 font-medium text-3xl">PAID ADVERSING</p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#222] grid gap-16 p-10 lg:flex-1">
          <div className=" w-10 h-10 text-white">
            <Image src={thirth} alt="" width={34} height={34} />
          </div>
          <p className="text-white w-40 font-medium text-3xl">BRAND STRATEGY</p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#222] grid gap-16 p-10 lg:flex-1">
          <div className=" w-10 h-10 text-white">
            <Image src={fourth} alt="" width={34} height={34} />
          </div>
          <p className="text-white w-40 font-medium text-3xl">
            EMAIL MARKETING
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};
