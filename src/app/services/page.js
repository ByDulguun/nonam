"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  { id: 1, image: "/image1.webp", title: "EMAIL MARKETING" },
  { id: 2, image: "/image2.webp", title: "CONTENT MARKETING" },
  { id: 3, image: "/image3.webp", title: "PAID ADVERTISING" },
  { id: 4, image: "/image4.webp", title: "BRAND STRATEGY" },
];

const Page = () => {
  const [openId, setOpenId] = useState();

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <div className="py-24 grid gap-4">
        <div className="grid gap-1 justify-center ">
          <div className="flex gap-2">
            <p className="text-white text-5xl lg:text-8xl">SERVICES</p>
            <p className="text-white text-5xl lg:text-8xl textFont">We</p>
          </div>
          <p className="text-white text-5xl lg:text-8xl m-auto">OFFER</p>
        </div>
        <p className="m-auto text-center w-[300px] text-[#b2b2b2] lg:w-[600px]">
          Ready to elevate your brand? Contact us today to discuss your
          marketing needs. Our team is here to answer your questions and provide
          you with the solutions you need to succeed.
        </p>
      </div>

      <div className="py-24 lg:px-60 relative ">
        {services.map((service) => (
          <div
            onClick={() => toggle(service.id)}
            key={service.id}
            className={` relative grid group border-gray-100 border-b-1 py-20 mx-6 overflow-hidden  cursor-pointer ${
              openId === service.id ? "h-[260px]" : "h-[100px]"
            } duration-700`}
          >
            <div className="flex justify-between px-0 items-center">
              <p className="text-[#b2b2b2] font-semibold">0{service.id}</p>
              <p className="text-white text-xl">{service.title}</p>
              <IoIosArrowRoundForward
                size={26}
                color="#b2b2b2"
                className={`${
                  openId === service.id ? "-rotate-90" : "rotate-90"
                } duration-700`}
              />
            </div>
            {openId === service.id && (
              <div className="text-[#b2b2b2] px-8 py-6">
                Ready to elevate your brand? Contact us today to discuss your
                marketing needs. Our team is here to answer your questions and
                provide you with the solutions you need to succeed.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
