"use client";

import { Button } from "@/components/ui/button";

export default function WorkSection() {
  return (
    <section className="relative w-full bg-black">
      {/* Fixed aspect close to screenshot (wide, not too tall) */}
      <div className="relative h-[680px] w-full overflow-hidden md:h-[640px] lg:h-[720px]">
        {/* Background image */}
        <img
          src="/works.png"
          alt="How Bespoke Works"
          className="absolute inset-0 h-full w-full object-cover object-top"
          draggable={false}
        />

        {/* Subtle overlay - much lighter */}
        <div className="absolute inset-0 bg-black/5" />
        
        {/* Gentle gradient on right side only for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-end px-10 pb-12 md:items-center md:pb-0">
          {/* Right aligned block */}
          <div className="ml-auto w-full max-w-[540px] text-center md:text-right">
            <h3 className="font-serif text-[36px] leading-tight text-white drop-shadow-lg md:text-[42px]">
              How Bespoke Works
            </h3>

            <p className="mt-6 text-center font-serif text-[16px] leading-[1.75] text-white drop-shadow-md md:text-[19px] md:text-right">
              At Bespoke Tailors Islamabad, we craft garments that fit perfectly and
              reflect your style. From selecting premium fabrics to precise
              measurements and expert tailoring, every piece is made to bring out
              your confidence and elegance.
            </p>

            <div className="mt-10 flex justify-center md:justify-end">
              <Button
                size="lg"
                className="bg-[#A66242] hover:bg-[#532f26] h-[56px] w-[260px] rounded-md font-serif text-[18px] text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-[#A66242]/30"
              >
                Explore Now
              </Button>
            </div>
          </div>
        </div>

        {/* Light bottom gradient for subtle depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>
    </section>
  );
}