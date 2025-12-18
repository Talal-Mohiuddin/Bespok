"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-[9999] transition-all duration-[800ms] ease-[cubic-bezier(0.5,0,0,1)] ${
        isScrolled
          ? "left-1/2 top-0 w-[65px] -translate-x-1/2 translate-y-0 pt-[3px]"
          : "left-1/2 top-[45%] w-full -translate-x-1/2 -translate-y-1/2 text-center"
      }`}
    >
      <Image
        src="/hero.png"
        alt="Company Logo"
        width={200}
        height={200}
        className={`mx-auto transition-all duration-[800ms] ${
          isScrolled ? "w-[65px] h-auto" : "w-[200px] h-auto"
        }`}
      />
      <button className="absolute right-6 top-6 z-20 text-white lg:right-12 lg:top-12">
        <Menu className="h-8 w-8" />
        <span className="sr-only">Open menu</span>
      </button>
    </div>
  );
}
