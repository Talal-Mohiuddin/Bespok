"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
            <div className="absolute right-6 top-1/2 -translate-y-1/2 lg:right-12">
              <MobileNav iconColor="text-[#A66242]" />
            </div>
          )}
        </div>
      </div>

      {/* Logo with text - moves straight up */}
      <div
        className={`fixed left-1/2 z-[9999] -translate-x-1/2 transition-all duration-500 ${
          isScrolled ? "top-2" : "top-[45%] -translate-y-1/2"
        }`}
      >
        <div className="flex items-center gap-4">
          {/* BESPOKE text - only visible when scrolled */}
          {isScrolled && (
            <span
              className="font-serif tracking-widest text-[#A66242] text-sm transition-opacity duration-500"
            >
              BESPOKE
            </span>
          )}

          {/* Logo */}
          <div className={`relative transition-all duration-500 ${
            isScrolled ? "w-[50px]" : "w-[200px]"
          }`}>
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
                filter: "brightness(0) saturate(100%) invert(42%) sepia(45%) saturate(632%) hue-rotate(338deg) brightness(92%) contrast(88%)"
              }}
            />
          </div>

          {/* TAILORS text - only visible when scrolled */}
          {isScrolled && (
            <span
              className="font-serif tracking-widest text-[#A66242] text-sm transition-opacity duration-500"
            >
              TAILORS
            </span>
          )}
        </div>
      </div>
    </>
  );
}