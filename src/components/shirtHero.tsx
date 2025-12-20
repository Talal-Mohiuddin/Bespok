"use client";

export default function ShirtHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/shirtHero.jpg)" }}
        aria-hidden="true"
      />

      {/* Brown overlay (warmer + richer) */}
      <div className="absolute inset-0 bg-[#4a2616]/90" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left block */}
          <div className="text-center text-white">
            <p className="font-serif text-[28px] leading-tight tracking-wide sm:text-[32px]">
              Bespoke Tailoring:
            </p>
            <p className="mt-4 font-serif text-[28px] leading-tight tracking-wide sm:text-[32px]">
              More Than Just Shirts
            </p>

            <p className="mx-auto mt-8 max-w-[520px] text-[16px] leading-7 text-white/85">
              While <span className="font-semibold text-white">bespoke shirts</span>{" "}
              are a cornerstone of our service, we offer a comprehensive range of
              bespoke clothing options. From handcrafted suits with over 9,000
              stitches to luxurious overcoats and trousers, our{" "}
              <span className="font-semibold text-white">bespoke master tailors</span>{" "}
              can create a wardrobe that speaks volumes about your unique style.
            </p>
          </div>

          {/* Right block */}
          <div className="text-center text-white">
            <p className="font-serif text-[28px] leading-tight tracking-wide sm:text-[32px]">
              Ready to Escalate Your Look?
            </p>

            <p className="mx-auto mt-8 max-w-[560px] text-[16px] leading-7 text-white/85">
              Stop by our <span className="font-semibold text-white">tailor shop</span>{" "}
              and start building a bespoke shirt collection that&apos;s all about
              you. Our skilled tailors are here to create pieces that fit
              perfectly, capture your personality, and make you feel your best.
            </p>

            <p className="mx-auto mt-8 max-w-[560px] text-[16px] leading-7 text-white/85">
              <span className="font-semibold text-white">Schedule</span> your
              consultation today and discover the world of bespoke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
