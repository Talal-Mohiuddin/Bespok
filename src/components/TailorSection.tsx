"use client";

export default function TailorSection() {
  return (
    <section className="bg-white">
      {/* Increased top and bottom spacing */}
      <div className="mx-auto max-w-[1240px] px-10 py-24">
        <div className="grid items-center gap-20 lg:grid-cols-[580px_1fr]">
          {/* Text block - appears first on mobile */}
          <div className="max-w-[560px] text-center lg:order-2 lg:text-left">
            <h2 className="font-serif text-[28px] leading-[1.3] text-[#A66242]">
              Bespoke Tailors Islamabad, Where Elegance Meets Precision
            </h2>

            {/* Bigger welcome text */}
            <p className="mt-8 font-serif text-[16px] leading-[2] text-[#1A1A1A]">
              Welcome to Bespoke Tailors Islamabad your destination for
              masterful tailoring and timeless style. We craft custom-made
              garments that reflect your personality, lifestyle, and confidence
              from classic formalwear to modern bespoke outfits. With decades of
              experience and a passion for detail, every piece we create is a
              blend of art, comfort, and fit.
            </p>

            <a
              href="#"
              className="mt-12 inline-flex items-center gap-3 font-serif text-[16px] text-[#A66242]"
            >
              <span>Explore More</span>
              <span className="text-[20px] leading-none">→</span>
            </a>
          </div>

          {/* Image card - appears second on mobile */}
          <div className="relative lg:order-1">
            <div className="overflow-hidden border border-[#A66242]">
              <img
                src="/tailorSection.jpg"
                alt="Bespoke tailoring"
                className="block h-[680px] w-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}