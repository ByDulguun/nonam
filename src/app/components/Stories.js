"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Stories = () => {
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
    <div className="h-fit ">
      <div className="grid gap-6 px-4 lg:px-24 lg:pt-24">
        <div className="flex gap-1 lg:grid">
          <p className="text-white text-4xl lg:text-6xl">VISUALS</p>
          {/* <p className="text-white text-4xl lg:text-6xl textFont"></p> */}
        </div>
      </div>
      <div className="py-12 relative">
        <div className="relative">
          <div className="sticky bottom-0 z-40 flex cursor-pointer lg:max-h-[600px] h-fit w-full bg-[#0a0a0a] ">
            <div className="lg:flex grid w-full justify-center ">
              <div>
                <Image
                  src="/stories/asiana.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="w-fit h-full lg:h-full object-cover"
                  quality={100}
                />
              </div>
              <div>
                <video
                  src="/stories/asiana.mp4"
                  controls
                  className="w-fit h-full object-contain"
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                />
              </div>
              <div>
                <Image
                  src="/stories/asiana.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="w-fit h-full lg:h-full object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="sticky cursor-pointer lg:bottom-0 -bottom-120 z-30 lg:max-h-[600px]  flex bg-[#0a0a0a] ">
            <div className=" lg:flex lg:flex-row flex flex-col-reverse  justify-center ">
              <div>
                <video
                  src="/stories/badrah.mp4"
                  controls
                  className="w-fit h-full object-contain"
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                />
              </div>
              <div>
                <Image
                  src="/stories/badrah.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="w-fit h-full lg:h-full object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sticky cursor-pointer  lg:bottom-0 -bottom-120  z-20 lg:max-h-[600px] h-fit flex bg-[#0a0a0a]">
          <div className="lg:flex grid  justify-center">
            <div>
              <Image
                src="/stories/bsb.png"
                width={400}
                height={340}
                alt="hi"
                className="w-fit h-full lg:h-full object-cover"
                quality={100}
              />
            </div>
            <div>
              <video
                src="/stories/bsb.mp4"
                controls
                className="w-fit h-full object-contain"
                autoPlay={true}
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>

        <div className="sticky cursor-pointer  lg:bottom-0 -bottom-120  z-10 lg:max-h-[600px] h-fit flex bg-[#0a0a0a]">
          <div className="lg:flex lg:flex-row flex flex-col-reverse  justify-center">
            <div>
              <video
                src="/stories/bsb2.mp4"
                controls
                className="w-fit h-full object-contain"
                autoPlay={true}
                muted
                loop
                playsInline
              />
            </div>
            <div>
              <Image
                src="/stories/bsb2.png"
                width={400}
                height={340}
                alt="hi"
                className="w-fit h-full lg:h-full object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="sticky cursor-pointer  lg:bottom-0 -bottom-120  z-0 lg:max-h-[600px] h-fit flex bg-[#0a0a0a]">
          <div className="lg:flex grid  justify-center">
            <div>
              <Image
                src="/stories/higold.png"
                width={400}
                height={340}
                alt="hi"
                className="w-fit h-full lg:h-full object-cover"
                quality={100}
              />
            </div>
            <div>
              <video
                src="/stories/higold.mp4"
                controls
                className="w-fit h-full object-contain"
                autoPlay={true}
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
