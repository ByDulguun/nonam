"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Page = () => {
  const firstRef = useRef();
  const [showCircle, setShowCircle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateX = (y - centerY) / 100;
      const rotateY = (x - centerX) / 100;

      if (firstRef.current) {
        firstRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${
          rotateY * 10
        }px) translateY(${rotateX * 10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const secondRef = useRef();
  const [showCircleSecond, setShowCircleSecond] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateX = (y - centerY) / 100;
      const rotateY = (x - centerX) / 100;

      if (secondRef.current) {
        secondRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${
          rotateY * 10
        }px) translateY(${rotateX * 10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const thirthRef = useRef();
  const [showCircleThirth, setShowCircleThirth] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateX = (y - centerY) / 100;
      const rotateY = (x - centerX) / 100;

      if (thirthRef.current) {
        thirthRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${
          rotateY * 10
        }px) translateY(${rotateX * 10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const fourthRef = useRef();
  const [showCircleFourth, setShowCircleFourth] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateX = (y - centerY) / 100;
      const rotateY = (x - centerX) / 100;

      if (fourthRef.current) {
        fourthRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${
          rotateY * 10
        }px) translateY(${rotateX * 10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <div className="grid gap-1 justify-center py-24 ">
        <div className="flex gap-2 ">
          <p className="text-white text-5xl lg:text-8xl">SELECTED</p>
          <p className="text-white text-5xl lg:text-8xl textFont">Case</p>
        </div>
        <p className="text-white text-5xl lg:text-8xl m-auto">STUDIES</p>
      </div>
      <div className="py-12 relative">
        <div className="relative">
          <div
            className="sticky bottom-0 z-40"
            onClick={() => router.push("cases/first")}
            onMouseEnter={() => setShowCircle(true)}
            onMouseLeave={() => setShowCircle(false)}
          >
            <Image
              src="/image3.webp"
              width={400}
              height={340}
              alt="hi"
              className="lg:w-full lg:h-[731px] object-cover h-[340px] w-[400px]"
              quality={100}
            />
            <div className="absolute grid gap-3 top-32 lg:top-72 lg:left-24 left-12">
              <p className="text-white lg:text-3xl lg:font-light">01</p>
              <p className="text-white lg:text-7xl font-medium text-4xl">
                TONE
              </p>
              <p className="text-white lg:text-xl">Social Media Management</p>
            </div>
            <div
              ref={firstRef}
              className={`w-20 h-20 max-sm:hidden max-lg:visible  rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 `}
            >
              <div
                className={`${
                  showCircle
                    ? " opacity-100 scale-100 duration-700"
                    : "opacity-0 scale-50  duration-700"
                } w-20 h-20 max-sm:hidden max-lg:visible bg-[#e56f40] rounded-full flex justify-center items-center`}
              >
                <IoIosArrowRoundForward
                  color="black"
                  className="-rotate-45"
                  size={20}
                />
              </div>
            </div>
          </div>

          <div
            className="sticky bottom-0 z-30 "
            onClick={() => router.push("cases/second")}
            onMouseEnter={() => setShowCircleSecond(true)}
            onMouseLeave={() => setShowCircleSecond(false)}
          >
            <Image
              src="/image10.webp"
              width={400}
              height={340}
              alt="hi"
              className="lg:w-full lg:h-[731px] object-cover h-[340px] w-[400px]"
              quality={100}
            />
            <div className="absolute grid gap-3 top-32 lg:top-72 lg:left-24 left-12">
              <p className="text-white lg:text-3xl lg:font-light ">02</p>
              <p className="text-white lg:text-7xl font-medium text-4xl">
                YAMATO
              </p>
              <p className="text-white lg:text-xl">Social Media Management</p>
            </div>
            <div
              ref={secondRef}
              className={`w-20 h-20 max-sm:hidden max-lg:visible  rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 `}
            >
              <div
                className={`${
                  showCircleSecond
                    ? " opacity-100 scale-100 duration-700"
                    : "opacity-0 scale-50  duration-700"
                } w-20 h-20 max-sm:hidden max-lg:visible bg-[#e56f40] rounded-full flex justify-center items-center`}
              >
                <IoIosArrowRoundForward
                  color="black"
                  className="-rotate-45"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="sticky bottom-0 z-20 "
          onClick={() => router.push("cases/thirth")}
          onMouseEnter={() => setShowCircleThirth(true)}
          onMouseLeave={() => setShowCircleThirth(false)}
        >
          <Image
            src="/image11.webp"
            width={400}
            height={340}
            alt="hi"
            className="lg:w-full lg:h-[731px] object-cover h-[340px] w-[400px]"
            quality={100}
          />
          <div className="absolute grid gap-3 top-32 lg:top-72 lg:left-24 left-12">
            <p className="text-white lg:text-3xl lg:font-light">03</p>
            <p className="text-white lg:text-7xl font-medium text-4xl">MUSE</p>
            <p className="text-white lg:text-xl">Social Media Management</p>
          </div>
          <div
            ref={thirthRef}
            className={`w-20 h-20 max-sm:hidden max-lg:visible  rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 `}
          >
            <div
              className={`${
                showCircleThirth
                  ? " opacity-100 scale-100 duration-700"
                  : "opacity-0 scale-50  duration-700"
              } w-20 h-20 max-sm:hidden max-lg:visible bg-[#e56f40] rounded-full flex justify-center items-center`}
            >
              <IoIosArrowRoundForward
                color="black"
                className="-rotate-45"
                size={20}
              />
            </div>
          </div>
        </div>

        <div
          className="sticky bottom-0 z-10"
          onClick={() => router.push("cases/fourth")}
          onMouseEnter={() => setShowCircleFourth(true)}
          onMouseLeave={() => setShowCircleFourth(false)}
        >
          <Image
            src="/image6.webp"
            width={400}
            height={340}
            alt="hi"
            className="lg:w-full lg:h-[731px] object-cover h-[340px] w-[400px]"
            quality={100}
          />
          <div className="absolute grid gap-3 top-32 lg:top-72 lg:left-24 left-12">
            <p className="text-white lg:text-3xl lg:font-light">04</p>
            <p className="text-white lg:text-7xl font-medium text-4xl">SPEED</p>
            <p className="text-white lg:text-xl">Social Media Management</p>
          </div>
          <div
            ref={fourthRef}
            className={`w-20 h-20 max-sm:hidden max-lg:visible  rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 `}
          >
            <div
              className={`${
                showCircleFourth
                  ? " opacity-100 scale-100 duration-700"
                  : "opacity-0 scale-50  duration-700"
              } w-20 h-20 max-sm:hidden max-lg:visible bg-[#e56f40] rounded-full flex justify-center items-center`}
            >
              <IoIosArrowRoundForward
                color="black"
                className="-rotate-45"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-5 py-48  relative">
        <div className="text-center">
          <p className="text-white text-4xl">LET'S MAKE</p>
          <div className="flex justify-center gap-1">
            <p className="text-white text-4xl">YOUR</p>
            <p className="text-white text-4xl textFont">Brand</p>
          </div>
          <p className="text-white text-4xl">SHINE?</p>
        </div>
        <div
          onClick={() => router.push("/contact")}
          className="flex items-end gap-1  border-[#b3b3b3] border-b-1 w-fit m-auto "
        >
          <div className="flex items-center gap-2 group relative overflow-hidden  w-[165px] h-[30px] cursor-pointer">
            <IoIosArrowRoundForward
              color="white"
              className={`-rotate-45 absolute bottom-0 group-hover:-bottom-12 duration-700  left-0 group-hover:-left-12`}
              size={26}
            />
            <IoIosArrowRoundForward
              color="white"
              className={`-rotate-45 absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0 `}
              size={26}
            />
            <p className="text-xl text-white font-medium leading-[1] group-hover:-bottom-12 bottom-0 left-6 duration-700 absolute z-40">
              GET IN
            </p>
            <p className="text-xl text-white font-medium leading-[1] group-hover:-top-12 top-2.5 right-0 duration-700 absolute z-40">
              TOUCH
            </p>

            <p className=" text-xl text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-12 left-6  duration-700 z-40">
              GET IN
            </p>
            <p className=" text-xl text-white font-medium leading-[1] absolute group-hover:top-2.5 -top-12 right-0  duration-700 z-40">
              TOUCH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
