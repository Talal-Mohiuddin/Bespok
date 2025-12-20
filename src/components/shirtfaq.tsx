"use client";

import * as React from "react";

type FaqItem = {
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    q: "Why are bespoke shirts more expensive than ready-to-wear options?",
    a: "Bespoke shirts are made from scratch for your body and preferences. The cost reflects premium fabrics, precise pattern drafting, multiple checkpoints (fittings), and hand-finished details that improve fit, comfort, and longevity compared to mass-produced shirts.",
  },
  {
    q: "How long and how many fittings are needed to tailor a bespoke shirt?",
    a: "Most bespoke shirts take around 2 to 4 weeks depending on fabric availability and workload. Typically, 1 fitting is enough for a first shirt, with minor adjustments after. Returning clients often need fewer revisions once the pattern is perfected.",
  },
  {
    q: "Can I customize every aspect of my tailor made shirts?",
    a: "Yes. You can personalize the collar and cuff style, placket, buttons, monogram, fit, length, sleeve details, pocket style, and more. Your tailor will guide you toward choices that suit your proportions and the occasion.",
  },
  {
    q: "What are the benefits of wearing bespoke shirts?",
    a: "A bespoke shirt offers a cleaner silhouette, better comfort, and improved mobility because it is built around your measurements and posture. You also get higher quality fabrics and details that tend to last longer and look sharper over time.",
  },
  {
    q: "When should I wear a bespoke shirt?",
    a: "Anytime you want a confident, polished look. Bespoke shirts are ideal for business, formal events, weddings, and important meetings, but they also elevate smart-casual outfits when paired with chinos or denim.",
  },
  {
    q: "How should a bespoke shirt fit?",
    a: "It should sit cleanly across the shoulders, allow comfortable movement in the arms, and lie flat at the collar without gaping. The chest and waist should be tailored, not tight, and the sleeve length should end at the wrist bone with a slight cuff show under a jacket.",
  },
];

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative inline-flex h-5 w-5 items-center justify-center flex-shrink-0">
      {/* horizontal */}
      <span className="absolute h-[2px] w-4 rounded bg-[#1a1a1a]" />
      {/* vertical (collapses when open) */}
      <span
        className={[
          "absolute h-4 w-[2px] rounded bg-[#1a1a1a] transition-transform duration-200",
          open ? "scale-y-0" : "scale-y-100",
        ].join(" ")}
      />
    </span>
  );
}

export default function ShirtFaq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 sm:py-16">
        {/* Title */}
        <h2 className="font-serif text-[28px] tracking-wide text-[#111] sm:text-[32px] mb-8">
          FAQ's
        </h2>

        {/* List */}
        <div className="space-y-[-25px]">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={open ? "mb-6" : ""}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-start gap-4 p-5 text-left hover:bg-gray-50 transition-colors border border-[#d0d0d0] rounded-sm -mb-px"
                  aria-expanded={open}
                >
                  <PlusMinus open={open} />
                  <span className="text-[16px] font-normal text-[#1a1a1a] sm:text-[17px] flex-1">
                    {item.q}
                  </span>
                </button>

                {/* Smooth slide */}
                <div
                  className={[
                    "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="min-h-0 pt-3 pb-3 pl-9">
                    <p className="text-[14px] leading-6 text-[#555] sm:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}