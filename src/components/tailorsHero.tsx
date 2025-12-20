"use client";

import Link from "next/link";

const ACCENT = "#A66242";


const BG_IMAGE = "/tailorshero.webp";

export default function TailorsHero() {
  return (
    <section className="w-full bg-white">
      <div
        className="relative mx-auto w-full max-w-[1600px] overflow-hidden"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay to match screenshot */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative flex min-h-[600px] items-center justify-center px-6 py-24 sm:px-10 lg:min-h-[720px]">

          <div className="mx-auto w-full max-w-[980px] text-center text-white">
            <p className="font-serif text-[14px] tracking-wide text-white/90 sm:text-[15px]">
              Guided by Experts
            </p>

            <h1 className="mt-6 font-serif text-[22px] leading-[1.25] tracking-[0.06em] sm:text-[30px] lg:text-[38px]">
              PRECISION TAILORING BEGINS WITH EXPERT
              <br className="hidden sm:block" />
              CONSULTATION
            </h1>

            <p className="mx-auto mt-6 max-w-[820px] text-[15px] leading-[1.85] text-white/90 sm:text-[16px]">
              Our style consults will present an array of luxurious fabrics, and
              the stylist will explain the entire bespoke procedure. Once the
              client has decided, our master tailor will take the measurements.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex h-[54px] items-center justify-center px-10 text-[16px] text-white transition-opacity hover:opacity-95"
                style={{ backgroundColor: ACCENT }}
              >
                Get In Touch With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
