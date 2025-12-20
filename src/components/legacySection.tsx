"use client";

import Image from "next/image";

const ACCENT = "#A66242";

export default function LegacySection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* TEXT */}
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <h2
              className="font-serif text-[28px] leading-tight sm:text-[34px]"
              style={{ color: ACCENT }}
            >
              Our Legacy
            </h2>

            <div className="mx-auto mt-6 max-w-[600px] space-y-6 text-[16px] leading-[1.85] text-black/70 lg:mx-0 lg:text-[17px]">
              <p>
                <span className="font-semibold text-black">
                  Bespoke Tailoring
                </span>{" "}
                is an offspring of the{" "}
                <span className="font-semibold text-black">
                  House of Parmar
                </span>
                , founded in{" "}
                <span className="font-semibold text-black">1956</span> in{" "}
                <span className="font-semibold text-black">
                  Bur Dubai, Dubai, United Arab Emirates
                </span>
                , by the late great master tailor from India,{" "}
                <span className="font-semibold text-black">
                  Mr. Pitamber Parmar
                </span>
                .
              </p>

              <p>
                Together with his three sons, he built a legacy of luxury
                tailoring in Dubai, rooted in craftsmanship, precision, and
                timeless elegance.
              </p>

              <p>
                The first shop is{" "}
                <span className="font-semibold text-black">Parmar Tailors</span>,
                a custom-made-to-measure tailoring shop with locations in{" "}
                <span className="font-semibold text-black">Bur Dubai</span> and{" "}
                <span className="font-semibold text-black">
                  Jumeirah Lake Towers
                </span>
                .
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-2 lg:order-1">
            <div className="mx-auto w-full max-w-[640px] lg:mx-0">
              <div className="relative overflow-hidden bg-white shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
                {/* Taller image, narrower width */}
                <div className="relative h-[600px] sm:h-[700px] lg:h-[780px] w-full">

                  <Image
                    src="/legacy.jpg"
                    alt="Our Legacy"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
