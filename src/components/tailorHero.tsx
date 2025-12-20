"use client";

export default function TailorCTA() {
  return (
    <section className="relative h-[50vh] w-full sm:h-[45vh] lg:h-[48vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tailorHero.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[320px] items-center justify-center px-6 sm:min-h-[360px] lg:min-h-[400px]">
        <div className="mx-auto max-w-[900px] text-center">
          {/* Eyebrow */}
          <p className="mb-4 font-serif text-[20px] tracking-wide text-white/90 sm:text-[22px] lg:text-[24px]">
            Let’s Connect
          </p>

          {/* Heading */}
          <h1 className="font-serif text-[24px] leading-tight text-white sm:text-[30px] lg:text-[36px]">
            ARE YOU READY TO BEGIN YOUR
            <br />
            BESPOKE TAILORING JOURNEY?
          </h1>

          {/* Button */}
          <div className="mt-7">
            <button className="rounded-none bg-[#A66242] px-8 py-3 text-[14px] tracking-wide text-white transition hover:bg-[#532f26]">
              Get In Touch With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
