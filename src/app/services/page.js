"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  {
    id: 1,
    image: "/image1.webp",
    description:
      "We provide services to grow and develop Facebook, Instagram, TikTok, and LinkedIn platforms",
    title: "Social Media Platform Developing",
  },
  {
    id: 2,
    image: "/image2.webp",
    description:
      "We provide strategies and services to promote products and services directly to end consumers, driving awareness, engagement, and sales.",
    title: "Consumer Marketing",
  },
  {
    id: 3,
    image: "/image3.webp",
    description:
      "We focus on mass media channels to build brand awareness and reach a wide audience through TV, radio, print, outdoor advertising, cinema ads, and large-scale campaigns.",
    title: "ATL (Above the line)",
  },
  {
    id: 4,
    image: "/image4.webp",
    description:
      "We provide marketing coaching and consulting services to help businesses develop on social media platform, and achieve sustainable growth.",
    title: "Coaching and Consulting",
  },
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
            <div className="flex justify-between items-center">
              <p className="text-[#b2b2b2] font-semibold">0{service.id}</p>
              <p className="text-white text-xl text-center ">{service.title}</p>
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
                {service.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
