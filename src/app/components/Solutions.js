"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import Image from "next/image";
import { useRouter } from "next/navigation";
const images = Array.from({ length: 21 }).map((_, i) => ({
  src: `/solutions/image${i + 1}.jpg`,
  link: [
    "https://www.facebook.com/ARAcomplex",
    "https://www.facebook.com/BSBServiceOfficial",
    "https://www.facebook.com/GoldenGobi",
    "https://www.facebook.com/MunchkinMongolia",
    "https://www.facebook.com/nuby.monos",
    "https://www.facebook.com/URMineMongolia",
    "https://www.facebook.com/Unisteel.mn",
    "https://www.facebook.com/businesspos.mn",
    "https://www.facebook.com/AsianaUlaanbaatar",
    "https://www.facebook.com/NaturaMongolia",
    "https://www.facebook.com/badrakhenergy",
    "https://www.facebook.com/UrbanSmileClinic",
    "https://www.facebook.com/asimonbrokers",
    "https://www.facebook.com/taxacc.mn",
    "https://www.facebook.com/hkmall.mn",
    "https://www.facebook.com/GSAccountLLCv",
    "https://www.facebook.com/profile.php?id=100057144263178",
    "https://www.facebook.com/profile.php?id=61556929860543",
    "https://www.facebook.com/higold.mongolia",
    "https://www.facebook.com/EasyCookMN",
    "https://www.facebook.com/trytools.fun",
  ][i],
}));
export const Solutions = () => {
  const router = useRouter();

  return (
    <div className=" h-fit px-4 lg:px-24 ">
      <div className="grid gap-6">
        <div>
          <p className="text-white text-4xl lg:text-6xl ">RECENT </p>
          <div className="flex">
            <p className="text-white text-4xl lg:text-6xl  textFont">Clients</p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap w-full my-12">
        <div className="animate-marquee flex gap-4">
          {images.concat(images).map((img, i) => (
            <a
              key={i}
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:w-[350px] w-[200px]"
            >
              <Image
                src={img.src}
                alt={`image-${i}`}
                width={350}
                height={350}
                className="lg:h-[350px] lg:w-[350px] h-[200px] w-[200px] object-cover"
                quality={100}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
