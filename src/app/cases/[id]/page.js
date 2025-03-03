"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const data = [
  {
    id: "first",
    name: "Tone",
    description: "TONE HAS SEEN A 75% INCREASE IN SOCIAL MEDIA ENGAGEMENT.",
    descriptionSmall:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum sem neque, et posuere erat interdum vitae.",
    service: "Social Media Management",
    platforms: "Instagram and Facebook",
    result: "75% Increase in revenue ROI",
    website: "Tone",
    image: "/image3.webp",
  },
  {
    id: "second",
    name: "Yamata",
    description: "TONE HAS SEEN A 75% INCREASE IN SOCIAL MEDIA ENGAGEMENT.",
    descriptionSmall:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum sem neque, et posuere erat interdum vitae.",
    service: "Social Media Management",
    platforms: "Instagram and Facebook",
    result: "75% Increase in revenue ROI",
    website: "Tone",
    image: "/image10.webp",
  },
  {
    id: "thirth",
    name: "Muse",
    description: "TONE HAS SEEN A 75% INCREASE IN SOCIAL MEDIA ENGAGEMENT.",
    descriptionSmall:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum sem neque, et posuere erat interdum vitae.",
    service: "Social Media Management",
    platforms: "Instagram and Facebook",
    result: "75% Increase in revenue ROI",
    website: "Tone",
    image: "/image11.webp",
  },
  {
    id: "fourth",
    name: "Speed",
    description: "TONE HAS SEEN A 75% INCREASE IN SOCIAL MEDIA ENGAGEMENT.",
    descriptionSmall:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum sem neque, et posuere erat interdum vitae.",
    service: "Social Media Management",
    platforms: "Instagram and Facebook",
    result: "75% Increase in revenue ROI",
    website: "Tone",
    image: "/image6.webp",
  },
];

const Page = () => {
  const path = usePathname();
  const id = path.split("/");
  const router = useRouter();

  return (
    <div className="px-4 sm:px-10 md:px-20 xl:px-64 py-10 md:py-16 lg:py-20">
      {data
        .filter((item) => item.id === id[id.length - 1])
        .map((item) => {
          const nextIndex = data.findIndex(
            (item) => item.id === id[id.length - 1]
          );
          const nextItem = data[nextIndex + 1];
          return (
            <div className="grid gap-5 lg:gap-8" key={item.id}>
              <p className="text-[#e56f40]">{item.name}</p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
                {item.description}
              </p>
              <p className="text-[#b2b2b2] text-sm font-extralight md:w-[400px]">
                {item.descriptionSmall}
              </p>
              <div className="grid gap-4 lg:flex lg:gap-48">
                <div className="grid gap-4">
                  <div className="flex gap-3">
                    <p className="text-sm font-extralight text-[#b2b2b2]">
                      Service:
                    </p>
                    <p className="text-white text-sm font-extralight">
                      {item.service}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <p className="text-sm font-extralight text-[#b2b2b2]">
                      Platforms:
                    </p>
                    <p className="text-white text-sm font-extralight">
                      {item.platforms}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={350}
                height={100}
                className="w-full max-w-[350px] lg:max-w-full object-cover"
                quality={100}
              />
              <p className="text-white text-2xl md:text-3xl lg:text-4xl pt-12">
                OVERVIEW:
              </p>
              <p className="text-[#b2b2b2] text-sm font-extralight">
                {item.description}
              </p>
              <Image
                src={item.image}
                alt={item.name}
                width={350}
                height={100}
                className="w-full max-w-[350px] lg:max-w-full object-cover"
                quality={100}
              />
              {nextItem && (
                <p className="text-[#e56f40] text-center">Next Case:</p>
              )}
              {nextItem && (
                <div
                  onClick={() => router.push(`${nextItem.id}`)}
                  className="flex items-end gap-1 border-[#b3b3b3] border-b-1 w-fit m-auto cursor-pointer"
                >
                  <div className="flex items-center gap-2 group relative overflow-hidden w-[120px] md:w-[150px] lg:w-[190px] h-[25px] md:h-[35px] lg:h-[50px]">
                    <IoIosArrowRoundForward
                      color="white"
                      className="-rotate-45 absolute -bottom-1 group-hover:-bottom-12 duration-700 left-0 group-hover:-left-12"
                      size={32}
                    />
                    <IoIosArrowRoundForward
                      color="white"
                      className="-rotate-45 absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0"
                      size={32}
                    />
                    <p className="text-2xl md:text-3xl lg:text-5xl text-white font-medium absolute group-hover:-bottom-12 bottom-0 left-6 duration-700 z-40">
                      {nextItem.name}
                    </p>
                    <p className="text-2xl md:text-3xl lg:text-5xl text-white font-medium absolute group-hover:bottom-0 -bottom-12 left-6 duration-700 z-40">
                      {nextItem.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Page;
