"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Stories = () => {
  const stories = [
    {
      left: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388797/asiana_kcqenq.png",
      center:
        "https://res.cloudinary.com/dyg5xx89p/video/upload/f_auto,q_auto,w_800/v1757388820/asiana_cocktail_znyog9.mp4",
      right:
        "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388790/asiana_right_d1hgd9.png",
    },
    {
      left: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388800/bolorleft_picvzw.jpg",
      center:
        "https://res.cloudinary.com/dyg5xx89p/video/upload/f_auto,q_auto,w_800/v1757389031/bsb_delonghi_opc0rb.mp4",
      right:
        "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388721/rightbsb_dsl1fy.png",
    },
    {
      left: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388771/badrakh_left_2_vyroox.png",
      center:
        "https://res.cloudinary.com/dyg5xx89p/video/upload/f_auto,q_auto,w_800/v1757389387/Badrakh_codec_1_xenunk.mp4",
      right:
        "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388735/right_badrakh_rnto57.png",
    },
    {
      left: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388759/left_s4dobt.png",
      center:
        "https://res.cloudinary.com/dyg5xx89p/video/upload/f_auto,q_auto,w_800/v1757389045/bsb_washing_machine_aasaqe.mp4",
      right:
        "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388783/badrakh_v1v23q.png",
    },
    {
      left: "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388747/left_higold_ezkj62.png",
      center:
        "https://res.cloudinary.com/dyg5xx89p/video/upload/f_auto,q_auto,w_800/v1757389091/higold_reel_terelj_bosoo_dsiv8u.mp4",
      right:
        "https://res.cloudinary.com/dyg5xx89p/image/upload/f_auto,q_auto,w_800/v1757388766/higold_right_zwtbvs.png",
    },
  ];

  const videoRefs = useRef([]);

  useEffect(() => {
    // Preload left and right images
    stories.forEach((story) => {
      new window.Image().src = story.left;
      new window.Image().src = story.right;
    });

    // Intersection Observer to control video playback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    // Observe all videos
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Attempt to auto-play first video immediately
    if (videoRefs.current[0]) {
      videoRefs.current[0].play().catch(() => {});
    }

    // Fallback for mobile: trigger play on first user interaction
    const handleUserInteraction = () => {
      videoRefs.current.forEach((video) => {
        if (video?.paused) {
          video.play().catch(() => {});
        }
      });

      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };

    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("scroll", handleUserInteraction, { passive: true });

    // Cleanup
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  return (
    <div className="h-fit px-4 lg:px-24 py-12 bg-[#222]">
      <h2 className="text-white text-4xl lg:text-6xl mb-12">VISUALS</h2>

      <div className="flex flex-col gap-12">
        {stories.map((story, idx) => (
          <section
            key={idx}
            className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full overflow-hidden"
          >
            {/* Left Image */}
            <div className="flex-1 w-full lg:w-1/4">
              <Image
                src={story.left}
                width={400}
                height={340}
                alt="left visual"
                className="w-full h-full object-cover rounded-lg"
                quality={85}
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>

            {/* Center Video */}
            <div className="flex-1 w-full lg:w-1/2 min-h-[200px]">
              <video
                ref={(el) => {
                  if (el) videoRefs.current[idx] = el;
                }}
                src={story.center}
                className="w-full h-full object-cover rounded-lg border-none shadow-none"
                muted
                loop
                autoPlay
                playsInline
                preload="none"
              />
            </div>

            {/* Right Image (only on large screens) */}
            <div className="flex-1 w-full lg:w-1/4 hidden lg:block">
              <Image
                src={story.right}
                width={400}
                height={340}
                alt="right visual"
                className="w-full h-full object-cover rounded-lg"
                quality={85}
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
