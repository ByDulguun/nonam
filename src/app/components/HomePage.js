"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const RotatingText = dynamic(() => import("./RotateText"), {
  ssr: false,
});

export const HomePage = () => {
  const router = useRouter();
  const heroRef = useRef(null);

  const FRONT_INDEX = 2;

  // Optimized Cloudinary URLs (q_40, w_250, dpr_1.0)
  const mockImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_40,w_250,dpr_1.0/v1757387836/pro-1_-_Copy_nxgjlw.png",
      alt: "First Image",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_40,w_250,dpr_1.0/v1757387837/Untitled-1_0003_486326230_1054045786755569_6728907256753359962_n_pmytds.png",
      alt: "Second Image",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_40,w_250,dpr_1.0/v1757387839/Untitled-2_1_rrvxux.png",
      alt: "Third Image",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_40,w_250,dpr_1.0/v1757387848/Untitled-1_w61mhf.png",
      alt: "Fourth Image",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_40,w_250,dpr_1.0/v1757387857/Untitled-1_0001_482238367_664107755981556_3836143425791461448_n_gsjuh3.png",
      alt: "Fifth Image",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_40,w_250,dpr_1.0/v1757387863/Untitled-1_0000_482244625_1026775006153324_8028470251155227980_n_kz2cet.png",
      alt: "Sixth Image",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_40,w_250,dpr_1.0/v1757387868/Untitled-1_0002_488897524_1603813107240898_2381881758002387536_n_muqymd.png",
      alt: "Seventh Image",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_40,w_250,dpr_1.0/v1763281360/Artboard_3_rvzyi5.jpg",
      alt: "Eighth Image",
    },
  ];

  const imageSizes =
    "(max-width: 768px) 250px, (max-width: 1024px) 350px, 450px";

  const [animReady, setAnimReady] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const frontSrc = mockImages[FRONT_INDEX]?.src;

  // Detect when hero enters the screen
  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Idle Load Animation (Better TBT)
  useEffect(() => {
    if (!isInView) return;

    const enableAnimation = () => setAnimReady(true);

    if (window.requestIdleCallback) {
      requestIdleCallback(enableAnimation);
    } else {
      setTimeout(enableAnimation, 250);
    }
  }, [isInView]);

  return (
    <div
      ref={heroRef}
      className="lg:h-[100%] h-full grid gap-20 lg:flex lg:flex-row-reverse"
    >
      {/* 3D rotating image sphere */}
      <div className="h-fit lg:mt-20 mt-0">
        <div
          className={`relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rotate-16 left-32 -top-10 lg:-left-12 lg:-top-20 ${
            animReady ? "rotating-animation" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            willChange: animReady ? "transform" : "auto",
          }}
        >
          {isInView &&
            mockImages.map((item, i) => (
              <span
                key={item.id}
                className="absolute"
                style={{
                  transform: `rotateY(${
                    i * 45
                  }deg) translateY(200px) translateZ(0)`,
                  transformStyle: "preserve-3d",
                  willChange: animReady ? "transform" : "auto",
                }}
              >
                <div className="relative w-[250px] h-[250px] md:w-[330px] md:h-[330px] 2xl:w-[500px] 2xl:h-[500px] translate-x-[120px] xl:translate-x-[160px] 2xl:translate-x-[240px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={imageSizes}
                    quality={90}
                    className="object-contain"
                    {...(i === FRONT_INDEX
                      ? {
                          priority: true,
                          fetchPriority: "high",
                          loading: "eager",
                        }
                      : {
                          fetchPriority: "low",
                          loading: "lazy",
                        })}
                  />
                </div>
              </span>
            ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full h-fit lg:h-[100vh]">
        <div className="px-4 grid gap-4 h-fit overflow-hidden pt-48 lg:pt-32 lg:px-24">
          <div className="grid">
            <RotatingText
              texts={["CREATE", "NOT JUST ADS", "IMPACT"]}
              mainClassName="text-[#b3b3b3] overflow-hidden w-fit h-fit"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <div>
            <p id="lcp-text" className="text-white text-4xl lg:text-6xl">
              IDEAS ARE
            </p>
            <div className="flex gap-1">
              <p className="text-white text-4xl lg:text-6xl textFont">hot</p>
              <p className="text-white text-4xl lg:text-6xl">EXECUTION</p>
            </div>
            <p className="text-white text-4xl lg:text-6xl">IS HOTTER</p>
          </div>

          <Image
            src="/logoWhite.png"
            alt="sun"
            width={270}
            height={20}
            className="object-cover"
            loading="lazy"
          />

          <h1 className="text-[#ed2939] w-[100%] lg:w-[400px] font-bold">
            MARKETING AGENCY SINCE 2018
          </h1>

          <div
            className="flex items-end gap-1 border-[#b3b3b3] border-b w-fit cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            <div className="flex items-center gap-2 group relative overflow-hidden w-[126px] h-[24px]">
              <IoIosArrowRoundForward
                color="white"
                className="-rotate-45 absolute bottom-0 group-hover:-bottom-12 duration-700 left-0 group-hover:-left-12 text-xl"
              />
              <IoIosArrowRoundForward
                color="white"
                className="-rotate-45 absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0"
              />

              <p className="text-sm text-white font-medium absolute bottom-0 left-6 group-hover:-bottom-12 duration-700">
                GET IN
              </p>
              <p className="text-sm text-white font-medium absolute top-1 right-0 group-hover:-top-12 duration-700">
                TOUCH
              </p>

              <p className="text-sm text-white font-medium absolute -bottom-12 left-6 group-hover:bottom-0 duration-700">
                GET IN
              </p>
              <p className="text-sm text-white font-medium absolute -top-12 right-0 group-hover:top-1 duration-700">
                TOUCH
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
