"use client";
import Image from "next/image";
import sun from "../../../public/sun.svg";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setShowMenu(false); // Close the menu after navigation
  };

  return (
    <div>
      <div className="px-4 py-8 lg:px-24 flex justify-between items-center">
        <div className="w-8 h-8  ">
          <div
            className="grid gap-2 py-2.5 cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <div className="w-full h-[1px] bg-white"></div>
            <div className="w-[80%] h-[1px] bg-white"></div>
          </div>
        </div>
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2 group relative overflow-hidden w-[170px] h-[24px] cursor-pointer"
        >
          <p className="text-[1.35rem] text-white font-medium leading-[1] group-hover:-bottom-6 bottom-0 left-0 duration-700 absolute z-60 max-sm:z-0">
            MARKETHING
          </p>
          <Image
            src={sun}
            alt="sun"
            width={18}
            height={18}
            className="object-cover pb-1 group-hover:rotate-90 duration-700 absolute right-1 z-60 max-sm:z-0"
          />
          <p className="text-[1.35rem] text-[#e56f40] font-medium leading-[1] absolute group-hover:bottom-0 -bottom-6 left-0  duration-700 z-60 max-sm:z-0">
            MARKETHING
          </p>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs duration-700 ${
          showMenu ? "opacity-100 z-50" : "opacity-0 -z-10"
        }`}
      >
        <div
          className={`bg-[#222] w-[40%] max-sm:w-[100%] h-full fixed z-70 duration-1000  ${
            showMenu ? "top-0 left-0" : "-top-[660px] -left-[660px]"
          }`}
        >
          <div className="lg:px-24 px-4 py-8">
            <div className="w-8 h-8 cursor-pointer">
              <div
                className="grid gap-2 py-2.5 relative"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <div
                  className={`w-full h-[1px] bg-white transition-transform duration-500 ${
                    showMenu ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-[80%] h-[1px] bg-white transition-transform duration-500 ${
                    showMenu ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="py-24 grid h-fit gap-8">
              <div
                onClick={() => handleNavigation("/")}
                className="flex items-end gap-1 border-[#b3b3b3] border-b-1 w-fit"
              >
                <div className="flex items-center gap-2 group relative overflow-hidden  w-[300px] h-[60px] cursor-pointer">
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute bottom-0 group-hover:-bottom-12 duration-700 `}
                    size={26}
                  />
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute -bottom-12 group-hover:bottom-0 duration-700 `}
                    size={26}
                  />
                  <p className="text-5xl text-white font-medium leading-[1] group-hover:-bottom-12 bottom-0 left-6 duration-700 absolute z-60">
                    HOME
                  </p>

                  <p className=" text-5xl text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-12 left-6  duration-700 z-60">
                    HOME
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleNavigation("/about")}
                className="flex items-end gap-1 border-[#b3b3b3] border-b-1 w-fit"
              >
                <div className="flex items-center gap-2 group relative overflow-hidden  w-[300px] h-[60px] cursor-pointer">
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute bottom-0 group-hover:-bottom-12 duration-700 `}
                    size={26}
                  />
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute -bottom-12 group-hover:bottom-0 duration-700 `}
                    size={26}
                  />
                  <p className="text-5xl text-white font-medium leading-[1] group-hover:-bottom-12 bottom-0 left-6 duration-700 absolute z-60">
                    ABOUT
                  </p>

                  <p className=" text-5xl text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-12 left-6  duration-700 z-60">
                    ABOUT
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleNavigation("/services")}
                className="flex items-end gap-1 border-[#b3b3b3] border-b-1 w-fit"
              >
                <div className="flex items-center gap-2 group relative overflow-hidden  w-[300px] h-[60px] cursor-pointer">
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute bottom-0 group-hover:-bottom-12 duration-700 `}
                    size={26}
                  />
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute -bottom-12 group-hover:bottom-0 duration-700 `}
                    size={26}
                  />
                  <p className="text-5xl text-white font-medium leading-[1] group-hover:-bottom-12 bottom-0 left-6 duration-700 absolute z-60">
                    SERVICES
                  </p>

                  <p className=" text-5xl text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-12 left-6  duration-700 z-60">
                    SERVICES
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleNavigation("/cases")}
                className="flex items-end gap-1 border-[#b3b3b3] border-b-1 w-fit"
              >
                <div className="flex items-center gap-2 group relative overflow-hidden  w-[300px] h-[60px] cursor-pointer">
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute bottom-0 group-hover:-bottom-12 duration-700 `}
                    size={26}
                  />
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute -bottom-12 group-hover:bottom-0 duration-700 `}
                    size={26}
                  />
                  <p className="text-5xl text-white font-medium leading-[1] group-hover:-bottom-12 bottom-0 left-6 duration-700 absolute z-60">
                    CASES
                  </p>

                  <p className=" text-5xl text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-12 left-6  duration-700 z-60">
                    CASES
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleNavigation("/contact")}
                className="flex items-end gap-1 border-[#b3b3b3] border-b-1 w-fit"
              >
                <div className="flex items-center gap-2 group relative overflow-hidden  w-[300px] h-[60px] cursor-pointer">
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute bottom-0 group-hover:-bottom-12 duration-700 `}
                    size={26}
                  />
                  <IoIosArrowRoundForward
                    color="white"
                    className={`-rotate-45 mb-1 absolute -bottom-12 group-hover:bottom-0 duration-700 `}
                    size={26}
                  />
                  <p className="text-5xl text-white font-medium leading-[1] group-hover:-bottom-12 bottom-0 left-6 duration-700 absolute z-60">
                    CONTACT
                  </p>

                  <p className=" text-5xl text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-12 left-6  duration-700 z-60">
                    CONTACT
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center gap-2 group relative overflow-hidden w-[120px] h-[24px]  cursor-pointer">
                  <p className="lg:text-sm text-white font-medium leading-[1] group-hover:-bottom-6 bottom-0 left-0 duration-700 absolute z-60">
                    TWITER - X
                  </p>

                  <p className=" lg:text-sm text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-6 left-0  duration-700 z-60">
                    TWITER - X
                  </p>
                </div>
                <div className="flex items-center gap-2 group relative overflow-hidden w-[120px] h-[24px]  cursor-pointer">
                  <p className="lg:text-sm text-white font-medium leading-[1] group-hover:-bottom-6 bottom-0 left-0 duration-700 absolute z-60">
                    INSTAGRAM
                  </p>

                  <p className=" lg:text-sm text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-6 left-0  duration-700 z-60">
                    INSTAGRAM
                  </p>
                </div>
                <div className="flex items-center gap-2 group relative overflow-hidden w-[120px] h-[24px]  cursor-pointer">
                  <p className="lg:text-sm text-white font-medium leading-[1] group-hover:-bottom-6 bottom-0 left-0 duration-700 absolute z-60">
                    LINKEDIN
                  </p>

                  <p className=" lg:text-sm text-white font-medium leading-[1] absolute group-hover:bottom-0 -bottom-6 left-0  duration-700 z-60">
                    LINKEDIN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
