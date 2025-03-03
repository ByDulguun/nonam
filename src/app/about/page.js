"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div className="grid gap-6">
        <div className="grid gap-1 text-center pt-32 lg:pt-4 ">
          <div className="lg:flex m-auto gap-2">
            <p className="text-white text-5xl lg:text-8xl ">CREATIVE </p>
            <p className="text-white text-5xl lg:text-8xl ">MINDS,</p>
          </div>
          <div className="lg:flex w-fit gap-2 m-auto text-center">
            <p className="text-white text-5xl lg:text-8xl  textFont flex justify-center">
              Strategic
            </p>
            <p className="text-white text-5xl lg:text-8xl ">SOLUTIONS</p>
          </div>
        </div>
        <p className="text-[#b2b2b2] text-center w-[300px] lg:w-[500px] m-auto">
          We combine creativity with data-driven strategies to deliver
          exceptional results for our clients.
        </p>
        <div
          onClick={() => router.push("/contact")}
          className="flex items-end gap-1  border-[#b3b3b3] border-b-1 w-fit m-auto "
        >
          <div className="flex items-center gap-2 group relative overflow-hidden  w-[110px] h-[30px] cursor-pointer">
            <IoIosArrowRoundForward
              color="white"
              className={`-rotate-45 text-xl absolute bottom-0 group-hover:-bottom-12 duration-700  left-0 group-hover:-left-12`}
            />
            <IoIosArrowRoundForward
              color="white"
              className={`-rotate-45 text-xl absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0 `}
            />
            <p className="text-xs text-white font-medium leading-[1] group-hover:-bottom-12 bottom-1 left-6 duration-700 absolute z-40">
              GET IN
            </p>
            <p className="text-xs text-white font-medium leading-[1] group-hover:-top-12 top-3.5 right-0 duration-700 absolute z-40">
              TOUCH
            </p>

            <p className=" text-xs text-white font-medium leading-[1] absolute group-hover:bottom-1 -bottom-12 left-6  duration-700 z-40">
              GET IN
            </p>
            <p className=" text-xs text-white font-medium leading-[1] absolute group-hover:top-3.5 -top-12 right-0  duration-700 z-40">
              TOUCH
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[100vw] overflow-hidden h-[160px] lg:h-[500px] my-24 ">
        <div className="flex gap-5 py-4 scrolling-text1  lg:gap-20">
          <Image
            src={"/image1.webp"}
            className="w-[80px] h-[100px] lg:w-[300px] lg:h-[400px] skew-y-12"
            width={100}
            height={200}
          />
          <Image
            src={"/image2.webp"}
            className="w-[80px] h-[100px] lg:w-[300px] lg:h-[400px] -skew-y-12"
            width={100}
            height={200}
          />
          <Image
            src={"/image3.webp"}
            className="w-[80px] h-[100px] lg:w-[300px] lg:h-[400px] skew-y-12"
            width={100}
            height={200}
          />
          <Image
            src={"/image4.webp"}
            className="w-[80px] h-[100px] lg:w-[300px] lg:h-[400px] -skew-y-12"
            width={100}
            height={200}
          />
          <Image
            src={"/image5.webp"}
            className="w-[80px] h-[100px] lg:w-[300px] lg:h-[400px] skew-y-12"
            width={100}
            height={200}
          />
          <Image
            src={"/image6.webp"}
            className="w-[80px] h-[100px] lg:w-[300px] lg:h-[400px] -skew-y-12"
            width={100}
            height={200}
          />
        </div>
      </div>
      <div className="flex gap-4 items-start justify-center lg:justify-around">
        <div className="grid gap-3 ">
          <div className="flex gap-2 items-center">
            <p className="text-[#b2b2b2] text-3xl lg:text-9xl ">+</p>
            <p className="text-white font-medium text-4xl lg:text-9xl"> 25</p>
          </div>
          <p className="text-[#b2b2b2] text-sm max-w-[100px] lg:max-w-[300px] lg:text-xl">
            Years of experience
          </p>
        </div>
        <div className="grid gap-3 ">
          <div className="flex gap-2 items-center">
            <p className="text-[#b2b2b2] text-3xl lg:text-9xl ">+</p>
            <p className="text-white font-medium text-4xl lg:text-9xl"> 65</p>
          </div>
          <p className="text-[#b2b2b2] text-sm max-w-[100px] lg:max-w-[300px] lg:text-xl">
            Succesful Projects
          </p>
        </div>
        <div className="grid gap-3 ">
          <div className="flex gap-2 items-center">
            <p className="text-[#b2b2b2] text-3xl lg:text-9xl ">+</p>
            <p className="text-white font-medium text-4xl lg:text-9xl"> 26</p>
          </div>
          <p className="text-[#b2b2b2] text-sm max-w-[100px] lg:max-w-[300px] lg:text-xl">
            Awards Wom
          </p>
        </div>
      </div>
      <div className="grid h-fit gap-4">
        <div className="grid gap-1 text-start pt-32 w-fit px-6 lg:px-24">
          <div className="flex w-fit gap-2">
            <p className="text-white text-4xl lg:text-8xl ">WE </p>
            <p className="text-white text-4xl lg:text-8xl  textFont m-auto">
              Started
            </p>
            <p className="text-white text-4xl lg:text-8xl ">BACK</p>
          </div>
          <p className="text-white text-4xl lg:text-8xl ">IN 2005</p>
        </div>
        <p className="text-[#b2b2b2] max-w-[400px] lg:max-w-[800px] px-6 lg:px-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </div>
      <div className="flex w-fit gap-2 px-6 pt-24 lg:grid lg:px-24">
        <div className="lg:flex w-fit gap-2 flex">
          <p className="text-white text-4xl lg:text-8xl ">HOW </p>
          <p className="text-white text-4xl lg:text-8xl  textFont m-auto">We</p>
        </div>
        <p className="text-white text-4xl lg:text-8xl ">WORK</p>
      </div>
      <div className="py-8 grid gap-1 lg:flex relative px-4  lg:px-24">
        <div className="bg-[#222] grid gap-16 p-10 lg:flex-1  ">
          <div className=" w-10 h-10 textFont text-2xl">01</div>
          <p className="text-white w-40 font-medium text-3xl">
            CONTENT MARKETHING
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#222] grid gap-16 p-10 lg:flex-1">
          <div className=" w-10 h-10 textFont text-2xl">02</div>
          <p className="text-white w-40 font-medium text-3xl">PAID ADVERSING</p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#222] grid gap-16 p-10 lg:flex-1">
          <div className=" w-10 h-10 textFont text-2xl">03</div>
          <p className="text-white w-40 font-medium text-3xl">BRAND STRATEGY</p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#222] grid gap-16 p-10 lg:flex-1">
          <div className=" w-10 h-10 textFont text-2xl">04</div>
          <p className="text-white w-40 font-medium text-3xl">
            EMAIL MARKETING
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="grid gap-1 text-start pt-32 w-fit px-6 lg:px-24">
        <div className="flex w-fit gap-2">
          <p className="text-white text-4xl lg:text-6xl ">OUR </p>
          <p className="text-white text-4xl lg:text-6xl  textFont m-auto">
            Mission
          </p>
          <p className="text-white text-4xl lg:text-6xl ">AT</p>
        </div>
        <p className="text-white text-4xl lg:text-6xl ">MARKETING</p>
      </div>
      <div className="lg:flex  gap-24">
        <p className="text-[#b2b2b2] p-6 lg:max-w-[700px] lg:px-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
        <p className="text-[#b2b2b2] p-6 lg:max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare,
        </p>
      </div>
      <div
        onClick={() => router.push("/contact")}
        className="flex items-end gap-1  border-[#b3b3b3] border-b-1 w-fit mx-6 lg:mx-24 "
      >
        <div className="flex items-center gap-2 group relative overflow-hidden  w-[126px] h-[24px] cursor-pointer">
          <IoIosArrowRoundForward
            color="white"
            className={`-rotate-45 text-lg absolute bottom-0 group-hover:-bottom-12 duration-700  left-0 group-hover:-left-12`}
          />
          <IoIosArrowRoundForward
            color="white"
            className={`-rotate-45 text-lg absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0 `}
          />
          <p className="text-sm text-white font-medium leading-[1] group-hover:-bottom-12 bottom-1 left-6 duration-700 absolute z-40">
            GET IN
          </p>
          <p className="text-sm text-white font-medium leading-[1] group-hover:-top-12 top-1.5 right-0 duration-700 absolute z-40">
            TOUCH
          </p>

          <p className=" text-sm text-white font-medium leading-[1] absolute group-hover:bottom-1 -bottom-12 left-6  duration-700 z-40">
            GET IN
          </p>
          <p className=" text-sm text-white font-medium leading-[1] absolute group-hover:top-1.5 -top-12 right-0  duration-700 z-40">
            TOUCH
          </p>
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
          <div className="flex items-center gap-2 group relative overflow-hidden  w-[124px] h-[30px] cursor-pointer">
            <IoIosArrowRoundForward
              color="white"
              className={`-rotate-45 text-xl absolute bottom-0 group-hover:-bottom-12 duration-700  left-0 group-hover:-left-12`}
            />
            <IoIosArrowRoundForward
              color="white"
              className={`-rotate-45 text-xl absolute -bottom-12 group-hover:bottom-0 duration-700 -left-12 group-hover:left-0 `}
            />
            <p className="text-sm text-white font-medium leading-[1] group-hover:-bottom-12 bottom-1 left-6 duration-700 absolute z-40">
              GET IN
            </p>
            <p className="text-sm text-white font-medium leading-[1] group-hover:-top-12 top-3 right-0 duration-700 absolute z-40">
              TOUCH
            </p>

            <p className=" text-sm text-white font-medium leading-[1] absolute group-hover:bottom-1 -bottom-12 left-6  duration-700 z-40">
              GET IN
            </p>
            <p className=" text-sm text-white font-medium leading-[1] absolute group-hover:top-3 -top-12 right-0  duration-700 z-40">
              TOUCH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
