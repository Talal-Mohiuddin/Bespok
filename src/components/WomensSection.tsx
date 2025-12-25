"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type CardItem = { title: string; image: string, link: string };

export default function MensSuitsSection() {
  const items: CardItem[] = useMemo(
    () => [
      {
        title: "Business Suits",
        image: "/wbusinesssuit.jpg",
        link: "/bespoke-business-suit",
      },
      {
        title: "Power Suits",
        image: "/wpowersuit.jpg",
        link: "/bespoke-power-suit",
      },
      { title: "Gala Suits", image: "/gall.jpg", link: "/bespoke-gala-suit" },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  // Detect screen size
  useEffect(() => {
    const update = () => {
      const next = window.innerWidth >= 1024 ? 3 : 1;
      setItemsToShow(next);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  // IMPORTANT: prevent "cut card" by clamping index when itemsToShow changes
  useEffect(() => {
    const maxIndex = Math.max(0, items.length - itemsToShow);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [items.length, itemsToShow, currentIndex]);

  const gapPx = 32; // 2rem (matches your previous)
  const goToPrevious = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((p) => p - 1);
    window.setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    const maxIndex = Math.max(0, items.length - itemsToShow);
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((p) => p + 1);
    window.setTimeout(() => setIsAnimating(false), 500);
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= Math.max(0, items.length - itemsToShow);

  // FIX: translate by "card width + gap" using a real percentage formula
  // Card width = (100% - (itemsToShow-1)*gap) / itemsToShow
  const translateStyle =
    itemsToShow === 1
      ? { transform: `translateX(-${currentIndex * 100}%)`, gap: "0px" }
      : {
          gap: `${gapPx}px`,
          transform: `translateX(calc(-${currentIndex} * ((100% - ${
            (itemsToShow - 1) * gapPx
          }px) / ${itemsToShow} + ${gapPx}px)))`,
        };

  // Card width matches the same formula, so the first visible card never gets cut
  const cardWidthStyle =
    itemsToShow === 1
      ? { width: "100%" }
      : {
          width: `calc((100% - ${(itemsToShow - 1) * gapPx}px) / ${itemsToShow})`,
        };

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
        <h2 className="mb-12 font-serif text-5xl text-white">
          Women&apos;s Suits
        </h2>

        <div className="relative">
          <button
            onClick={goToPrevious}
            disabled={isAnimating || isAtStart}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 text-white transition-all hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 lg:left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8 stroke-[2.5]" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={translateStyle}
            >
              {items.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="group relative h-[650px] flex-shrink-0 overflow-hidden rounded-lg "
                  style={cardWidthStyle}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />

                  <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black via-black/80 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-8">
                    <h3 className="mb-4 font-serif text-2xl text-white ">
                      {item.title}
                    </h3>
                    <a
                      href={item.link}
                      className="bg-[#A66242] hover:bg-[#532f26] inline-flex h-11 items-center justify-center rounded-md  px-9 font-serif text-base tracking-wider text-white transition-all hover:shadow-lg hover:shadow-[#A66242]/30  lg:text-lg"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            disabled={isAnimating || isAtEnd}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 text-white transition-all hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 lg:right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
