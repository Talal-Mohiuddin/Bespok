"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const GOLD = "#A66242";

const faqData = [
    {
        question: "How long does it take to make a bespoke suit?",
        answer:
            "A bespoke suit typically takes 6-8 weeks to complete. This includes the initial consultation, fabric selection, multiple fittings, and final adjustments to ensure a perfect fit tailored specifically to your body measurements and preferences.",
    },
    {
        question: "What is the difference between made-to-measure and bespoke tailoring?",
        answer:
            "Made-to-measure uses pre-existing patterns that are adjusted to your measurements, while bespoke tailoring creates a completely unique pattern from scratch for each client. Bespoke offers superior fit, unlimited customization options, and uses traditional hand-crafting techniques passed down through generations.",
    },
    {
        question: "What's the difference between a custom and bespoke suit?",
        answer:
            "A custom suit often refers to made-to-measure garments with selected modifications. A bespoke suit is entirely hand-crafted from scratch, with every detail—from the pattern to the stitching—created specifically for you. Bespoke represents the highest level of tailoring craftsmanship.",
    },
    {
        question: "How many fittings are required for a bespoke garment?",
        answer:
            "Typically, 2-3 fittings are required for a bespoke garment. The first fitting involves taking detailed measurements and discussing design preferences. Subsequent fittings allow for adjustments in structure, silhouette, and finishing details to achieve the perfect fit.",
    },
    {
        question: "Why choose bespoke tailoring over ready-to-wear?",
        answer:
            "Bespoke tailoring offers an unparalleled fit that ready-to-wear cannot match. Every aspect is customized to your body shape, posture, and preferences. The quality of materials, construction, and attention to detail results in a garment that looks better, feels more comfortable, and lasts significantly longer.",
    },
    {
        question: "Can I request specific fabrics for my bespoke garment?",
        answer:
            "Absolutely! We offer an extensive selection of premium fabrics from the world's finest mills, including Loro Piana, Scabal, Holland & Sherry, and many more. You can also bring your own fabric if you have something specific in mind, and we'll be happy to work with it.",
    },
];

export default function FAQsSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
                <div className="grid grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-[1fr_1.2fr]">
                    {/* IMAGE - Shows second on mobile, first on desktop */}
                    <div className="overflow-hidden order-2 lg:order-1">
                        <img
                            src="https://bespoke.ae/wp-content/uploads/2025/09/01.webp"
                            alt="Bespoke tailor measuring a suit"
                            className="h-auto w-full object-cover lg:h-[500px]"
                            draggable={false}
                        />
                    </div>

                    {/* FAQ ACCORDION - Shows first on mobile, second on desktop */}
                    <div className="flex flex-col justify-center order-1 lg:order-2">
                        <div className="space-y-2">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-200 last:border-b-0 py-2"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center gap-3 py-4 text-left transition-colors hover:opacity-80"
                                        aria-expanded={openIndex === index}
                                    >
                                        <span
                                            className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-black"
                                        >
                                            {openIndex === index ? (
                                                <Minus className="h-5 w-5" strokeWidth={2} />
                                            ) : (
                                                <Plus className="h-5 w-5" strokeWidth={2} />
                                            )}
                                        </span>
                                        <span
                                            className="font-serif text-[15px] sm:text-[16px] leading-normal text-black"
                                        >
                                            {faq.question}
                                        </span>
                                    </button>

                                    {/* Answer - Collapsible with smooth push animation */}
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div
                                                className={`pb-4 pl-8 pr-4 transition-opacity duration-300 ${openIndex === index ? "opacity-100" : "opacity-0"
                                                    }`}
                                            >
                                                <p className="font-serif text-[14px] sm:text-[16px] leading-relaxed text-gray-600">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
