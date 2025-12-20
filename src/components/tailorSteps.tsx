"use client";

import React from "react";

export default function TailoringSteps() {
  return (
    <>
      {/* STEP 1 */}
      <section className="bg-[#F4F1EC] py-16">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[420px_1fr]">
            {/* IMAGE */}
            <div className="relative flex justify-center lg:justify-start lg:ml-12">
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full">
                <img
                  src="/tailorstep1.webp"
                  alt="Consultation"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* STEP BADGE */}
              <div className="absolute bottom-4 right-[80px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#8B5E3C] text-3xl font-medium text-white">
                1
              </div>
            </div>

            {/* TEXT */}
            <div className="max-w-[700px] lg:ml-[-40px]">
              <h2 className="font-serif text-[34px] leading-tight text-[#1F1F1F]">
                Consultation with a Style Expert
              </h2>

              {/* QUOTE */}
              <div className="relative mt-8">
                <span className="absolute -left-8 -top-2 font-serif text-[64px] leading-none text-[#D6D2CB]">
                  "
                </span>

                <p className="font-serif text-[20px] text-[#4A4A4A]">
                  We don't craft clothes; we craft personalities.
                </p>

                <div className="mt-3 h-px w-full bg-[#D6D2CB]" />

                <p className="mt-3 text-[16px] text-[#9A9A9A]">
                  Prakash Parmar
                </p>
              </div>

              {/* BODY */}
              <p className="mt-8 text-[16px] leading-relaxed text-[#5A5A5A]">
                Your journey to a perfectly tailored garment begins with a one-on-one
                consultation with our experienced Style Consultant. Whether you envision
                a designer wedding suit, a classic tuxedo, or a bespoke shirt, our
                consultant will work closely with you to understand your unique needs
                and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[420px_1fr]">
            {/* IMAGE */}
            <div className="relative flex justify-center lg:justify-start lg:ml-12">
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full">
                <img
                  src="/tailorstep2.webp"
                  alt="Fabric Selection"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* STEP BADGE */}
              <div className="absolute bottom-4 right-[80px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#8B5E3C] text-3xl font-medium text-white">
                2
              </div>
            </div>

            {/* TEXT */}
            <div className="max-w-[700px] lg:ml-[-40px]">
              <h2 className="font-serif text-[34px] leading-tight text-[#1F1F1F]">
                Fabric Selection & Expert Measurements
              </h2>

              {/* QUOTE */}
              <div className="relative mt-8">
                <span className="absolute -left-8 -top-2 font-serif text-[64px] leading-none text-[#D6D2CB]">
                  "
                </span>

                <p className="font-serif text-[20px] text-[#4A4A4A]">
                  Style is something each of us already has; all we need to do is find it.
                </p>

                <div className="mt-3 h-px w-full bg-[#D6D2CB]" />

                <p className="mt-3 text-[16px] text-[#9A9A9A]">
                  Diane von Furstenberg
                </p>
              </div>

              {/* BODY */}
              <p className="mt-8 text-[16px] leading-relaxed text-[#5A5A5A]">
                Next, our Style Consultant will guide you through a vast selection of fabrics, ensuring the
                perfect match for both the occasion and the weather. Following this comes the heart of
                bespoke tailoring, where meticulous measurements are taken using our specialized in-house
                technique. After all, a perfect fit is the cornerstone of bespoke clothing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="bg-[#F4F1EC] py-16">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[420px_1fr]">
            {/* IMAGE */}
            <div className="relative flex justify-center lg:justify-start lg:ml-12">
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full">
                <img
                  src="/tailorstep3.webp"
                  alt="Personalize Details"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* STEP BADGE */}
              <div className="absolute bottom-4 right-[80px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#8B5E3C] text-3xl font-medium text-white">
                3
              </div>
            </div>

            {/* TEXT */}
            <div className="max-w-[700px] lg:ml-[-40px]">
              <h2 className="font-serif text-[34px] leading-tight text-[#1F1F1F]">
                Personalize Every Detail
              </h2>

              {/* QUOTE */}
              <div className="relative mt-8">
                <span className="absolute -left-8 -top-2 font-serif text-[64px] leading-none text-[#D6D2CB]">
                  "
                </span>

                <p className="font-serif text-[20px] text-[#4A4A4A]">
                  The Details Make the Man
                </p>

                <div className="mt-3 h-px w-full bg-[#D6D2CB]" />
              </div>

              {/* BODY */}
              <p className="mt-8 text-[16px] leading-relaxed text-[#5A5A5A]">
                Bespoke tailoring is about creating a garment that reflects your style. From pocket styles
                and lapels to button details, you have complete control over every aspect of your garment.
                Our Style Consultant will be there to assist you in making these choices, ensuring your vision
                comes to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 4 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[420px_1fr]">
            {/* IMAGE */}
            <div className="relative flex justify-center lg:justify-start lg:ml-12">
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full">
                <img
                  src="/tailorstep4.webp"
                  alt="Perfect Fit"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* STEP BADGE */}
              <div className="absolute bottom-4 right-[80px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#8B5E3C] text-3xl font-medium text-white">
                4
              </div>
            </div>

            {/* TEXT */}
            <div className="max-w-[700px] lg:ml-[-40px]">
              <h2 className="font-serif text-[34px] leading-tight text-[#1F1F1F]">
                Achieving the Perfect Fit – A Collaborative Process
              </h2>

              {/* QUOTE */}
              <div className="relative mt-8">
                <span className="absolute -left-8 -top-2 font-serif text-[64px] leading-none text-[#D6D2CB]">
                  "
                </span>

                <p className="font-serif text-[20px] text-[#4A4A4A]">
                  Style is a way to say who you are without having to speak.
                </p>

                <div className="mt-3 h-px w-full bg-[#D6D2CB]" />

                <p className="mt-3 text-[16px] text-[#9A9A9A]">
                  Rachel Zoe
                </p>
              </div>

              {/* BODY */}
              <p className="mt-8 text-[16px] leading-relaxed text-[#5A5A5A]">
                Our commitment to exceptional craftsmanship sets us apart. During your first fitting, we'll
                use temporary fabric to refine the fit until it's perfect. We then create a detailed record of
                your measurements to ensure a smooth and efficient process for future orders. Typically,
                within 3-4 fittings and 4 weeks, your bespoke garment will be ready and handcrafted to your
                exact specifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}