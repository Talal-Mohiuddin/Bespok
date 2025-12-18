import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/herobg.png"
          alt="Luxury bespoke tailoring"
          className="h-full w-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Mobile Menu Button */}
      <button className="absolute right-6 top-6 z-20 text-white lg:right-12 lg:top-12">
        <Menu className="h-8 w-8" />
        <span className="sr-only">Open menu</span>
      </button>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Headline */}
        <h1 className="mt-80 max-w-5xl text-center font-serif text-4xl leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="italic">
            A Heritage of Craft. A Future in True Bespoke.
          </span>
        </h1>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            size="lg"
            className="bg-[#8B6F47] px-8 py-6 text-base font-medium text-white hover:bg-[#7A5F3A] md:text-lg"
          >
            Discover Our Heritage
          </Button>
          <Button
            size="lg"
            className="bg-[#8B6F47] px-8 py-6 text-base font-medium text-white hover:bg-[#7A5F3A] md:text-lg"
          >
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
