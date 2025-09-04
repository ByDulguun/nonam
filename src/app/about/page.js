"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import CountUp from "react-countup";

const Page = () => {
  const router = useRouter();
  return (
    <div className="pb-24 w-full overflow-x-hidden">
      <div className="grid gap-6">
        <div className="grid gap-1 text-center pt-32 lg:pt-4 ">
          <div className="lg:flex m-auto gap-2">
            <p className="text-white text-5xl lg:text-8xl ">OUR </p>
            <p className="text-white text-5xl lg:text-8xl ">TEAM</p>
          </div>
          <div className="lg:flex w-fit gap-2 m-auto text-center">
            <p className="text-white text-5xl lg:text-8xl  textFont flex justify-center">
              Members
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100vw] lg:overflow-x-hidden   overflow-x-hidden my-24 flex justify-center">
        <div className="lg:flex  gap-20 py-10 lg:scrolling-text1 scrolling-text1 lg:mx-0 mx-24 lg:gap-6 grid h-fit ">
          {Array.from({ length: 9 }).map((_, index) => (
            <Image
              key={index}
              src={`/about/image${index + 1}.png`}
              className={`${
                index % 2 === 0 ? "lg:skew-y-12" : "lg:-skew-y-12"
              }`}
              width={300}
              height={400}
              quality={100}
              alt={index}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-start justify-center lg:justify-around pb-24">
        <div className="grid gap-3">
          <div className="flex gap-2 items-center">
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
          <div className="flex gap-2 items-center">
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
          <div className="flex gap-2 items-center">
            <p className="text-[#b2b2b2] text-xl lg:text-9xl">+</p>
            <CountUp
              end={7}
              duration={4}
              enableScrollSpy
              scrollSpyOnce
              className="text-white font-medium text-4xl lg:text-9xl"
            />
          </div>
          <p className="text-[#b2b2b2] text-sm max-w-[100px] lg:max-w-[300px] lg:text-xl">
            Years of Agency Experience
          </p>
        </div>
      </div>

      <div className="flex w-fit gap-2 px-6 pt-24 lg:grid lg:px-24">
        <div className="lg:flex w-fit gap-2 grid">
          <p className="text-white text-4xl lg:text-8xl ">ТҮГЭЭМЭЛ </p>
          <p className="text-white text-4xl lg:text-8xl  textFont m-auto">
            Асуултууд
          </p>
        </div>
      </div>
      <div className="py-8 grid gap-1 lg:flex relative px-4  lg:px-24 items-center">
        <div className="bg-[#222] grid h-fit gap-1 p-10 lg:flex-1  ">
          <div className=" w-10 h-10 textFont text-2xl">01</div>
          <p className="text-white w-40 font-medium text-xl">
            FB, Instagram гэх мэт платформ хөгжүүлэх хугацаа?
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Хагас жил болон түүнээс дээш хугацаагаар хамтран ажиллах гэрээ
            хийдэг. Энэ нь брэндийн танигдах байдлын хэмжих боломжит хугацаа юм.
          </p>
        </div>
        <div className="bg-[#222] grid h-fit gap-1 p-10 lg:flex-1">
          <div className=" w-10 h-10 textFont text-2xl">02</div>
          <p className="text-white w-40 font-medium text-xl">
            Бүүстийн зардал орсон уу?
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Захиалагч тус бүрийн жилийн төсвөөс хамаардаг ажил тул, бүүстийн
            зардал багтаагүй болно.
          </p>
        </div>
        <div className="bg-[#222] grid h-fit gap-1 p-10 lg:flex-1">
          <div className=" w-10 h-10 textFont text-2xl">03</div>
          <p className="text-white w-40 font-medium text-xl">
            Олны танил, инфлүэнсэрүүдтэй хамтарч ажилладаг уу?
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Тийм, хамтран ажиллах үнийн дүнг нь Захиалагч тал хариуцна. Бид
            ажлын хариуцлагад нь хяналт хийн, удирдаж ажиллана.
          </p>
        </div>
        <div className="bg-[#222] grid h-fit gap-1 p-10 lg:flex-1">
          <div className=" w-10 h-10 textFont text-2xl">04</div>
          <p className="text-white w-40 font-medium text-xl">
            ROMI хэрхэн тооцох вэ?
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Манай агентлаг нь борлуулалтын чиглэлээр үйл ажиллагаа явуулдаггүй
            тул ROMI тооцдоггүй. Гэхдээ шаардлагатай тохиолдолд тооцох ажил дээр
            хамтран ажиллах боломжтой.
          </p>
        </div>
        <div className="bg-[#222] grid h-fit gap-1 p-10 lg:flex-1">
          <div className=" w-10 h-10 textFont text-2xl">05</div>
          <p className="text-white w-40 font-medium text-xl">
            Лангууны тохижилт хийдэг үү?
          </p>
          <p className="text-[#b2b2b2] w-40 text-[12px]">
            Хийнэ. Бид Таванбогд, МСД, Алтан жолоо, MCS гэх мэт олон компанитай
            хамтран ажилласан туршлагатай.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
