"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Solutions = () => {
  const [animate, setAnimate] = useState(false);

  const images = [
    {
      src: "/solutions/image 1.png",
      link: "https://www.facebook.com/BSBServiceOfficial",
    },
    {
      src: "/solutions/image 2.png",
      link: "https://www.facebook.com/businesspos.mn",
    },
    {
      src: "/solutions/image 3.png",
      link: "https://www.facebook.com/ARAcomplex",
    },
    {
      src: "/solutions/image 4.png",
      link: "https://www.facebook.com/GoldenGobi",
    },
    {
      src: "/solutions/image 5.png",
      link: "https://www.facebook.com/badrakhenergy",
    },
    {
      src: "/solutions/image 6.png",
      link: "https://www.facebook.com/higold.mongolia",
    },
    {
      src: "/solutions/image 7.png",
      link: "https://www.facebook.com/MunchkinMongolia",
    },
    {
      src: "/solutions/image 8.png",
      link: "https://www.facebook.com/URMineMongolia",
    },
    {
      src: "/solutions/image 9.png",
      link: "https://www.facebook.com/AsianaUlaanbaatar",
    },
    {
      src: "/solutions/image 10.png",
      link: "https://www.facebook.com/EasyCookMN",
    },
    {
      src: "/solutions/image 11.png",
      link: "https://www.facebook.com/nuby.monos",
    },
    {
      src: "/solutions/image 12.png",
      link: "https://www.facebook.com/hkmall.mn",
    },
    {
      src: "/solutions/image 13.png",
      link: "https://www.facebook.com/musubi.baby.products",
    },
    {
      src: "/solutions/image 14.png",
      link: "https://www.facebook.com/NaturaMongolia",
    },
    {
      src: "/solutions/image 15.png",
      link: "https://www.facebook.com/GSAccountLLC/",
    },
    {
      src: "/solutions/image 16.png",
      link: "https://www.facebook.com/asimonbrokers",
    },
    {
      src: "/solutions/image 17.png",
      link: "https://www.facebook.com/Unisteel.mn",
    },
    {
      src: "/solutions/image 18.png",
      link: "https://www.facebook.com/profile.php?id=100057144263178",
    },
    {
      src: "/solutions/image 19.png",
      link: "https://www.facebook.com/taxacc.mn",
    },
    {
      src: "/solutions/image 20.png",
      link: "https://www.facebook.com/UrbanSmileClinic",
    },
    {
      src: "/solutions/image 21.png",
      link: "https://www.facebook.com/trytools.fun",
    },
    {
      src: "/solutions/image 22.png",
      link: "https://www.facebook.com/profile.php?id=61556929860543",
    },
  ];

  const marqueeImages = [...images, ...images];

  useEffect(() => {
    const container = document.querySelector("#marquee-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting && entry.intersectionRatio > 0.5);
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="h-fit px-4 lg:px-24">
      <div className="grid gap-6">
        <div>
          <p className="text-white text-4xl lg:text-6xl">RECENT</p>
          <div className="flex">
            <p className="text-white text-4xl lg:text-6xl textFont">Clients</p>
          </div>
          <p className="text-gray-400 text-2xl lg:text-2xl">
            Click on the clients' logo for more information.
          </p>
        </div>
      </div>

      <div
        id="marquee-container"
        className="w-full my-12 overflow-x-scroll scrollbar-hide"
      >
        <div className={`flex gap-4 ${animate ? "animate-marquee" : ""}`}>
          {marqueeImages.map((img, i) => (
            <a
              key={`${img.src}-${i}`}
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]"
            >
              <Image
                src={img.src}
                alt={`Client ${(i % images.length) + 1}`}
                width={350}
                height={350}
                className="w-full h-full object-contain"
                quality={100}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
