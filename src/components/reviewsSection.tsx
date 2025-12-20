"use client";
import React, { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ACCENT = "#A66242";
const BG = "#F3F1EE";

// Static data for now (replace with your own later)
type Review = {
  id: string;
  name: string;
  monthsAgo: number;
  rating: number; // 1-5
  text: string;
  avatarType: "photo" | "letter";
  avatarText?: string; // "S"
  avatarUrl?: string;
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Sebastian",
    monthsAgo: 4,
    rating: 5,
    text:
      "Winkle & Master Imtiaz did an excellent job. They were able to accommodate my express request and complete everything within just 2 weeks. Professional, efficient, and very reliable. Highly recommend them if you want premium tailoring.",
    avatarType: "photo",
    avatarUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=70",
  },
  {
    id: "r2",
    name: "Shefali Alva",
    monthsAgo: 4,
    rating: 5,
    text:
      "Amazing service, amazing quality. Everything about Bespoke is just AMAZING. Bespoke has etched my heart with their beautiful work. Most definitely visiting bespoke again.",
    avatarType: "letter",
    avatarText: "S",
  },
  {
    id: "r3",
    name: "Jhanavi Gatty",
    monthsAgo: 4,
    rating: 5,
    text:
      "I recently approached the store to have a suit stitched, and they did an absolutely amazing job. The fit, quality, and attention to detail exceeded my expectations. Special thanks to Imtiaz and Winkle for their excellent service.",
    avatarType: "photo",
    avatarUrl:
      "https://images.unsplash.com/photo-1520975958225-27f04ddf1a55?auto=format&fit=crop&w=120&q=70",
  },
  {
    id: "r4",
    name: "Ramzi",
    monthsAgo: 6,
    rating: 5,
    text:
      "Tried my first set of shirts and the level of attention to details is impeccable. Customer service is perfect, from fabric advice to frequent updates, and the final fit is spot on.",
    avatarType: "letter",
    avatarText: "R",
  },
  {
    id: "r5",
    name: "Wadim Vergeles",
    monthsAgo: 6,
    rating: 5,
    text: "Very good service plus good quality of shirts. Reliable and fast.",
    avatarType: "letter",
    avatarText: "W",
  },
  {
    id: "r6",
    name: "Don Ali",
    monthsAgo: 7,
    rating: 5,
    text:
      "Amazing service from measuring, fitting to final product. I'm very pleased with the shirt they've tailored. 100% recommend.",
    avatarType: "letter",
    avatarText: "D",
  },
];

export default function ReviewsSection() {
  // Responsive: 1 card on mobile, 3 on desktop
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth < 1024 ? 1 : 3);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // create "pages" by sliding one card at a time
  const maxIndex = Math.max(0, REVIEWS.length - cardsPerPage);

  const [index, setIndex] = useState(0);

  const visible = useMemo(() => {
    return REVIEWS.slice(index, index + cardsPerPage);
  }, [index, cardsPerPage]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const prev = () => {
    if (!canPrev || isAnimating) return;
    setIsAnimating(true);
    setIndex((p) => Math.max(0, p - 1));
    setTimeout(() => setIsAnimating(false), 400);
  };
  
  const next = () => {
    if (!canNext || isAnimating) return;
    setIsAnimating(true);
    setIndex((p) => Math.min(maxIndex, p + 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  // left panel static stats like screenshot
  const overallRating = 4.9;
  const totalReviews = 330;

  // dots: show 15 like screenshot, highlight based on normalized index
  const dotsCount = 15;
  const activeDot = maxIndex === 0 ? 0 : Math.round((index / maxIndex) * (dotsCount - 1));

  return (
    <section style={{ background: BG }} className="w-full py-20">
      <div className="mx-auto max-w-[1400px] px-10">
        <h2
          className="text-center font-serif text-[44px] tracking-wide"
          style={{ color: ACCENT }}
        >
          CLIENT GOOGLE REVIEWS
        </h2>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-[380px_1fr]">
          {/* LEFT SUMMARY */}
          <div className="pt-14 text-center lg:text-left">
            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <p className="text-[22px] font-semibold text-[#2E5DE6]">Excellent</p>

              <p className="text-[26px] font-semibold text-[#6B4A2F]">
                Bespoke Tailors
              </p>

              <div className="flex items-center gap-3">
                <p className="text-[28px] font-semibold text-[#C0743C]">
                  {overallRating.toFixed(1)}
                </p>
                <Stars rating={overallRating} />
              </div>

              <p className="text-[16px] text-black/60">
                Based on {totalReviews}{" "}
                <span className="inline-flex items-center gap-1">
                  <GoogleG />
                  reviews
                </span>
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <button className="rounded-full bg-[#2E5DE6] px-5 py-2 text-[14px] font-semibold text-white shadow-sm">
                  See all reviews
                </button>

                <button className="rounded-full bg-[#2E5DE6] px-5 py-2 text-[14px] font-semibold text-white shadow-sm">
                  review us on{" "}
                  <span className="inline-flex items-center">
                    <GoogleG />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative">
            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              disabled={!canPrev}
              className={[
                "absolute left-[-20px] lg:left-[-34px] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center",
                "rounded-full bg-white shadow-md text-black/60 hover:text-black/90 hover:shadow-lg transition-all",
                !canPrev ? "opacity-40 cursor-not-allowed" : "opacity-100",
              ].join(" ")}
              aria-label="Previous"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className={[
                "absolute right-[-20px] lg:right-[-34px] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center",
                "rounded-full bg-white shadow-md text-black/60 hover:text-black/90 hover:shadow-lg transition-all",
                !canNext ? "opacity-40 cursor-not-allowed" : "opacity-100",
              ].join(" ")}
              aria-label="Next"
            >
              <ChevronRight size={26} />
            </button>

            <div className="overflow-hidden">
              <div 
                className="grid grid-cols-1 gap-10 lg:grid-cols-3 transition-all duration-400 ease-in-out"
                style={{
                  transform: isAnimating ? 'translateX(-20px)' : 'translateX(0)',
                  opacity: isAnimating ? 0.5 : 1,
                }}
              >
                {visible.map((r) => (
                  <ReviewCard key={r.id} r={r} />
                ))}
              </div>
            </div>

            {/* Dots row */}
            <div className="mt-10 flex justify-center gap-3">
              {Array.from({ length: dotsCount }).map((_, i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full"
                  style={{
                    background:
                      i === activeDot ? ACCENT : "rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <Avatar r={r} />
          <div>
            <p className="text-[18px] font-semibold text-[#8B5A3C]">
              {r.name}
            </p>
            <p className="mt-1 text-[14px] text-black/55">
              {r.monthsAgo} months ago
            </p>
          </div>
        </div>

        <div className="pt-1">
          <GoogleGSmall />
        </div>
      </div>

      <div className="mt-5">
        <Stars rating={r.rating} />
      </div>

      <div className="mt-4 max-h-[185px] overflow-auto pr-2 text-[18px] leading-[1.65] text-black/75">
        {r.text}
      </div>
    </div>
  );
}

function Avatar({ r }: { r: Review }) {
  if (r.avatarType === "photo" && r.avatarUrl) {
    return (
      <img
        src={r.avatarUrl}
        alt={r.name}
        className="h-12 w-12 rounded-full object-cover"
        draggable={false}
      />
    );
  }

  const letter = (r.avatarText || r.name?.[0] || "U").toUpperCase();

  // a couple of nice "Google-like" avatar colors
  const colors = ["#C65B3D", "#6C4BB6", "#D64C77", "#2A7F77", "#8B5A3C"];
  const c = colors[(letter.charCodeAt(0) + r.name.length) % colors.length];

  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-full text-[18px] font-semibold text-white"
      style={{ background: c }}
    >
      {letter}
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const isHalf = !filled && half && i === full;

        return (
          <StarIcon key={i} filled={filled} half={isHalf} />
        );
      })}
    </div>
  );
}

function StarIcon({ filled, half }: { filled: boolean; half: boolean }) {
  // simple star using CSS clip-path look (no SVG libs)
  // for half star: overlay half filled
  return (
    <div className="relative h-6 w-6">
      <div
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(50% 0%, 63% 34%, 98% 38%, 72% 60%, 80% 95%, 50% 76%, 20% 95%, 28% 60%, 2% 38%, 37% 34%)",
          background: "rgba(192,116,60,0.25)",
        }}
      />
      {(filled || half) && (
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(50% 0%, 63% 34%, 98% 38%, 72% 60%, 80% 95%, 50% 76%, 20% 95%, 28% 60%, 2% 38%, 37% 34%)",
            background: "#C0743C",
            width: half ? "50%" : "100%",
            overflow: "hidden",
          }}
        />
      )}
    </div>
  );
}

function GoogleG() {
  // tiny "G" dot icon like screenshot
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white">
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="#FFC107"
          d="M43.611 20.083H42V20H24v8h11.303C33.651 32.659 29.194 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.263 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
        />
        <path
          fill="#FF3D00"
          d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.263 4 24 4c-7.682 0-14.344 4.337-17.694 10.691z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.092 0 9.797-1.95 13.313-5.131l-6.143-5.205C29.113 35.517 26.715 36 24 36c-5.173 0-9.62-3.317-11.284-7.946l-6.52 5.02C9.503 39.556 16.227 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.611 20.083H42V20H24v8h11.303a12.03 12.03 0 0 1-4.133 5.664l.003-.002 6.143 5.205C36.88 39.259 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
        />
      </svg>
    </span>
  );
}

function GoogleGSmall() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="#FFC107"
          d="M43.611 20.083H42V20H24v8h11.303C33.651 32.659 29.194 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.263 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
        />
        <path
          fill="#FF3D00"
          d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.263 4 24 4c-7.682 0-14.344 4.337-17.694 10.691z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.092 0 9.797-1.95 13.313-5.131l-6.143-5.205C29.113 35.517 26.715 36 24 36c-5.173 0-9.62-3.317-11.284-7.946l-6.52 5.02C9.503 39.556 16.227 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.611 20.083H42V20H24v8h11.303a12.03 12.03 0 0 1-4.133 5.664l.003-.002 6.143 5.205C36.88 39.259 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
        />
      </svg>
    </span>
  );
}