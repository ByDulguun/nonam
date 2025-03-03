"use client";
import Image from "next/image";
import React from "react";
import sun from "../../../public/sun.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const date = new Date().getFullYear();
  const router = useRouter();
  return (
    <>
      {/* Mobile & Tablet View */}
      <div className="h-fit p-4 lg:hidden md:block sm:block">
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <p className="text-white font-medium text-4xl">MARKETHING</p>
            <div className="w-8 h-8 text-white flex justify-center">
              <Image
                src={sun}
                alt="sun"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-[#b2b2b2]">Make It Impossible To Ignore</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-12">
          <div className="grid gap-4">
            <p className="text-[#b2b2b2]">PAGES:</p>
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "SERVICES", path: "/services" },
              { name: "CASE STUDIES", path: "/cases" },
              { name: "CONTACT", path: "/contact" },
            ].map((item, index) => (
              <p
                key={index}
                className="text-white text-[12px] cursor-pointer"
                onClick={() => router.push(item.path)}
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="grid gap-4">
            <p className="text-[#b2b2b2]">SOCIAL:</p>
            {["TWITTER", "BEHANCE", "DRIBBLE", "LINKEDIN", "INSTAGRAM"].map(
              (social, index) => (
                <p
                  key={index}
                  className="text-white text-[12px] cursor-pointer"
                >
                  {social}
                </p>
              )
            )}
          </div>
        </div>
        <p className="text-[#b2b2b2] py-6 text-center">{date} Copyright</p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="flex justify-around py-12">
          <div className="grid gap-3 h-fit">
            <div className="flex items-center gap-2">
              <p className="text-white font-medium text-4xl">MARKETHING</p>
              <Image
                src={sun}
                alt="sun"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <p className="text-[#b2b2b2]">Make It Impossible To Ignore</p>
          </div>
          <div className="flex gap-32">
            <div className="grid gap-4">
              <p className="text-[#b2b2b2]">PAGES:</p>
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "SERVICES", path: "/services" },
                { name: "CASE STUDIES", path: "/cases" },
                { name: "CONTACT", path: "/contact" },
              ].map((item, index) => (
                <p
                  key={index}
                  className="text-white text-[12px] cursor-pointer"
                  onClick={() => router.push(item.path)}
                >
                  {item.name}
                </p>
              ))}
            </div>
            <div className="grid gap-4">
              <p className="text-[#b2b2b2]">SOCIAL:</p>
              {["TWITTER", "BEHANCE", "DRIBBLE", "LINKEDIN", "INSTAGRAM"].map(
                (social, index) => (
                  <p
                    key={index}
                    className="text-white text-[12px] cursor-pointer"
                  >
                    {social}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
        <div className="p-12 flex justify-between">
          <div className="grid gap-4">
            <p className="text-[#b2b2b2]">
              POWERED BY <span className="text-white">WEBFLOW</span>
            </p>
            <p className="text-[#b2b2b2]">
              Markething© – created by{" "}
              <span className="text-white">flowaze</span>
            </p>
          </div>
          <div
            className="border border-[#b2b2b2] w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <IoIosArrowRoundForward
              color="white"
              className="-rotate-90"
              size={26}
            />
          </div>
          <div className="flex gap-5 items-center">
            {["STYLE GUIDE", "LICENSES", "CHANGELOG"].map((item, index) => (
              <p
                key={index}
                className="text-[#b2b2b2] text-[12px] cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
