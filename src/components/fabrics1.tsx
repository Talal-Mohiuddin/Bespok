
"use client";

import React from "react";

const ACCENT = "#A66242";

export default function FabricsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-8 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[620px_1fr]">

          {/* IMAGE */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[620px]">
              <div className="overflow-hidden border border-black/10">
                <img
                  src="/fabrics.webp"
                  alt="Luxury fabric swatches"
                  className="h-[380px] sm:h-[420px] lg:h-[460px] w-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="max-w-[500px] text-center">
              <h2
                className="
                  font-serif
                  text-[26px]
                  sm:text-[30px]
                  lg:text-[34px]
                  leading-[1.15]
                  tracking-wide
                "
                style={{ color: ACCENT }}
              >
                EXPLORE THE WORLD’S
                <br />
                FINEST FABRICS
              </h2>

              <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.9] text-black/65">
                Bespoke showcases an exquisite collection of premium fabric
                brands sourced from around the world, including Liberty, Alumo,
                Thomas Mason, Loro Piana, and more. Each fabric is highlighted
                with a brief description emphasizing its craftsmanship,
                heritage, and appeal to modern sartorial elegance. Whether
                Italian, Swiss, or British in origin, these textiles represent
                the highest standards in luxury tailoring.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
