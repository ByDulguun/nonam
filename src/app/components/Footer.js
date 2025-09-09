"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Mobile & Tablet View */}
      <div className="h-fit p-4 lg:hidden">
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
                className="text-white text-[12px] cursor-pointer hover:text-gray-300 transition-colors"
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
              <p
                key={index}
                className="text-white text-[12px] cursor-pointer hover:text-gray-300 transition-colors"
                onClick={() => handleSocialClick(social.url)}
              >
                {social.name}
              </p>
            ))}
          </div>
        </div>
        <div className="p-12 flex justify-center text-white text-center">
          &copy; {new Date().getFullYear()} Greativity. All rights reserved.
        </div>
      </div>

      <div className="hidden lg:block ">
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
                  className="text-white text-[12px] cursor-pointer hover:text-gray-300 transition-colors"
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
                  className="text-white text-[12px] cursor-pointer hover:underline hover:text-gray-300 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="p-12 flex justify-center text-white text-center">
          &copy; {new Date().getFullYear()} Greativity. All rights reserved.
        </div>
      </div>
    </>
  );
};
