"use client";

import React from "react";

const ACCENT = "#A66242";

export default function WorksStepIntro() {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          {/* Image */}
          <div className="order-1 lg:order-none flex justify-center">
            <div className="w-full max-w-[460px]">
              <img
                src="/works2.webp"
                alt="Bespoke garment"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-none">
            <div className="w-full max-w-[520px] text-center lg:text-left lg:ml-[-40px]">
              <h2
                className="font-serif text-[20px] leading-[1.25] sm:text-[24px] lg:text-[26px]"
                style={{ color: ACCENT }}
              >
                Craft Your Dream Bespoke Garment in 4
                <br />
                Simple Steps
              </h2>

              <p className="mt-4 text-[14.5px] leading-[1.8] text-black/70 sm:text-[15px]">
                Getting a bespoke garment can be simple enough if you are dealing
                with a genuine bespoke tailor. We make it easier for our clients
                because we have mastered bespoke tailoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}