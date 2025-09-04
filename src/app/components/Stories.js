"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const Stories = () => {
  const firstRef = useRef();

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
          {/* First section: Image-Video */}
          <div className="sticky bottom-0 z-40 flex cursor-pointer lg:max-h-[600px] h-fit w-full bg-[#0a0a0a]">
            <div className="lg:flex grid w-full justify-center">
              <div>
                <Image
                  src="/stories/asiana.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover"
                  quality={100}
                />
              </div>
              <div>
                <video
                  src="/stories/asiana.mp4"
                  className="w-fit h-full object-cover"
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                />
              </div>
              <div>
                <Image
                  src="/stories/asianaleft.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover lg:block hidden"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Second section: Video-Image */}
          <div className="sticky cursor-pointer lg:bottom-0 -bottom-120 z-30 lg:max-h-[600px] h-fit flex bg-[#0a0a0a]">
            <div className="lg:flex grid w-full justify-center">
              <div>
                <Image
                  src="/stories/bsbleft.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover"
                  quality={100}
                />
              </div>
              <div>
                <video
                  src="/stories/bsb.mp4"
                  className="w-fit h-full object-cover"
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                />
              </div>
              <div>
                <Image
                  src="/stories/bsbright.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover lg:block hidden"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Third section: Image-Video */}
          <div className="sticky cursor-pointer lg:bottom-0 -bottom-120 z-20 lg:max-h-[600px] h-fit flex bg-[#0a0a0a]">
            <div className="lg:flex grid w-full justify-center">
              <div>
                <Image
                  src="/stories/badrakhleft.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover"
                  quality={100}
                />
              </div>
              <div>
                <video
                  src="/stories/badrah.mp4"
                  className="w-fit h-full object-cover"
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                />
              </div>
              <div>
                <Image
                  src="/stories/badrakhright.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover lg:block hidden"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Fourth section: Video-Image */}
          <div className="sticky cursor-pointer lg:bottom-0 -bottom-120 z-10 lg:max-h-[600px] flex bg-[#0a0a0a]">
            <div className="lg:flex grid w-full justify-center">
              <div>
                <Image
                  src="/stories/bolorleft.jpg"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover"
                  quality={100}
                />
              </div>
              <div>
                <video
                  src="/stories/bsb2.mp4"
                  className="w-fit h-full object-cover"
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                />
              </div>
              <div>
                <Image
                  src="/stories/rightbsb.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover lg:block hidden"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Fifth section: Image-Video */}
          <div className="sticky cursor-pointer lg:bottom-0 -bottom-120 z-0 lg:max-h-[600px] h-fit flex bg-[#0a0a0a]">
            <div className="lg:flex grid w-full justify-center">
              <div>
                <Image
                  src="/stories/higoldleft.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover"
                  quality={100}
                />
              </div>
              <div>
                <video
                  src="/stories/higold.mp4"
                  className="w-fit h-full object-cover"
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                />
              </div>
              <div>
                <Image
                  src="/stories/higoldright.png"
                  width={400}
                  height={340}
                  alt="hi"
                  className="lg:w-fit w-full h-full lg:h-full object-cover lg:block hidden"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
