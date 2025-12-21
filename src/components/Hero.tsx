"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MobileNav } from "./Navcontent";

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/herobg.png"
            alt="Luxury bespoke tailoring"
            className="h-full w-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
          {/* Headline */}
          <h1 className="mb-8 mt-[28rem] max-w-5xl text-center font-serif text-4xl leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="italic">
              A Heritage of Craft. A Future in True Bespoke.
            </span>
          </h1>

          {/* Call-to-Action Buttons */}
          <div
            className={`flex flex-col gap-4 sm:flex-row sm:gap-6 transition-opacity duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <a href="/heritage-timeline" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-[#A66242] hover:bg-[#532f26] px-8 py-6 text-base font-medium text-white md:text-lg"
              >
                Discover Our Heritage
              </Button>
            </a>

            <a href="/book-your-appointment" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-[#A66242] hover:bg-[#532f26] px-8 py-6 text-base font-medium text-white md:text-lg"
              >
                Book Your Appointment
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}