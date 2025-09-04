"use client";
import Image from "next/image";
import RotatingText from "./RotateText";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const HomePage = () => {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className=" h-[100%] overflow-x-hidden lg:overflow-hidden grid  gap-20 lg:flex lg:flex-row-reverse ">
      <div className=" h-[80%]">
        <div
          className="relative w-[250px] h-[250px] lg:h-[500px] lg:w-[500px] a rotate-16   left-52 -top-12 lg:-left-10 lg:-top-20"
          style={{ transformStyle: "preserve-3d" }}
        >
          {isClient && windowWidth > 768 ? (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <span
                  key={i}
                  style={{
                    position: "absolute",
                    transform: `rotateY(calc(var(--i) * 45deg)) translateY(200px) translateX(200px)`,
                    top: 0,
                    left: 0,
                    transformOrigin: "center",
                    transformStyle: "preserve-3d",
                    "--i": i,
                  }}
                >
                  <Image
                    src={`/home/image${i}.png`}
                    width={250}
                    height={250}
                    className="lg:w-[400px] lg:h-[400px]"
                    alt={`Image ${i}`}
                    quality={90}
                  />
                </span>
              ))}
            </>
          ) : (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <span
                  key={i}
                  style={{
                    position: "absolute",
                    transform: `rotateY(calc(var(--i) * 45deg)) translateY(220px) translateX(126px)`,
                    top: 0,
                    left: 0,
                    transformOrigin: "center",
                    transformStyle: "preserve-3d",
                    "--i": i,
                  }}
                >
                  <Image
                    src={`/home/image${i}.png`}
                    width={250}
                    height={250}
                    className="lg:w-[400px] lg:h-[400px]"
                    alt={`Image${i}`}
                    quality={90}
                  />
                </span>
              ))}
            </>
          )}
        </div>
      </div>
      <div className=" w-full h-[100vh]">
        <div className="px-4 grid gap-4 h-fit  overflow-hidden pt-48 lg:pt-12  lg:w-[100%] lg:px-24">
          <div className="grid">
            <RotatingText
              texts={["CREATE", "NOT JUST ADS", "IMPACT"]} //rotate hiij baigaa text oorchloh
              mainClassName=" text-[#b3b3b3] overflow-hidden w-fit h-fit" //style ungu solih
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <div>
            <p className="text-white text-4xl lg:text-6xl ">IDEAS ARE </p>
            <div className="flex gap-1">
              <p className="text-white text-4xl lg:text-6xl textFont">hot</p>
              <p className="text-white text-4xl lg:text-6xl">EXECUTION</p>
            </div>
            <p className="text-white text-4xl lg:text-6xl">IS HOTTER</p>
          </div>
          <h1 className="text-[#ed2939] w-[100%] lg:w-[400px] font-bold">
            MARKETING AGENCY SINCE 2018
          </h1>
          <p className="text-[#b3b3b3]">
            Social Media Marketing,Content Marketing, Social Platform
            Development, <br /> Consumer Behavior and Emotional Marketing,
            ATL/AboveTheLine/ plan, <br /> Training and Coaching, Consulting
          </p>
          <div
            className="flex items-end gap-1  border-[#b3b3b3] border-b-1 w-fit"
            onClick={() => router.push("/contact")}
          >
            <div className="flex items-center gap-2 group relative overflow-hidden  w-[126px] h-[24px] cursor-pointer">
              <IoIosArrowRoundForward
                color="white"
                className={`-rotate-45 absolute bottom-0 group-hover:-bottom-12 duration-700  left-0 group-hover:-left-12 text-xl`}
              />
              <IoIosArrowRoundForward
                color="white"
                className={`-rotate-45 absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0 `}
              />
              <p className="lg:text-sm text-sm text-white font-medium leading-[1] group-hover:-bottom-12 bottom-0 left-6 duration-700 absolute z-40 py-1">
                GET IN
              </p>
              <p className="lg:text-sm text-sm text-white font-medium leading-[1] group-hover:-top-12 top-1.5 right-0 duration-700 absolute z-40 ">
                TOUCH
              </p>

              <p className=" lg:text-sm text-sm text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-12 left-6  duration-700 z-40 py-1">
                GET IN
              </p>
              <p className=" lg:text-sm text-sm text-white font-medium leading-[1] absolute group-hover:top-0.5 -top-12 right-0  duration-700 z-40 py-1">
                TOUCH
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
