"use client";

import { useEffect, useState } from "react";
import { MobileNav } from "./Navcontent";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Static Navbar - visible at top of page */}
      <header className={`w-full bg-white transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* thin top divider */}
        <div className="h-px w-full bg-[#E9E9E9]" />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="relative flex h-[75px] sm:h-[75px] items-center">
            {/* Center logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <img
                src="/hero.png"
                alt="Bespoke"
                className="h-[50px] sm:h-[60px] w-auto select-none object-contain"
                draggable={false}
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(42%) sepia(45%) saturate(632%) hue-rotate(338deg) brightness(92%) contrast(88%)",
                }}
              />
            </div>

            {/* Right hamburger */}
            <div className="ml-auto">
              <MobileNav iconColor="text-[#A66242]" />
            </div>
          </div>
        </div>

        {/* thin bottom divider */}
        <div className="h-px w-full bg-[#E9E9E9]" />
      </header>

      {/* Sticky Navbar - slides down when scrolling */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-md transition-transform duration-500 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* thin top divider */}
        <div className="h-px w-full bg-[#E9E9E9]" />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="relative flex h-[65px] sm:h-[75px] items-center">
            {/* Center logo with text when scrolled */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
              <span className="font-serif tracking-widest text-[#A66242] text-sm">
                BESPOKE
              </span>
              <img
                src="/hero.png"
                alt="Bespoke"
                className="h-[40px] sm:h-[50px] w-auto select-none object-contain"
                draggable={false}
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(42%) sepia(45%) saturate(632%) hue-rotate(338deg) brightness(92%) contrast(88%)",
                }}
              />
              <span className="font-serif tracking-widest text-[#A66242] text-sm">
                TAILORS
              </span>
            </div>

            {/* Right hamburger */}
            <div className="ml-auto">
              <MobileNav iconColor="text-[#A66242]" />
            </div>
          </div>
        </div>

        {/* thin bottom divider */}
        <div className="h-px w-full bg-[#E9E9E9]" />
      </header>
    </>
  );
}