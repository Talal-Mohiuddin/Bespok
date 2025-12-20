"use client";

import { useState } from "react";
import Link from "next/link";

const GOLD = "#A66242";

export default function BespokeTrouserSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message: "",
    });

    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const faqItems = [
        {
            question: "What are the benefits of bespoke trousers?",
            answer: "Bespoke trousers offer a one-of-a-kind fit, superior quality fabrics, and the ability to customize every aspect of the design. This results in clothing that is truly unique and tailored specifically for your body and preferences."
        },
        {
            question: "Can I choose different styles or add personal touches to my trousers?",
            answer: "Absolutely! You can choose from various styles including flat-front, pleated, high-waisted, slim-fit, and more. Personal touches like custom buttons, unique linings, and monogramming are also available."
        },
        {
            question: "Do you offer alterations or adjustments if needed?",
            answer: "Yes, alterations during the fitting process are included in the price. We conduct fittings to ensure your trousers fit perfectly, and minor adjustments after delivery are also covered within the first year."
        },
        {
            question: "What are the typical turnaround times for bespoke trousers?",
            answer: "Bespoke trousers typically take 2-3 weeks to complete. This includes the initial consultation, precise measurements, fabric selection, and at least one fitting to ensure the perfect fit."
        },
        {
            question: "Are there any additional fees for bespoke trousers?",
            answer: "Our pricing is transparent and includes all standard customization options. Additional fees may apply for premium fabrics, rush orders, or exceptional custom features, which will be discussed during your consultation."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="bg-white">


            {/* Section 1: Look Your Best */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
                    {/* Title */}
                    <div className="text-center mb-10">
                        <h2
                            className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-2 tracking-wide font-bold"
                            style={{ color: '#1a1a1a' }}
                        >
                            LOOK YOUR BEST WITH BESPOKE TAILORED PANTS BY BESPOKE TAILORING
                        </h2>
                        <p className="font-serif text-[16px] sm:text-[18px] leading-relaxed text-gray-600 max-w-4xl mx-auto mb-6">
                            Bespoke trousers are a mark of refined elegance, meticulously crafted to complement your individual physique. Unlike ready-to-wear pants, which often lack the subtle nuances of a tailored fit, bespoke trousers are designed specifically for your body, ensuring exceptional fit and comfort at Bespoke Tailoring, we offer these tailored pants to give our clients unparalleled quality and style.
                        </p>
                        <p className="font-serif text-[16px] sm:text-[18px] leading-relaxed text-gray-600 max-w-4xl mx-auto">
                            Every pair of bespoke trousers we make is tailored to your personal measurements, so you can be assured of a perfect fit that highlights your silhouette while providing all-day comfort.
                        </p>
                    </div>

                    {/* Image Left, Text Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="border-2 border-dashed border-gray-400 p-4">
                            <img
                                src="https://bespoke.ae/wp-content/uploads/2025/09/The-Secret-to-a-Flawless-Look_-Tailored-Trousers.webp"
                                alt="Bespoke Tailored Trousers"
                                className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] object-cover"
                                draggable={false}
                            />
                        </div>

                        <div>
                            <h3
                                className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-2 tracking-wide font-bold"
                                style={{ color: '#1a1a1a' }}
                            >
                                The Secret to a Flawless Look: Tailored Trousers
                            </h3>
                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-4">
                                Nothing quite compares to custom-made pants. Each pair is an expression of your unique style and preferences. At our atelier, we understand the importance of each detail, from the waistband to the hem.
                            </p>
                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600">
                                Our master tailors use only the best fabrics and techniques to create bespoke trousers that are both stylish and durable. Whether you need formal dress pants, casual chinos, or something in between, Bespoke Tailoring is committed to craftsmanship and the perfect fit.
                            </p>
                        </div>
                    </div>

                    {/* How Bespoke Trousers Enhance Your Style */}
                    <div className="mt-12">
                        <p className="font-serif text-[16px] sm:text-[18px] leading-relaxed text-gray-600 mb-6">
                            Here's how <strong>bespoke trousers</strong> enhance your style:
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                                <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                                    <strong className="text-gray-800">Perfect Fit:</strong> Bespoke trousers are tailored to your exact measurements, including leg length, waist size, and posture. This ensures a precise fit that enhances your appearance and provides maximum comfort.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                                    <strong className="text-gray-800">Enhanced Comfort:</strong> Bespoke trousers are designed to move with you, avoiding the issues of tugging or adjusting often associated with ready-to-wear clothing.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                                    <strong className="text-gray-800">Customization Options:</strong> Bespoke tailoring allows you to choose from a wide range of fabrics, colors, patterns, and design details. Choose from a vast array of fabrics, colors, patterns, and details. From classic flat fronts to contemporary pleated styles, work with your tailor for pants to select the features that best reflect your personality and the occasion.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                                    <strong className="text-gray-800">Durable Quality:</strong> Our master tailors employ traditional techniques to deliver superior craftsmanship, creating garments designed to be a lasting and cherished addition to your wardrobe.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 2: CRAFTING YOUR BESPOKE TROUSERS */}
            <section className="py-12 md:py-16 border-t border-gray-200">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
                    <h2
                        className="font-serif text-[20px] sm:text-[24px] md:text-[28px] text-center mb-4 tracking-wide font-bold"
                        style={{ color: '#1a1a1a' }}
                    >
                        CRAFTING YOUR BESPOKE TROUSERS: A COLLABORATIVE PROCESS
                    </h2>
                    <p className="font-serif text-[16px] sm:text-[18px] leading-relaxed text-gray-600 text-center max-w-4xl mx-auto mb-10">
                        The bespoke tailoring process is a collaborative journey, where step is designed to bring your vision to life. Here's a glimpse into what you can expect:
                    </p>

                    {/* Row 1 - 3 boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {/* Step 1 */}
                        <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
                            <span className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold" style={{ color: GOLD }}>1</span>
                            <div className="text-center pt-6 sm:pt-8">
                                <h3 className="font-serif text-[18px] sm:text-[22px] italic mb-4" style={{ color: "#333" }}>
                                    Consultation
                                </h3>
                                <p className="font-serif text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                                    We'll learn your style and needs during this initial meeting. We'll also discuss the occasion for the trousers, your preferred fabrics, and any design inspiration you might have.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
                            <span className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold" style={{ color: GOLD }}>2</span>
                            <div className="text-center pt-6 sm:pt-8">
                                <h3 className="font-serif text-[18px] sm:text-[22px] italic mb-4" style={{ color: "#333" }}>
                                    Design Collaboration
                                </h3>
                                <p className="font-serif text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                                    Discuss your style preferences, fabric desires, and unique details with our bespoke style consultant.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
                            <span className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold" style={{ color: GOLD }}>3</span>
                            <div className="text-center pt-6 sm:pt-8">
                                <h3 className="font-serif text-[18px] sm:text-[22px] italic mb-4" style={{ color: "#333" }}>
                                    Precise Measurements
                                </h3>
                                <p className="font-serif text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                                    Our tailors take meticulous measurements to ensure a perfect fit.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - 3 boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {/* Step 4 */}
                        <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
                            <span className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold" style={{ color: GOLD }}>4</span>
                            <div className="text-center pt-6 sm:pt-8">
                                <h3 className="font-serif text-[18px] sm:text-[22px] italic mb-4" style={{ color: "#333" }}>
                                    Baste Fitting
                                </h3>
                                <p className="font-serif text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                                    A preliminary version of your suit using a different fabric, basted together, allows for initial adjustments and feedback.
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
                            <span className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold" style={{ color: GOLD }}>5</span>
                            <div className="text-center pt-6 sm:pt-8">
                                <h3 className="font-serif text-[18px] sm:text-[22px] italic mb-4" style={{ color: "#333" }}>
                                    Forward Fitting
                                </h3>
                                <p className="font-serif text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                                    A more refined suit is presented for further fit evaluation and customization. This is also known as the second fitting.
                                </p>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
                            <span className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold" style={{ color: GOLD }}>6</span>
                            <div className="text-center pt-6 sm:pt-8">
                                <h3 className="font-serif text-[18px] sm:text-[22px] italic mb-4" style={{ color: "#333" }}>
                                    Finalization
                                </h3>
                                <p className="font-serif text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                                    The completed pair of trouser is ready for a final fitting to ensure everything is perfect.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 - 1 box centered */}
                    <div className="flex justify-center">
                        {/* Step 7 */}
                        <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px] w-full md:w-1/3">
                            <span className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold" style={{ color: GOLD }}>7</span>
                            <div className="text-center pt-6 sm:pt-8">
                                <h3 className="font-serif text-[18px] sm:text-[22px] italic mb-4" style={{ color: "#333" }}>
                                    Delivery
                                </h3>
                                <p className="font-serif text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                                    Your bespoke masterpiece arrives, ready for you to cherish for many years to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Bespoke Trousers for Every Occasion */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        {/* Text Left */}
                        <div className="order-2 lg:order-1">
                            <h2
                                className="font-serif text-[22px] sm:text-[26px] md:text-[30px] mb-4 tracking-wide italic"
                                style={{ color: '#1a1a1a' }}
                            >
                                Bespoke Trousers for Every Occasion
                            </h2>
                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-6">
                                The appeal of <strong>bespoke trousers</strong> lies in their exceptional versatility. We design trousers tailored to suit any occasion, whether for formal business meetings or relaxed weekend outings. Here are some of our most popular options:
                            </p>

                            <h3 className="font-serif text-[20px] sm:text-[22px] mb-4 text-gray-800 italic">
                                Styles to Suit Every Setting:
                            </h3>

                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-4">
                                <strong>Formal Trousers:</strong> Impress at your next business meeting or formal event with impeccably tailored trousers in classic colours like charcoal grey, navy blue, or black. Choose a flat front or a subtle pleat for a sophisticated look.
                            </p>

                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-4">
                                <strong>Business Casual Trousers:</strong> Escalate your everyday office attire with <strong>bespoke trousers</strong> in comfortable yet polished fabrics like wool blends or cotton chinos. Opt for bolder colours like olive green or brown for a touch of personality.
                            </p>

                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-6">
                                <strong>Casual Trousers:</strong> Look effortlessly stylish for weekend outings with bespoke chinos or linen trousers. Experiment with playful patterns and colors to showcase your unique style.
                            </p>

                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600">
                                <Link href="/contact" style={{ color: GOLD }}>Contact us</Link> today to arrange your initial consultation with our tailor for pants and take the first step towards owning a pair of bespoke trousers that will become a cherished part of your wardrobe.
                            </p>
                        </div>

                        {/* Image Right with dotted border */}
                        <div className="border-2 border-dashed border-gray-400 p-4 order-1 lg:order-2">
                            <img
                                src="https://bespoke.ae/wp-content/uploads/2024/05/6-Trouser.jpg"
                                alt="Bespoke Trousers for Every Occasion"
                                className="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] object-cover"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: FAQ's */}
            <section className="py-6 md:py-8 bg-white">
                <div className="px-4 sm:px-6 md:px-10">
                    <h2 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-4" style={{ color: '#333' }}>
                        FAQ'S
                    </h2>

                    <div>
                        {faqItems.map((item, index) => (
                            <div key={index} className="mb-1">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center gap-3 py-2 px-3 text-left border border-gray-400 hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-light" style={{ color: GOLD }}>{openFAQ === index ? '−' : '+'}</span>
                                    <span className="font-serif text-[17px] sm:text-[19px] text-gray-800">
                                        {item.question}
                                    </span>
                                </button>
                                {openFAQ === index && (
                                    <div className="px-3 py-2 pl-10">
                                        <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
