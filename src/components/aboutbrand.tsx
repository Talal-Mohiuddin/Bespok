"use client";

export default function BrandHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1400px] flex-col items-center justify-center px-6 text-center sm:min-h-[720px]">
        {/* Eyebrow */}
        <p className="mb-3 font-serif text-[14px] tracking-wide text-white/80">
          Guided by Experts
        </p>

        {/* Heading */}
        <h1 className="font-serif text-[30px] leading-tight tracking-wide text-white sm:text-[44px]">
          WEAR A LEGACY, NOT JUST A SUIT
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-[640px] text-[14px] leading-relaxed text-white/85 sm:text-[16px]">
          Every stitch tells a story. Be a part of a seven-generation tradition
          rooted in excellence.
        </p>

        {/* CTA */}
        <button className="mt-10 bg-[#A66242] px-10 py-4 font-medium text-white transition-colors hover:bg-[#8f5236]">
          Book an Appointment
        </button>
      </div>
    </section>
  );
}
