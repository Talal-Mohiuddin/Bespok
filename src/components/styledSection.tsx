"use client";

export default function StyleSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[460px_1fr] lg:gap-16">
          {/* Image */}
          <div className="order-1 lg:order-none">
            <div className="mx-auto w-full max-w-[460px]">
              <img
                src="/style.webp"
                alt="Style"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-none text-center lg:text-left">
            <div className="max-w-[620px]">
              <h2 className="font-serif text-[22px] leading-tight tracking-wide text-[#A66242] sm:text-[30px] lg:text-[34px]">
                Bespoke Elegance, Crafted with Experience
              </h2>

              <div className="mt-5 space-y-6 text-[14.5px] leading-[1.9] text-black/70 sm:text-[15.5px]">
                <p>
                  <span className="font-semibold text-black">
                    At Bespoke,
                  </span>{" "}
                  our master tailors have over ten years of experience in
                  tailoring and are personally trained by the founder. The
                  consultants have vast experience handling and styling clientele
                  from around the world. Bespoke has an overseas clientele who
                  visit Dubai only to have their suits and clothing bespoke at
                  Bespoke in DIFC.
                </p>

                <p>
                  From the moment you enter the shop, VIP treatment begins,
                  making the client comfortable and is offered coffee to ensure
                  the client is relaxed. They patterned it with Saks Fifth Avenue
                  and Beverly Hills Rodeo Drive or, to be more precise,{" "}
                  <span className="font-semibold text-black">Savile Row</span>.
                  <span className="font-semibold text-black">
                    {" "}
                    Bespoke clothing
                  </span>{" "}
                  is all over the shop so that the client can see and feel{" "}
                  <span className="font-semibold text-black">bespoke</span>{" "}
                  clothing. Our consultant then asks the client what his goals are
                  and what he desires to have, or if not, then our consultant can
                  recommend what best suits the client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
