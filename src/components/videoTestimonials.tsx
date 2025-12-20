"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const ACCENT = "#A66242";
const AUTOPLAY_INTERVAL = 10000;
const TRANSITION_MS = 700;

// Replace with your real YouTube video IDs
const VIDEO_IDS = ["9bZkp7q19f0", "l482T0yNkeo", "OPf0YbXqDm0", "OPf0YbXqDm0", "OPf0YbXqDm0"];

// Card sizing
const CARD_WIDTH_DESKTOP = 420;
const CARD_WIDTH_MOBILE = 340;
const GAP = 40;
const VISIBLE_CARDS_DESKTOP = 3;
const VISIBLE_CARDS_MOBILE = 1;

// Arrow positioning (closer to video like screenshot)
const ARROW_OFFSET_DESKTOP = 18; // px from edge of viewport
const ARROW_OFFSET_MOBILE = 10;

export default function VideoTestimonials() {
  const loopVideos = useMemo(() => [...VIDEO_IDS, ...VIDEO_IDS], []);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const CARD_WIDTH = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
  const VISIBLE_CARDS = isMobile ? VISIBLE_CARDS_MOBILE : VISIBLE_CARDS_DESKTOP;

  // IMPORTANT: limit index so we never translate beyond available rendered cards in the loop list
  const maxIndex = loopVideos.length - VISIBLE_CARDS;
  const safeIndex = Math.min(index, Math.max(0, maxIndex));

  useEffect(() => {
    if (safeIndex !== index) setIndex(safeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex, VISIBLE_CARDS]);

  const startAuto = () => {
    stopAuto();
    timerRef.current = window.setInterval(() => {
      setAnimate(true);
      setIndex((p) => p + 1);
    }, AUTOPLAY_INTERVAL);
  };

  const stopAuto = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Seamless infinite loop reset (only when we reach the first copy end)
  useEffect(() => {
    if (index === VIDEO_IDS.length) {
      const t = window.setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, TRANSITION_MS);
      return () => window.clearTimeout(t);
    }
  }, [index]);

  useEffect(() => {
    if (!animate) {
      const t = window.setTimeout(() => setAnimate(true), 20);
      return () => window.clearTimeout(t);
    }
  }, [animate]);

  const prev = () => {
    stopAuto();
    if (index === 0) {
      setAnimate(false);
      setIndex(VIDEO_IDS.length);
      setTimeout(() => {
        setAnimate(true);
        setIndex(VIDEO_IDS.length - 1);
        startAuto();
      }, 20);
      return;
    }
    setAnimate(true);
    setIndex((p) => Math.max(0, p - 1));
    startAuto();
  };

  const next = () => {
    stopAuto();
    setAnimate(true);
    setIndex((p) => p + 1);
    startAuto();
  };

  const activeDot = ((index % VIDEO_IDS.length) + VIDEO_IDS.length) % VIDEO_IDS.length;

  const viewportWidth =
    VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * (isMobile ? 0 : GAP);

  const step = CARD_WIDTH + (isMobile ? 0 : GAP);
  const translateX = safeIndex * step;

  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-10">
          <h2
            className="text-center font-serif text-[32px] sm:text-[44px] tracking-wide"
            style={{ color: ACCENT }}
          >
            VIDEO TESTIMONIALS
          </h2>

          <p className="mt-4 text-center font-serif text-[18px] sm:text-[22px] text-black/70">
            Our clients love working with us, just Watch what they have to say!
          </p>

          <div className="relative mt-16">
            {/* Viewport wrapper so arrows can sit CLOSE to video on both desktop and mobile */}
            <div className="relative mx-auto" style={{ width: viewportWidth }}>
              {/* Left arrow (desktop + mobile, positioned near video edge) */}
              <button
                type="button"
                onClick={prev}
                className="absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm transition hover:bg-white"
                style={{
                  left: isMobile ? -ARROW_OFFSET_MOBILE : -ARROW_OFFSET_DESKTOP,
                  color: ACCENT,
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={30} />
              </button>

              {/* Right arrow */}
              <button
                type="button"
                onClick={next}
                className="absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm transition hover:bg-white"
                style={{
                  right: isMobile ? -ARROW_OFFSET_MOBILE : -ARROW_OFFSET_DESKTOP,
                  color: ACCENT,
                }}
                aria-label="Next"
              >
                <ChevronRight size={30} />
              </button>

              {/* Actual viewport */}
              <div
                className="overflow-hidden"
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
              >
                <div
                  className={[
                    "flex",
                    isMobile ? "gap-0" : "gap-10",
                    animate ? "transition-transform duration-700 ease-in-out" : "",
                  ].join(" ")}
                  style={{
                    transform: `translateX(-${translateX}px)`,
                  }}
                >
                  {loopVideos.map((videoId, i) => (
                    <VideoCard
                      key={`${videoId}-${i}`}
                      videoId={videoId}
                      isMobile={isMobile}
                      onClick={() => setSelectedVideo(videoId)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-12 flex justify-center gap-4">
              {VIDEO_IDS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setAnimate(true);
                    setIndex(i);
                  }}
                  className="h-3 w-3 rounded-full transition-all"
                  style={{
                    backgroundColor: activeDot === i ? ACCENT : "rgba(0,0,0,0.15)",
                  }}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="Video testimonial"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function VideoCard({
  videoId,
  isMobile,
  onClick,
}: {
  videoId: string;
  isMobile: boolean;
  onClick: () => void;
}) {
  const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
  const cardHeight = isMobile ? 210 : 260;

  // Some videos do not have maxresdefault.jpg, which causes “blank” thumbnails.
  // Fix: fallback to hqdefault if maxres fails.
  const [thumb, setThumb] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  useEffect(() => {
    setThumb(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  }, [videoId]);

  return (
    <div
      className="group relative shrink-0 cursor-pointer overflow-hidden bg-black"
      style={{ width: cardWidth, height: cardHeight }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      aria-label="Play testimonial video"
    >
      <img
        src={thumb}
        alt="Video thumbnail"
        className="h-full w-full object-cover"
        onError={() => setThumb(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)}
        draggable={false}
      />

      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/30">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110"
          style={{ backgroundColor: ACCENT }}
        >
          <Play className="ml-1 h-8 w-8 text-white" fill="white" />
        </div>
      </div>
    </div>
  );
}
