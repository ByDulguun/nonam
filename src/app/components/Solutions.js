"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Solutions = () => {
  const [animate, setAnimate] = useState(true);

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
      src: "/solutions/image 15.png",
      link: "https://www.facebook.com/GSAccountLLC/",
    },
    {
      src: "/solutions/image 16.png",
      link: "https://www.facebook.com/asimonbrokers",
    },
    {
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757387225/image_15_hm7nds.png",
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

  const marqueeImages = [...images, ...images];

  // Preload images for faster showing
  useEffect(() => {
    images.forEach((img) => {
      const image = document.createElement("img");
      image.src = img.src;
    });
  }, []);

  // IntersectionObserver to start animation when in view
  useEffect(() => {
    const container = document.querySelector("#marquee-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (animate) return; // animation already stopped by drag
        setAnimate(entry.isIntersecting && entry.intersectionRatio > 0.5);
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [animate]);

  // Mouse drag & touch scroll
  useEffect(() => {
    const container = document.getElementById("marquee-container");
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
      isDown = true;
      const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
      startX = pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.classList.add("cursor-grabbing");

      setAnimate(false);
    };

    const endDrag = () => {
      if (!isDown) return;
      isDown = false;
      container.classList.remove("cursor-grabbing");

      setAnimate(true);
    };

    const drag = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
      const walk = pageX - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", startDrag);
    container.addEventListener("mousemove", drag);
    container.addEventListener("mouseup", endDrag);
    container.addEventListener("mouseleave", endDrag);

    container.addEventListener("touchstart", startDrag);
    container.addEventListener("touchmove", drag);
    container.addEventListener("touchend", endDrag);

    return () => {
      container.removeEventListener("mousedown", startDrag);
      container.removeEventListener("mousemove", drag);
      container.removeEventListener("mouseup", endDrag);
      container.removeEventListener("mouseleave", endDrag);

      container.removeEventListener("touchstart", startDrag);
      container.removeEventListener("touchmove", drag);
      container.removeEventListener("touchend", endDrag);
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
        className="w-full my-12 overflow-x-scroll cursor-grab scrollbar-hide"
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
                priority={i < 4}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
