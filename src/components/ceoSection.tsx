"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="bg-black">
      <div className="relative h-[780px] w-full overflow-hidden">
        {/* Background image */}
        <img
          src="/ceo.png"
          alt="CEO"
          className="absolute inset-0 h-full w-full object-cover object-[78%_30%]"
          draggable={false}
        />

        {/* Dark left fade + soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/10" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.70)_100%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] px-16">
          <div className="flex h-full w-full items-center">
            {/* Left text block */}
            <div className="w-[520px]">
              <h3 className="font-serif text-[44px] leading-none text-white">
                Humza Darr
              </h3>

              <p className="mt-6 max-w-[460px] font-serif text-[18px] leading-[1.6] text-white/80">
                Visionary leader with a passion for preserving traditional craftsmanship while embracing modern innovation in bespoke tailoring.
              </p>

              <p className="mt-10 font-serif text-[28px] text-white/80">CEO</p>
            </div>
          </div>
        </div>

        {/* Bottom center nav buttons */}
        <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-6">
            <button
              aria-label="Previous"
              className="flex h-[70px] w-[90px] items-center justify-center rounded-2xl border border-white/20 text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              aria-label="Next"
              className="flex h-[70px] w-[90px] items-center justify-center rounded-2xl border border-white/20 text-[#B8906D] transition hover:border-white/40 hover:bg-white/5"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}