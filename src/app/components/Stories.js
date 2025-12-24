"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const CLOUD = "dyg5xx89p";

/**
 * Helpers for responsive Cloudinary URLs
 */
const img = (path, w) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${w}/${path}`;

const video = (path, w, br) =>
  `https://res.cloudinary.com/${CLOUD}/video/upload/f_auto,q_auto,w_${w},br_${br}/${path}`;

const poster = (path, w) =>
  `https://res.cloudinary.com/${CLOUD}/video/upload/so_0,f_jpg,q_auto,w_${w}/${path}`;

export const Stories = () => {
  const stories = [
    {
      left: img("v1757388797/asiana_kcqenq.png", 720),
      center: video("v1757388820/asiana_cocktail_znyog9.mp4", 720, "800k"),
      poster: poster("v1757388820/asiana_cocktail_znyog9.mp4", 720),
      right: img("v1757388790/asiana_right_d1hgd9.png", 720),
    },
    {
      left: img("v1757388800/bolorleft_picvzw.jpg", 720),
      center: video("v1757389031/bsb_delonghi_opc0rb.mp4", 720, "800k"),
      poster: poster("v1757389031/bsb_delonghi_opc0rb.mp4", 720),
      right: img("v1757388721/rightbsb_dsl1fy.png", 720),
    },
    {
      left: img("v1757388771/badrakh_left_2_vyroox.png", 720),
      center: video("v1757389387/Badrakh_codec_1_xenunk.mp4", 720, "800k"),
      poster: poster("v1757389387/Badrakh_codec_1_xenunk.mp4", 720),
      right: img("v1757388735/right_badrakh_rnto57.png", 720),
    },
    {
      left: img("v1757388759/left_s4dobt.png", 720),
      center: video("v1757389045/bsb_washing_machine_aasaqe.mp4", 720, "800k"),
      poster: poster("v1757389045/bsb_washing_machine_aasaqe.mp4", 720),
      right: img("v1757388783/badrakh_v1v23q.png", 720),
    },
    {
      left: img("v1757388747/left_higold_ezkj62.png", 720),
      center: video(
        "v1757389091/higold_reel_terelj_bosoo_dsiv8u.mp4",
        720,
        "800k"
      ),
      poster: poster("v1757389091/higold_reel_terelj_bosoo_dsiv8u.mp4", 720),
      right: img("v1757388766/higold_right_zwtbvs.png", 720),
    },
  ];

  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.6, 1] }
    );

    videoRefs.current.forEach((v) => v && observer.observe(v));

    // Mobile autoplay fallback
    const unlock = () => {
      videoRefs.current.forEach((v) => v?.paused && v.play().catch(() => {}));
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };

    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("scroll", unlock, { passive: true });

    return () => {
      videoRefs.current.forEach((v) => v && observer.unobserve(v));
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };
  }, []);

  return (
    <div className="px-4 lg:px-24 py-12 bg-[#222]">
      <h2 className="text-white text-4xl lg:text-6xl mb-12">VISUALS</h2>

      <div className="flex flex-col gap-14">
        {stories.map((s, i) => (
          <section
            key={i}
            className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8"
          >
            {/* LEFT IMAGE */}
            <div className="flex-1 w-full lg:w-1/4">
              <Image
                src={s.left}
                width={400}
                height={340}
                alt="left visual"
                className="w-full h-full object-cover rounded-lg"
                placeholder="blur"
                blurDataURL={s.left}
                priority={i === 0}
              />
            </div>

            {/* CENTER VIDEO */}
            <div className="flex-1 w-full lg:w-1/2 min-h-[220px]">
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={s.center}
                poster={s.poster}
                className="w-full h-full object-cover rounded-lg"
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 w-full lg:w-1/4 hidden lg:block">
              <Image
                src={s.right}
                width={400}
                height={340}
                alt="right visual"
                className="w-full h-full object-cover rounded-lg"
                placeholder="blur"
                blurDataURL={s.right}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
