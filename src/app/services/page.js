"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  {
    id: 1,
    image: "/image1.webp",
    description:
      "Таны бизнест тохирох Facebook, Instagram, TikTok, LinkedIn зэрэг гол платформууд дээр оновчтой хөгжүүлэлт хийнэ.",
    title: "СОШИАЛ МЕДИА ПЛАТФОРМ ХӨГЖҮҮЛЭЛТ",
    list: [
      "Платформ тус бүрт тохирсон бүтээлч ажил төлөвлөх, зохиох",
      "Дизайн, видео, рийл, анимейшн зэрэг дүрслэлтэй контент бүтээх",
      "Тогтмол постлох төлөвлөгөө гарган, хуудас идэвхжүүлэх",
      "Олон улсад хэрэглэгдэж буй арга техникийн дагуу бүүст хийнэ",
    ],
  },
  {
    id: 2,
    image: "/image2.webp",
    description:
      "Бид таны брэндийг хэрэглэгчдэд танилцуулахад шаардлагатай бүх төрлийн хэвлэл, эх бэлтгэл, дизайн, дотоод тохижилт, in-store marketing шийдлүүдийг нэг цэгээс цогцоор нь үзүүлнэ. POSM материал, лангууны дизайн, постер, баннер зэрэг сурталчилгааны хэрэгслийг мэргэжлийн өндөр түвшинд бүтээж, таны борлуулалт, брэндийн нэр хүндийг өсгөнө.",
    title: "POSM ҮЙЛЧИЛГЭЭ, IN-STORE MARKETING",
  },
  {
    id: 3,
    image: "/image3.webp",
    description:
      "Олон нийтэд чиглэсэн, өргөн хүрээтэй сурталчилгааны сувгуудыг ашиглан брэндийн танигдсан байдлыг нэмэгдүүлэх урт болон богино хугацаат кампанит ажил хийнэ.",
    title: "ATL (ABOVE THE LINE ) MARKETING",
    list: [
      "Телевизийн сурталчилгаа – Рекламны санаа зохиол дээр ажиллана, студитэй хамтарч ажиллана.",
      "Радио сурталчилгаа – Текст, эх бичвэрийг санаа зохиол дээр ажиллана, захиалга өгнө, хянана.",
      "Сонин, сэтгүүлд сурталчилгаа – Брэндийнг мэдээ, мессеж түгээх нийтлэл бичнэ, захиалга өгнө, хянана.",
      ,
      "OOH (Out Of Home) – Billboard, LED дэлгэц, барилгын эх бэлтгэл, хэвлэлт, тогтоолт.",
      ,
      "Кино театрын зар сурталчилгаа – Кино үзэж буй үзэгчдэд чиглэсэн сурталчилгаа",
      "Брендинг материалууд – Сав баглаа боодол, бүтээгдэхүүний шошго, каталог, хэвлэмэл материалууд",
    ],
  },
  {
    id: 4,
    image: "/image4.webp",
    description:
      " Олон нийтэд чиглэсэн, өргөн хүрээтэй сурталчилгааны сувгуудыг ашиглан брэндийн танигдсан байдлыг нэмэгдүүлэх урт болон богино хугацаат кампанит ажил хийнэ.",
    title: "СУРГАЛТ, ЗӨВЛӨГӨӨ",
    list: [
      "Байгууллага болон хувиараа бизнес эрхлэгчид брэндийнхээ сошиал орчныг системтэй удирдах мэдлэгтэй болно",
      "Контент бүтээх, зар сурталчилгаа удирдах чадвар эзэмшинэ",
      "Өөрийн брэндийг зорилтот хэрэглэгчиддээ илүү үр дүнтэй хүргэх чадвартай болно",
      "Facebook, Instagram, TikTok, LinkedIn зар сурталчилгааны бүтцийн талаарх ойлголт",
      "FOMO болон сэтгэлзүйн нөлөөллийг ашиглах арга техникт суралцана.",
    ],
  },
];

const Page = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      {/* Title */}
      <div className="py-24 grid gap-4">
        <div className="grid gap-1 justify-center ">
          <div className="flex gap-2">
            <p className="text-white text-5xl lg:text-8xl">SERVICES</p>
            <p className="text-white text-5xl lg:text-8xl textFont">We</p>
          </div>
          <p className="text-white text-5xl lg:text-8xl m-auto">OFFER</p>
        </div>
      </div>

      {/* Dropdown List */}
      <div className="py-24 lg:px-60 relative">
        {services.map((service) => (
          <div
            onClick={() => toggle(service.id)}
            key={service.id}
            className={`relative grid group border-gray-100 border-b py-8 mx-6 overflow-hidden cursor-pointer transition-all ${
              openId === service.id ? "max-h-[760px]" : "max-h-[100px]"
            } duration-700`}
          >
            <div className="flex justify-between items-center">
              <p className="text-[#b2b2b2] font-semibold">0{service.id}</p>
              <p className="text-white lg:text-xl text-sm text-center">
                {service.title}
              </p>
              <IoIosArrowRoundForward
                size={26}
                color="#b2b2b2"
                className={`${
                  openId === service.id ? "-rotate-90" : "rotate-90"
                } duration-700`}
              />
            </div>
            {openId === service.id && (
              <div className="text-[#b2b2b2] px-8 py-16 h-fit space-y-4">
                <p>{service.description}</p>
                {service.list && (
                  <ul className="list-disc pl-5 space-y-2">
                    {service.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
