"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { label: "НҮҮР ХУУДАС", path: "/" },
  { label: "БИДНИЙ ТУХАЙ", path: "/about" },
  { label: "ҮЙЛЧИЛГЭЭ", path: "/services" },
  { label: "ХОЛБОО БАРИХ", path: "/contact" },
];

const socialLinks = [
  { name: "FACEBOOK", url: "https://www.facebook.com/greativityagency" },
  { name: "INSTAGRAM", url: "https://www.instagram.com/eatit_agency" },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path) => {
    router.push(path);
    setShowMenu(false);
  };

  return (
    <header className="fixed w-full top-0 z-30 transition-transform duration-300">
      {/* Top bar */}
      <div className="px-4 py-8 lg:px-24 flex justify-between items-center bg-[#222] z-40">
        {/* Hamburger */}
        <div
          className="w-8 h-8 cursor-pointer"
          onClick={() => setShowMenu((p) => !p)}
        >
          <div className="grid gap-2 py-2.5">
            <div className="w-full h-[1px] bg-white"></div>
            <div className="w-[80%] h-[1px] bg-white"></div>
          </div>
        </div>

        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2 group relative overflow-hidden w-[170px] h-[26px] cursor-pointer"
        >
          <Image
            src="/logoWhite.png"
            alt="white logo"
            width={140}
            height={20}
            className="absolute -bottom-1 left-0 group-hover:-bottom-8 duration-700"
          />
          <Image
            src="/logoRed.png"
            alt="red logo"
            width={140}
            height={20}
            className="absolute -bottom-8 left-0 group-hover:-bottom-1 duration-700"
          />
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-[#222] transition-all duration-700 z-50
          ${
            showMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <div className="lg:px-24 px-4 py-8 w-[40%] max-sm:w-full h-screen">
          {/* Close button */}
          <div
            className="w-8 h-8 cursor-pointer"
            onClick={() => setShowMenu(false)}
          >
            <div className="grid gap-2 py-2.5 relative">
              <div className="w-full h-[1px] bg-white rotate-45 translate-y-1.5"></div>
              <div className="w-[80%] h-[1px] bg-white -rotate-45 -translate-y-1.5"></div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:py-24 py-12 grid gap-8">
            {menuItems.map((item) => (
              <div
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-end gap-1 ${
                  pathname === item.path
                    ? "border-[#ed2939] border-b"
                    : "border-[#b3b3b3] border-b"
                } w-fit cursor-pointer`}
              >
                <div className="flex items-center gap-2 group relative overflow-hidden lg:w-[420px] w-[270px] h-[60px]">
                  <IoIosArrowRoundForward
                    size={32}
                    color={pathname === item.path ? "#ed2939" : "white"}
                    className={`-rotate-45 mb-1 absolute bottom-0 duration-700 ${
                      pathname !== item.path ? "group-hover:-bottom-12" : ""
                    }`}
                  />

                  <IoIosArrowRoundForward
                    size={32}
                    color={pathname === item.path ? "#ed2939" : "white"}
                    className={`-rotate-45 mb-1 absolute -bottom-12 duration-700 ${
                      pathname !== item.path ? "group-hover:bottom-0" : ""
                    }`}
                  />

                  <p
                    className={`lg:text-5xl text-3xl font-medium leading-[1] duration-700 absolute bottom-0 left-6 ${
                      pathname === item.path
                        ? "text-[#ed2939]"
                        : "text-white group-hover:-bottom-14"
                    }`}
                  >
                    {item.label}
                  </p>

                  <p
                    className={`lg:text-5xl text-3xl font-medium leading-[1] duration-700 absolute -bottom-14 left-6 ${
                      pathname === item.path
                        ? "text-[#ed2939]"
                        : "text-white group-hover:bottom-0"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  className="flex items-center gap-2 group relative overflow-hidden w-[120px] h-[24px]"
                >
                  <p className="text-sm text-white font-medium group-hover:-bottom-6 bottom-0 left-0 duration-700 absolute">
                    {s.name}
                  </p>
                  <p className="text-sm text-white font-medium absolute group-hover:bottom-0 -bottom-6 left-0 duration-700">
                    {s.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
