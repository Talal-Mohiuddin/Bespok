"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./Navcontent";

export function Navbar() {
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
      {/* Navbar background - slides down from top */}
      <div
        className={`fixed left-0 right-0 top-0 z-[9998] bg-white/87 backdrop-blur-sm transition-transform duration-500 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative flex items-center justify-center py-2">
          <div className="h-[50px]" />

          {/* Menu button inside navbar */}
          {isScrolled && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[10001] lg:right-12">
              <MobileNav iconColor="text-[#A66242]" />
            </div>
          )}
        </div>
      </div>

      {/* Logo with text - moves straight up */}
      <div
        className="fixed left-0 top-0 z-[9999] w-full transition-transform duration-500 pointer-events-none"
        style={{
          transform: isScrolled ? "translate(0, 0.5rem)" : "translate(0, 30vh)",
        }}
      >
        <div className="flex items-center justify-center gap-4">
          {/* BESPOKE text - only visible when scrolled */}
          <span
            className={`font-serif font-montecarlo  text-[#A66242]  tracking-[0.2em] transition-opacity duration-500 font-[1000] text-[24px] ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            Bespoke
          </span>

          {/* Logo */}
          <Link
            href="/"
            className={`relative transition-all duration-500 pointer-events-auto ${
              isScrolled ? "w-[50px] cursor-pointer" : "w-[200px]"
            }`}
          >
            {/* Original logo - fades out when scrolled */}
            <Image
              src="/hero.png"
              alt="Company Logo"
              width={200}
              height={200}
              className={`w-full h-auto transition-opacity duration-500 ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Colored logo - fades in when scrolled */}
            <Image
              src="/hero.png"
              alt="Company Logo"
              width={200}
              height={200}
              className={`absolute inset-0 w-full h-auto transition-opacity duration-500 ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(42%) sepia(45%) saturate(632%) hue-rotate(338deg) brightness(92%) contrast(88%)",
              }}
            />
          </Link>

          {/* TAILORS text - only visible when scrolled */}
          <span
            className={`font-serif  font-montecarlo text-[#A66242]  tracking-[0.2em] font-[1000] text-[24px]  transition-opacity duration-500 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            Tailors
          </span>
        </div>
      </div>

      {/* Menu button - fixed at top right when not scrolled */}
      {!isScrolled && (
        <div className="fixed right-4 top-4 z-[10001] lg:right-12 lg:top-6">
          <MobileNav iconColor="text-white" />
        </div>
      )}
    </>
  );
}
