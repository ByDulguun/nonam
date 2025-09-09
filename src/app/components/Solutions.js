"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

export const Solutions = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387218/image_1_ynp8ue.png",
      link: "https://www.facebook.com/BSBServiceOfficial",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387219/image_2_tarqrl.png",
      link: "https://www.facebook.com/businesspos.mn",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387220/image_3_qrydmt.png",
      link: "https://www.facebook.com/ARAcomplex",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387226/image_4_cc2ptp.png",
      link: "https://www.facebook.com/GoldenGobi",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387225/image_5_ajaawg.png",
      link: "https://www.facebook.com/badrakhenergy",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387219/image_6_blkdc4.png",
      link: "https://www.facebook.com/higold.mongolia",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387219/image_7_x72qfq.png",
      link: "https://www.facebook.com/MunchkinMongolia",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387220/image_8_twds3l.png",
      link: "https://www.facebook.com/URMineMongolia",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387227/image_9_o4zgyg.png",
      link: "https://www.facebook.com/AsianaUlaanbaatar",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387226/image_10_srgs9u.png",
      link: "https://www.facebook.com/EasyCookMN",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387220/image_11_ihwmdt.png",
      link: "https://www.facebook.com/nuby.monos",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387220/image_12_mhhfpl.png",
      link: "https://www.facebook.com/hkmall.mn",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387226/image_13_scttsq.png",
      link: "https://www.facebook.com/musubi.baby.products",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387220/image_14_lxf9ua.png",
      link: "https://www.facebook.com/NaturaMongolia",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387225/image_15_hm7nds.png",
      link: "https://www.facebook.com/GSAccountLLC/",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387225/image_16_mi0bwa.png",
      link: "https://www.facebook.com/asimonbrokers",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387220/image_17_xdfvup.png",
      link: "https://www.facebook.com/Unisteel.mn",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387220/image_18_ou16q7.png",
      link: "https://www.facebook.com/profile.php?id=100057144263178",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387219/image_19_wmk0nk.png",
      link: "https://www.facebook.com/taxacc.mn",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387219/image_20_lmdmyp.png",
      link: "https://www.facebook.com/UrbanSmileClinic",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387217/image_21_i5qdg2.png",
      link: "https://www.facebook.com/trytools.fun",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387219/image_22_l21qwu.png",
      link: "https://www.facebook.com/profile.php?id=61556929860543",
    },
  ];

  const marqueeImages = [...images, ...images, ...images]; // duplicate for seamless scroll

  // Preload images
  useEffect(() => {
    images.forEach((img) => {
      const image = new window.Image();
      image.src = img.src;
    });
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (!containerRef.current) return;
    let frameId;
    const scrollSpeed = window.innerWidth < 768 ? 1 : 0.5;
    const originalWidth = containerRef.current.scrollWidth / 3;

    const step = () => {
      if (!isDragging && containerRef.current) {
        containerRef.current.scrollLeft += scrollSpeed;

        if (containerRef.current.scrollLeft >= originalWidth) {
          containerRef.current.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isDragging]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (containerRef.current) setScrollLeft(containerRef.current.scrollLeft);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const walk = e.clientX - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePointerUp = () => setIsDragging(false);
  const handlePointerLeave = () => setIsDragging(false);

  return (
    <div className="h-fit px-4 lg:px-24 ">
      <div>
        <p className="text-white text-4xl lg:text-6xl">RECENT</p>
        <div className="flex">
          <p className="text-white text-4xl lg:text-6xl textFont">Clients</p>
        </div>
        <p className="text-gray-400 text-2xl">
          Click on the clients' logo for more information.
        </p>
      </div>

      <div
        ref={containerRef}
        className="w-full my-12 overflow-x-scroll cursor-grab scrollbar-hide"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
      >
        <div className="flex gap-4">
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
                alt={`Client ${i + 1}`}
                width={350}
                height={350}
                className="w-full h-full object-contain"
                quality={85}
                priority={i < 3}
                loading={i < 3 ? "eager" : "lazy"}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
