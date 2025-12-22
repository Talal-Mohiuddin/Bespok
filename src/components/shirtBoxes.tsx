"use client";

export default function Shirtboxes() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1350px] px-6 py-12 sm:px-10 sm:py-16">
        {/* 2x2 layout */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {/* Top Left: Image (dashed box) - Order 1 on mobile */}
          <div className="order-1 border border-dashed border-[#111] p-6">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#f3f3f3]">
              <img
                src="/shirt1.png"
                alt="Bespoke shirt style"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Top Right: Text - Order 2 on mobile */}
          <div className="order-2 pt-2 md:order-2">
            <h3 className="font-serif text-[20px] leading-[1.35] text-[#2b2b2b] sm:text-[25px]">
              Bespoke Men&apos;s Shirts that Go Beyond the Basics
            </h3>

            <p className="mt-4 max-w-[560px] text-[18px] leading-6 text-[#444] sm:text-[18px] sm:leading-7">
              Our craft goes far beyond the traditional white business shirt. We
              curate an exquisite range of fabrics, colors, and patterns,
              ensuring each shirt is a masterpiece. Every detail, every stitch,
              designed exclusively for you.
            </p>

            <div className="mt-6 space-y-5 text-[18px] leading-6 text-[#444] sm:text-[18px] sm:leading-7">
              <p className="max-w-[560px]">
                <span className="font-semibold text-[#2b2b2b]">
                  Formal Shirts:
                </span>{" "}
                Keep it classic with crisp white{" "}
                <span className="font-semibold text-[#2b2b2b]">
                  bespoke shirts
                </span>{" "}
                made from premium two-ply cotton. Add a touch of personality
                with subtle stripes or a contrasting collar, simple, refined,
                and effortlessly stylish.
              </p>

              <p className="max-w-[560px]">
                <span className="font-semibold text-[#2b2b2b]">
                  Business Shirts:
                </span>{" "}
                Stand out in the boardroom with a tailored shirt in smooth
                broadcloth. Go for shades of timeless blue or sharp pinstripes
                paired with a button-down collar for a polished, professional
                vibe.
              </p>

              <p className="max-w-[560px]">
                <span className="font-semibold text-[#2b2b2b]">
                  Casual Shirts:
                </span>{" "}
                For a relaxed yet put-together look, go for a{" "}
                <span className="font-semibold text-[#2b2b2b]">
                  bespoke linen shirt
                </span>{" "}
                in soft, natural tones. A camp collar or minimalist band collar
                brings just the right amount of casual cool to your wardrobe.
              </p>

              <p className="max-w-[560px]">
                <span className="font-semibold text-[#2b2b2b]">
                  Evening Shirts:
                </span>{" "}
                For those unforgettable nights, go all out with a bespoke tuxedo
                shirt. Choose luxurious silk or sleek black poplin, complete
                with French cuffs and statement cufflinks, pure sophistication.
              </p>
            </div>
          </div>

          {/* Bottom Right: Image (dashed box) - Order 3 on mobile */}
          <div className="order-3 border border-dashed border-[#111] p-6 md:order-4 md:mt-2">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#f3f3f3]">
              <img
                src="/shirt2.png"
                alt="Bespoke shirt benefits"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Left: Text - Order 4 on mobile */}
          <div className="order-4 pt-1 md:order-3">
            <h3 className="font-serif text-[20px] leading-[1.35] text-[#2b2b2b] sm:text-[25px]">
              Benefits of Bespoke Shirts: An Investment in Yourself
            </h3>

            <p className="mt-4 max-w-[600px] text-[18px] leading-6 text-[#444] sm:text-[18px] sm:leading-7">
              While{" "}
              <span className="font-semibold text-[#2b2b2b]">
                tailor made shirts
              </span>{" "}
              may require a higher upfront investment, the benefits are
              undeniable:
            </p>

            <div className="mt-6 space-y-5 text-[18px] leading-6 text-[#444] sm:text-[18px] sm:leading-7">
              <p className="max-w-[600px]">
                <span className="font-semibold text-[#2b2b2b]">
                  Flawless Fit:
                </span>{" "}
                Say goodbye to ill-fitting shoulders, awkward sleeves, and
                unflattering silhouettes. Tailor made shirts in Dubai from
                Bespoke Tailoring are created as per your unique measurements,
                ensuring a fit that enhances your form. From the precise collar
                size to the perfect sleeve length, every detail is crafted with
                precision for effortless elegance.
              </p>

              <p className="max-w-[600px]">
                <span className="font-semibold text-[#2b2b2b]">
                  Uncompromising Quality:
                </span>{" "}
                Our bespoke men&apos;s shirts are tailored using the finest and
                rarest fabrics, chosen for their exceptional durability and
                sophistication. We use only authentic mother-of-pearl buttons,
                valued for their unmatched resilience and timeless luxury. Each
                garment reflects meticulous craftsmanship, creating shirts that
                stand the test of time.
              </p>

              <p className="max-w-[600px]">
                <span className="font-semibold text-[#2b2b2b]">
                  Enduring Comfort:
                </span>{" "}
                Tailor made shirts move seamlessly with you, offering
                unrestricted comfort and ease throughout your day. This
                unwavering comfort translates into confidence, ensuring you feel
                at your absolute best.
              </p>

              <p className="max-w-[600px]">
                <span className="font-semibold text-[#2b2b2b]">
                  A Statement of Style:
                </span>{" "}
                Bespoke clothing is the ultimate expression of individuality.
                With limitless customization options, you can create a shirt
                that is distinctly yours, a masterpiece that embodies your
                taste, personality, and sophistication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
