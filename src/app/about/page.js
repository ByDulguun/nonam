"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import CountUp from "react-countup";

const Page = () => {
  const mockTeamMembers = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757389488/tulgaa-1-copy_0005_MARGAD--GRAPHIC-DESIGNER-copy_ezskxw.png",
      alt: "Team Member 1",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757389491/tulgaa-1-copy_0002_onon--TEAM-LEADER--copy_tovvag.png",
      alt: "Team Member 2",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757389492/tulgaa-1-copy_0008_NOMIN--COO-copy_lnwkoj.png",
      alt: "Team Member 3",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757389497/tulgaa-1-copy_0000_NARHAN--VIDEO-ASSISTANT-copy_al8efi.png",
      alt: "Team Member 5",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757389498/tulgaa-1-copy_0004_boloroo--CONTENT-CREATOR--copy_jo0u2n.png",
      alt: "Team Member 7",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757389504/tulgaa-1-copy_0007_-TULGA--VISUAL-IDENTITY_wg2qkf.png",
      alt: "Team Member 8",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dyg5xx89p/image/upload/v1757389505/tulgaa-1-copy_0001_TSOLMON--DIGITAL-ARTIST--copy_r05yts.png",
      alt: "Team Member 9",
    },
  ];

  const optimizedMembers = mockTeamMembers.map((m) => ({
    ...m,
    src: m.src.replace("/upload/", "/upload/f_auto,q_auto/"),
  }));

  const marqueeMembers = [
    ...optimizedMembers,
    ...optimizedMembers,
    ...optimizedMembers,
  ];

  const containerRef = useRef(null);
  const [x, setX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      setX((prev) => {
        const next = prev - delta * 0.05; // хурд
        const width = marqueeMembers.length * 320;
        return next <= -width / 3 ? 0 : next;
      });
    }
  });

  const totalWidth = marqueeMembers.length * 320;

  return (
    <div className="pb-24 w-full overflow-x-hidden">
      {/* Header */}
      <div className="grid gap-6">
        <div className="grid gap-1 text-center pt-14 lg:pt-4">
          <div className="lg:flex m-auto gap-2">
            <p className="text-white text-5xl lg:text-8xl">OUR</p>
            <p className="text-white text-5xl lg:text-8xl">TEAM</p>
          </div>
          <div className="lg:flex w-fit gap-2 m-auto text-center">
            <p className="text-white text-5xl lg:text-8xl textFont flex justify-center">
              Members
            </p>
          </div>
        </div>
      </div>

      {/* ✅ FIXED: Manual + Auto Scroll Hybrid */}
      <div className="w-full overflow-hidden my-20 flex justify-center">
        <motion.div
          ref={containerRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -totalWidth / 3, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          style={{ x }}
        >
          {marqueeMembers.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className={`flex-shrink-0 w-[250px] h-[300px] lg:w-[300px] lg:h-[400px] ${
                index % 2 === 0 ? "lg:skew-y-12" : "lg:-skew-y-12"
              }`}
            >
              <Image
                src={member.src.replace(
                  "/upload/",
                  "/upload/f_auto,q_auto,w_300/"
                )}
                alt={member.alt}
                width={300}
                height={400}
                quality={90}
                className="w-full h-full object-contain rounded-xl select-none pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 items-start justify-center lg:justify-around pb-12">
        <div className="grid gap-3">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-[#b2b2b2] text-xl lg:text-9xl">+</p>
            <CountUp
              end={15}
              duration={4}
              enableScrollSpy
              scrollSpyOnce
              className="text-white font-medium text-4xl lg:text-9xl"
            />
          </div>
          <p className="text-[#b2b2b2] text-sm max-w-[100px] text-center lg:max-w-[300px] lg:text-xl">
            Years of Marketing Industry Experience
          </p>
        </div>

        <div className="grid gap-3">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-[#b2b2b2] text-xl lg:text-9xl">+</p>
            <CountUp
              end={70}
              duration={4}
              enableScrollSpy
              scrollSpyOnce
              className="text-white font-medium text-4xl lg:text-9xl"
            />
          </div>
          <p className="text-[#b2b2b2] text-sm max-w-[100px] text-center lg:max-w-[300px] lg:text-xl">
            International and Domestic Clients
          </p>
        </div>

        <div className="grid gap-3">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-[#b2b2b2] text-xl lg:text-9xl">+</p>
            <CountUp
              end={7}
              duration={4}
              enableScrollSpy
              scrollSpyOnce
              className="text-white font-medium text-4xl lg:text-9xl"
            />
          </div>
          <p className="text-[#b2b2b2] text-sm max-w-[100px] text-center lg:max-w-[300px] lg:text-xl">
            Years of Agency Experience
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="flex w-fit gap-2 px-6 pt-24 lg:grid lg:px-24">
        <div className="lg:flex w-fit gap-2 grid">
          <p className="text-white text-4xl lg:text-8xl">ТҮГЭЭМЭЛ</p>
          <p className="text-white text-4xl lg:text-8xl textFont m-auto">
            Асуултууд
          </p>
        </div>
      </div>

      <div className="py-8 grid gap-1 lg:flex relative px-4 lg:px-24 items-center">
        {[
          {
            q: "FB, Instagram гэх мэт платформ хөгжүүлэх хугацаа?",
            a: "Хагас жил болон түүнээс дээш хугацаагаар хамтран ажиллах гэрээ хийдэг. Энэ нь брэндийн танигдах байдлын хэмжих боломжит хугацаа юм.",
          },
          {
            q: "Бүүстийн зардал орсон уу?",
            a: "Захиалагч тус бүрийн жилийн төсвөөс хамаардаг ажил тул, бүүстийн зардал багтаагүй болно.",
          },
          {
            q: "Олны танил, инфлүэнсэрүүдтэй хамтарч ажилладаг уу?",
            a: "Тийм, хамтран ажиллах үнийн дүнг нь Захиалагч тал хариуцна. Бид ажлын хариуцлагад нь хяналт хийн, удирдаж ажиллана.",
          },
          {
            q: "ROMI хэрхэн тооцох вэ?",
            a: "Манай агентлаг нь борлуулалтын чиглэлээр үйл ажиллагаа явуулдаггүй тул ROMI тооцдоггүй. Гэхдээ шаардлагатай тохиолдолд тооцох ажил дээр хамтран ажиллах боломжтой.",
          },
          {
            q: "Лангууны тохижилт хийдэг үү?",
            a: "Хийнэ. Бид Таванбогд, МСД, Алтан жолоо, MCS гэх мэт олон компанитай хамтран ажилласан туршлагатай.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-[#222] grid h-fit gap-1 p-10 lg:flex-1">
            <div className="w-10 h-10 textFont text-4xl">
              {String(i + 1).padStart(2, "0")}
            </div>
            <p className="text-white font-medium text-2xl">{item.q}</p>
            <p className="text-[#b2b2b2] text-md">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
