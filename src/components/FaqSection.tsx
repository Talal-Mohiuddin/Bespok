"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to tailor a bespoke suit?",
      answer:
        "The process typically takes 8-12 weeks from initial consultation to final delivery. This includes multiple fittings and adjustments to ensure perfect fit and finish.",
    },
    {
      question:
        "What's the difference between made-to-measure and bespoke tailoring?",
      answer:
        "Bespoke tailoring involves creating a unique pattern from scratch specifically for you, with hand-stitched details and multiple fittings. Made-to-measure adapts existing patterns to your measurements with fewer customization options.",
    },
    {
      question: "Can I request specific fabrics for my bespoke garment?",
      answer:
        "Absolutely! We offer a wide selection of premium fabrics from renowned mills worldwide. You can also bring your own fabric, subject to our quality standards and suitability assessment.",
    },
    {
      question: "How many fittings are required for a bespoke garment?",
      answer:
        "Generally, we require 2-3 fittings. The first is for measurements and style discussion, the second for basted fitting adjustments, and the final fitting ensures everything is perfect before completion.",
    },
    {
      question: "Why choose bespoke tailoring over ready-to-wear?",
      answer:
        "Bespoke tailoring offers unparalleled fit, quality, and personalization. Every detail is crafted to your specifications, body shape, and style preferences, resulting in a garment that truly reflects your individuality.",
    },
    {
      question: "Where are you located?",
      answer:
        "Our atelier is located in the heart of the city, easily accessible by public transport. Please contact us to schedule an appointment and receive detailed directions.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl mb-12 text-foreground">FAQs</h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-muted/30 border-b border-border last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center gap-6 px-8 py-6 w-full text-left"
              >
                <Plus
                  className={`text-muted-foreground size-5 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
                <h3 className="font-serif text-lg text-muted-foreground">
                  {faq.question}
                </h3>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 pl-[4.5rem]">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
