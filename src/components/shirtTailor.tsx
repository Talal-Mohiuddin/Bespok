"use client";

import * as React from "react";

type Step = {
  n: number;
  title: string;
  desc: string;
  more?: string;
  cta?: string;
};

const STEPS: Step[] = [
  {
    n: 1,
    title: "Consultation:",
    desc: "We’ll learn your style and needs during this initial meeting.",
    more:
      "We’ll also discuss the purpose of the shirt, (office, boardroom meeting, sports, casual, etc.) your preferred fabrics, and any design inspiration you might have.",
    cta: "Read More",
  },
  {
    n: 2,
    title: "Design Collaboration",
    desc: "Discuss your style preferences, fabric desires, and unique details with our bespoke style consultant.",
  },
  {
    n: 3,
    title: "Precise Measurements",
    desc: "Our tailors take meticulous measurements to ensure a perfect fit.",
  },
  {
    n: 4,
    title: "Baste Fitting",
    desc: "A preliminary version of your shirt using a different fabric, basted together, allows for initial adjustments and feedback.",
    more:
      "This step helps us identify changes early, including sleeve balance, chest ease, and posture adjustments, before final fabric is cut.",
    cta: "Read More",
  },
  {
    n: 5,
    title: "Forward Fitting",
    desc: "A more refined shirt is presented for further fit evaluation and customization. This is also known as the second fitting.",
  },
  {
    n: 6,
    title: "Finalization",
    desc: "The completed suit is ready for a final fitting to ensure everything is perfect including the collar and the sleeve length.",
  },
  {
    n: 7,
    title: "Delivery",
    desc: "Your bespoke masterpiece arrives, ready for you to cherish for many years to come.",
  },
];

function ProcessCard({
  step,
  isOpen,
  onToggle,
  anyOpen,
  centerLast,
}: {
  step: Step;
  isOpen: boolean;
  onToggle: () => void;
  anyOpen: boolean;
  centerLast?: boolean;
}) {
  return (
    <div
      className={[
        "relative flex flex-col items-center justify-start border border-dashed border-[#bcbcbc] bg-transparent px-10 py-10 text-center transition-all duration-300",
        anyOpen ? "min-h-[340px]" : "min-h-[220px]",
        centerLast ? "md:col-start-2" : "",
      ].join(" ")}
    >
      {/* number */}
      <div className="absolute left-6 top-5 font-serif text-[20px] font-semibold text-[#7a4b2c]">
        {step.n}
      </div>

      {/* title */}
      <h3 className="mt-10 font-serif text-[30px] leading-[1.1] text-[#111]">
        {step.title}
      </h3>

      {/* body */}
      <p className="mt-6 max-w-[360px] text-[15px] leading-7 text-[#333]">
        {step.desc}
      </p>

      {/* expandable "more" */}
      {step.more ? (
        <div
          className={[
            "max-w-[420px] overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "mt-6 max-h-[220px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <p className="text-[14px] leading-7 text-[#666]">{step.more}</p>
        </div>
      ) : null}

      {/* cta */}
      {step.cta ? (
        <button
          type="button"
          onClick={onToggle}
          className="mt-8 text-[14px] font-medium text-[#6b6b6b] underline underline-offset-4 hover:text-[#333]"
          aria-expanded={isOpen}
        >
          {isOpen ? "Read Less" : step.cta}
        </button>
      ) : null}
    </div>
  );
}

export default function TailorProcess() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1350px] px-4 pt-10 pb-14 sm:px-5 sm:pt-5 sm:pb-5">
        {/* Heading */}
        <h2 className="text-center font-serif text-[28px] tracking-[0.08em] text-[#111] sm:text-[33px]">
          THE PROCESS BEHIND OUR TAILOR MADE SHIRTS IN ISLAMABAD
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-[890px] text-center text-[15px] leading-7 text-[#333] sm:text-[16px]">
          Our <span className="font-semibold text-[#111]">bespoke shirt</span>{" "}
          process is a collaborative endeavor, ensuring your vision becomes a
          reality. Here’s what you can expect:
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
          {STEPS.map((step, i) => (
            <ProcessCard
              key={step.n}
              step={step}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              anyOpen={openIndex !== null}
              centerLast={i === 6}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
