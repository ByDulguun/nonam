"use client";
import Image from "next/image";
import React from "react";
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
            <Image
              src={"/logoWhite.png"}
              alt="sun"
              width={140}
              height={20}
              className="object-cover "
            />
          </div>
          <p className="text-[#b2b2b2]">Create. Not just ads. Impact.</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-12">
          <div className="grid gap-4">
            <p className="text-[#b2b2b2]">PAGES:</p>
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "SERVICES", path: "/services" },
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
          <div className="grid gap-4 h-fit">
            <p className="text-[#b2b2b2]">SOCIAL:</p>
            {[
              { name: "FACEBOOK", url: "https://www.facebook.com/yourpage" },
              { name: "INSTAGRAM", url: "https://www.instagram.com/yourpage" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[12px] cursor-pointer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <p className="text-[#b2b2b2] py-6 text-center">{date} Copyright</p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="flex justify-around py-12">
          <div className="grid gap-3 h-fit">
            <div className="flex items-center gap-2">
              <Image
                src={"/logoWhite.png"}
                alt="sun"
                width={140}
                height={20}
                className="object-cover "
              />
            </div>
            <p className="text-[#b2b2b2]">Create. Not just ads. Impact.</p>
          </div>
          <div className="flex gap-32">
            <div className="grid gap-4">
              <p className="text-[#b2b2b2]">PAGES:</p>
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT US", path: "/about" },
                { name: "SERVICES", path: "/services" },
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
            <div className="grid gap-4 h-fit">
              <p className="text-[#b2b2b2]">SOCIAL:</p>
              {[
                {
                  name: "FACEBOOK",
                  url: "https://www.facebook.com/greativityagency",
                },
                {
                  name: "INSTAGRAM",
                  url: "https://www.instagram.com/eatit_agency",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[12px] cursor-pointer hover:underline"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="p-12 flex justify-center">
          {/* <div className="grid gap-4">
            <p className="text-[#b2b2b2]">
              POWERED BY <span className="text-white">WEBFLOW</span>
            </p>
            <p className="text-[#b2b2b2]">
              Markething© – created by{" "}
              <span className="text-white">flowaze</span>
            </p>
          </div> */}
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
          {/* <div className="flex gap-5 items-center">
            {["STYLE GUIDE", "LICENSES", "CHANGELOG"].map((item, index) => (
              <p
                key={index}
                className="text-[#b2b2b2] text-[12px] cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};
